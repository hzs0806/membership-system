import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/WoodMaterialPage.css';
import woodImg from '../assets/images/ppdxbackground.jpg';

const woodList = [
  {
    name: '黄花梨',
    desc: '500年成材的木中君子',
    img: woodImg,
    detailPath: '/knowledge/material/wood/huanghuali',
  },
  {
    name: '紫檀',
    desc: '帝王之木，色泽深沉',
    img: woodImg,
  },
  {
    name: '沉香',
    desc: '香韵悠长，稀世珍品',
    img: woodImg,
  },
  {
    name: '花榈木',
    desc: '纹理独特，色彩丰富',
    img: woodImg,
  },
  {
    name: '鸡翅木',
    desc: '质地坚硬，花纹如翅',
    img: woodImg,
  },
];

const navTabs = [
  '全部木材',
  '木材科普',
  '木材鉴别',
  '养护知识',
  '更多',
];

const CARD_GAP = 32; // px
const CARD_WIDTH = 420; // px
const SLIDE_PERCENT = 0.3; // 每次滑动30%

const WoodMaterialPage = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const totalContentWidth = woodList.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP;
  const maxOffset = Math.max(0, totalContentWidth - containerWidth);

  // 监听容器宽度变化，动态计算最大偏移量
  useEffect(() => {
    function handleResize() {
      if (sliderRef.current) {
        const width = sliderRef.current.offsetWidth;
        setContainerWidth(width);
        setOffsetX(x => Math.min(Math.max(0, x), Math.max(0, woodList.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP - width)));
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 按钮点击滑动30%
  const handlePrev = () => {
    setOffsetX(x => Math.max(0, x - containerWidth * SLIDE_PERCENT));
  };
  const handleNext = () => {
    setOffsetX(x => {
      if (maxOffset === 0) return 0;
      const next = x + containerWidth * SLIDE_PERCENT;
      // 如果滑动后剩余不足一屏，或 next 超过 maxOffset，直接对齐 maxOffset
      if (next + containerWidth >= totalContentWidth - 1 || next > maxOffset) return maxOffset;
      return next;
    });
  };

  const canPrev = offsetX > 0;
  const canNext = offsetX < maxOffset;

  return (
    <div className="material-page">
      <h1 className="material-main-title">木材百科</h1>
      <ul className="material-nav">
        {navTabs.map((tab, idx) => (
          <li key={tab} className={idx === 0 ? 'active' : ''}>{tab}</li>
        ))}
      </ul>
      <div className="material-subtitle">全部木材，知识科普。</div>
      <div className="material-card-slider" ref={sliderRef}>
        {canPrev && (
          <button className="material-slider-btn left" onClick={handlePrev}>&lt;</button>
        )}
        <div
          className="material-card-list no-scroll"
          style={{
            transform: `translateX(-${offsetX}px)`,
            transition: 'transform 0.5s cubic-bezier(.4,0,.2,1)'
          }}
        >
          {woodList.map((item) => (
            <div className="material-card" key={item.name}>
              <img className="material-card-img" src={item.img} alt={item.name} />
              <div className="material-card-title">{item.name}</div>
              <div className="material-card-desc">{item.desc}</div>
              {item.name === '黄花梨' ? (
                <button className="material-card-btn" onClick={() => navigate(item.detailPath)}>更多</button>
              ) : (
                <button className="material-card-btn">更多</button>
              )}
            </div>
          ))}
        </div>
        {canNext && (
          <button className="material-slider-btn right" onClick={handleNext}>&gt;</button>
        )}
      </div>
    </div>
  );
};

export default WoodMaterialPage; 