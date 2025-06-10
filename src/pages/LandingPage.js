import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPageStyles.css';
import Layout from '../components/Layout'; // 引入 Layout 组件

function LandingPage() {
  const [currentPhrase, setCurrentPhrase] = useState('');

  const phrases = [
    "自带星光，无畏绽放",
    "你的每一步都值得骄傲",
    "你的光芒，无需掩藏",
    "她的力量，温柔且不可阻挡",
    "勇敢追光，自成宇宙",
    "你的独特，本就珍贵",
    "以热爱，点亮生活底色",
    "心有光，行致远",
    "绽放吧，世界等你闪耀",
    "她的人生，由自己定义精彩"
  ];

  useEffect(() => {
    let storedPhrases = JSON.parse(localStorage.getItem('displayedPhrases')) || [];
    
    // 如果所有短语都已展示，则重置列表
    if (storedPhrases.length === 0) {
      storedPhrases = [...phrases];
    }

    // 随机选择一个短语
    const randomIndex = Math.floor(Math.random() * storedPhrases.length);
    const selectedPhrase = storedPhrases[randomIndex];
    setCurrentPhrase(selectedPhrase);

    // 从列表中移除已选短语
    const newStoredPhrases = storedPhrases.filter(phrase => phrase !== selectedPhrase);
    localStorage.setItem('displayedPhrases', JSON.stringify(newStoredPhrases));
  }, []); // 空依赖数组确保只在组件挂载时运行一次

  return (
    <Layout>
      <div className="landing-page">
        <div className="landing-page-content">
          <h1>{currentPhrase}</h1>
          <Link to="/login" className="login-button">进一步了解</Link>
        </div>
      </div>
    </Layout>
  );
}

export default LandingPage;

 