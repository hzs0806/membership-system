import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/MobileMenu.css';

function MobileMenu({ isOpen, onClose }) {
  const location = useLocation();
  const [clickedItem, setClickedItem] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showSupportSubmenu, setShowSupportSubmenu] = useState(false);

  const titles = [
    "知识",
    "藏品",
    "定制",
    "养护",
    "鉴定",
    "孤品",
    "支持服务"
  ];

  useEffect(() => {
    let timer;
    if (clickedItem) {
      setShowTooltip(true);
      timer = setTimeout(() => {
        setShowTooltip(false);
        setTimeout(() => {
          setClickedItem(null);
        }, 300);
      }, 900);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [clickedItem]);

  // 路由变化时自动关闭子菜单
  useEffect(() => {
    setShowSupportSubmenu(false);
  }, [location.pathname]);

  const handleItemClick = (title) => {
    if (title === "支持服务") {
      setShowSupportSubmenu(true);
    } else {
      setClickedItem(title);
      setShowSupportSubmenu(false); // 切换主菜单项时自动关闭子菜单
    }
  };

  const handleSubmenuClose = () => {
    setShowSupportSubmenu(false);
  };

  // 点击遮罩层时关闭主菜单和子菜单
  const handleOverlayClick = () => {
    setShowSupportSubmenu(false);
    onClose();
  };

  const supportSubmenuItems = [
    // { id: 'ai-identification', text: 'AI材质初级鉴别', path: '/support/ai-identification' }
  ];

  return (
    <>
      <div className={`mobile-menu-overlay ${isOpen ? 'visible' : ''}`} onClick={handleOverlayClick}>
        <div className="mobile-menu-content" onClick={e => e.stopPropagation()}>
          <ul className="mobile-menu-list">
            {titles.map((title, index) => (
              <li 
                key={index} 
                className={`mobile-menu-item ${title === "支持服务" ? "" : "disabled-link"}`}
                onClick={() => handleItemClick(title)}
              >
                {title}
                {clickedItem === title && (
                  <div className={`mobile-tooltip ${showTooltip ? 'show' : ''}`}>期待与您一起探索！</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 支持服务子菜单 */}
      <div className={`support-submenu ${showSupportSubmenu ? 'active' : ''}`}>
        <div className="submenu-header">
          <button className="back-button" onClick={handleSubmenuClose}>
            <span className="back-arrow" style={{display: 'flex', alignItems: 'center'}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 19L8.5 12L15.5 5" stroke="#222" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
        <ul className="submenu-list">
          {supportSubmenuItems.map(item => (
            <li key={item.id} className="submenu-item">
              <Link
                to={item.path}
                className={`submenu-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => {
                  setShowSupportSubmenu(false); // 跳转后自动关闭子菜单
                  onClose();
                }}
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MobileMenu;