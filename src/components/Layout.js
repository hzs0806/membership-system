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
  const [showSupportCategories, setShowSupportCategories] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const hideTimeoutRef = useRef(null); // Ref to store the timeout ID
  const [showReportTooltip, setShowReportTooltip] = useState(false);

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

  const supportCategories = [
    // Removed "AI材质初级鉴别" from supportCategories
  ];

  // 判断按钮是否启用
  const isButtonEnabled = (link) => {
    return link === "支持服务";
  };

  const handleMouseEnter = (link) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setHoveredItem(link);
    
    // 根据不同的按钮显示不同的下拉菜单
    if (link === "知识" && isButtonEnabled(link)) {
      setShowKnowledgeCategories(true);
      setShowSupportCategories(false);
    } else if (link === "支持服务") {
      setShowSupportCategories(true);
      setShowKnowledgeCategories(false);
    }
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowKnowledgeCategories(false);
      setShowSupportCategories(false);
      setHoveredItem(null);
    }, 100);
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
                    className={isButtonEnabled(link) ? "" : "disabled-link"}
                    onMouseEnter={() => handleMouseEnter(link)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link}
                    {hoveredItem === link && !isButtonEnabled(link) && (
                      <div className="tooltip" style={{ display: 'block' }}>建设中，敬请期待！</div>
                    )}
                  </li>
                ) : (
                  <li
                    className={isButtonEnabled(link) ? "" : "disabled-link"}
                    onMouseEnter={() => handleMouseEnter(link)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {link}
                    {hoveredItem === link && !isButtonEnabled(link) && (
                      <div className="tooltip" style={{ display: 'block' }}>建设中，敬请期待！</div>
                    )}
                  </li>
                )}
              </React.Fragment>
            ))}
          </ul>
          <div className="nav-icons">
            <IoSearchOutline size={18} color="#333" />
            <span
              onMouseEnter={() => setShowReportTooltip(true)}
              onMouseLeave={() => setShowReportTooltip(false)}
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <GoReport size={18} color="#333" />
              {showReportTooltip && (
                <div className="tooltip" style={{ top: '120%', left: '80%', whiteSpace: 'pre-line', width: '100px' }}>
                  意见反馈
                </div>
              )}
            </span>
          </div>
        </div>

        {/* 知识下拉菜单 */}
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

        {/* 支持服务下拉菜单 */}
        <div
          className={`knowledge-dropdown-full-width ${showSupportCategories ? 'show' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="knowledge-categories-list">
            {supportCategories.map((item, itemIndex) => (
              <li key={itemIndex}>
                <Link to={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 毛玻璃背景遮罩层 */}
        <div className={`backdrop-blur-overlay ${(showKnowledgeCategories || showSupportCategories) ? 'show' : ''}`}></div>

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