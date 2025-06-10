import React from 'react';
// 移除 TfiAlignCenter 导入
import '../styles/MobileMenu.css';

function MobileMenu({ isOpen, onClose }) {
  // 如果菜单不打开，则不渲染任何内容，但为了动画，我们始终渲染并控制可见性
  // if (!isOpen) {
  //   return null;
  // }

  const titles = [
    "知识",
    "藏品",
    "定制",
    "养护",
    "鉴定",
    "孤品",
    "支持服务"
  ];

  return (
    <div className={`mobile-menu-overlay ${isOpen ? 'visible' : ''}`}> {/* 全屏遮罩，根据 isOpen 添加 visible 类*/}
      {/* 移除关闭按钮 */}
      <div className="mobile-menu-content"> {/* 菜单内容容器 */}
        <ul className="mobile-menu-list"> {/* 标题列表 */}
          {titles.map((title, index) => (
            <li key={index} className={`mobile-menu-item ${title === "鉴定" ? "disabled-link" : ""}`}>{title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;