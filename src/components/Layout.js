import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPageStyles.css'; // 导航栏样式
import { TfiAlignJustify } from 'react-icons/tfi';
import { IoSearchOutline } from 'react-icons/io5';
import { GoReport } from 'react-icons/go';
import MobileMenu from './MobileMenu';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showKnowledgeCategories, setShowKnowledgeCategories] = useState(false);
  const hideTimeoutRef = useRef(null); // Ref to store the timeout ID

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    "知识",
    "藏品",
    "定制",
    "养护",
    "鉴定",
    "孤品",
    "支持服务"
  ];

  const knowledgeCategories = [
    { 
      text: "材质百科", 
      url: "/knowledge/material",
      subCategories: [
        { text: "木材类", url: "/knowledge/material/wood" },
        { text: "宝玉石类", url: "/knowledge/material/gemstone" },
        { text: "金属 / 配饰类", url: "/knowledge/material/metal-accessories" },
      ]
    },
    {
      text: "盘玩技巧", 
      url: "/knowledge/playing",
      subCategories: [
        { text: "新手入门", url: "/knowledge/playing/beginner" },
        { text: "进阶养护", url: "/knowledge/playing/advanced" },
        { text: "特殊场景", url: "/knowledge/playing/special" },
      ]
    },
    {
      text: "文化寓意", 
      url: "/knowledge/culture",
      subCategories: [
        { text: "传统符号", url: "/knowledge/culture/traditional-symbols" },
        { text: "跨界融合", url: "/knowledge/culture/cross-border-fusion" },
        { text: "闺阁匠心", url: "/knowledge/culture/boudoir-craftsmanship" },
      ]
    },
    {
      text: "搭配美学", 
      url: "/knowledge/aesthetics",
      subCategories: [
        { text: "场景化搭配", url: "/knowledge/aesthetics/contextual" },
        { text: "色彩法则", url: "/knowledge/aesthetics/color-rules" },
        { text: "层次设计", url: "/knowledge/aesthetics/layering-design" },
      ]
    }
  ];

  const handleMouseEnter = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setShowKnowledgeCategories(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowKnowledgeCategories(false);
    }, 100); // Small delay (e.g., 100ms)
  };

  return (
    <>
      <div className="top-bar">
        <div className="desktop-nav">
          <div className="nav-logo">
            <Link to="/">
              <span style={{ fontSize: '18px', color: '#333', fontWeight: 'bold' }}>Mune</span>
            </Link>
          </div>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <React.Fragment key={index}>
                {link === "知识" ? (
                  <li
                    className={`knowledge-link-trigger`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link}
                  </li>
                ) : (
                  <li
                    className={`${link === "鉴定" ? "disabled-link" : ""}`}
                  >
                    {link}
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
          <div className="nav-icons">
            <IoSearchOutline size={18} color="#333" />
            <GoReport size={18} color="#333" />
          </div>
        </div>

        {/* 下拉菜单和背景遮罩现在都在顶层，由 Layout 组件控制其显示 */}
        <div
          className={`knowledge-dropdown-full-width ${showKnowledgeCategories ? 'show' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="knowledge-categories-list">
            {knowledgeCategories.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link to={item.url} className={item.text === "材质百科" ? "material-baike-item" : ""}>{item.text}</Link>
                {item.subCategories && (
                  <ul className="knowledge-sub-categories">
                    {item.subCategories.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link to={subItem.url}>{subItem.text}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* 毛玻璃背景遮罩层 */}
        <div className={`backdrop-blur-overlay ${showKnowledgeCategories ? 'show' : ''}`}></div>

        <div className="mobile-left-icons">
          <Link to="/">
            <span style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>Mune</span>
          </Link>
        </div>

        <div className="mobile-right-icons">
          <IoSearchOutline size={20} color="black" />
          <GoReport size={20} color="black" />
          <div className={`mobile-menu-icon-container ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
            <TfiAlignJustify size={20} color="black" />
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />

      <div>
        {children}
      </div>
    </>
  );
};

export default Layout; 