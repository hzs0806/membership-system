import React, { useState, useEffect, useRef } from 'react';
import '../styles/LoginPage.css';
// import { AiTwotoneLock } from 'react-icons/ai'; // 导入 AiTwotoneLock

function LoginPage() {
  const [username, setUsername] = useState(''); // 用于存储电子邮件或电话号码
  const [password, setPassword] = useState('');
  const [step, setStep] = useState('emailInput'); // 'emailInput' 或 'passwordInput'
  const [rememberMe, setRememberMe] = useState(false); // 添加记住我状态

  const usernameInputRef = useRef(null); // 创建一个 ref

  useEffect(() => {
    const handleFocus = () => {
      // 只有当当前步骤是 emailInput，输入框存在，并且不是手机端时才聚焦
      if (step === 'emailInput' && usernameInputRef.current && window.innerWidth > 600) {
        usernameInputRef.current.focus();
      }
    };

    handleFocus(); // 首次渲染时调用

    // 监听 visibilitychange 事件，处理从其他标签页切换回来的情况
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        handleFocus();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 清理函数，在组件卸载时移除事件监听器
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [step]); // 依赖数组包含 step，以便在 step 改变时重新运行效果

  const handleNextStep = () => {
    // 这里可以添加第一步的客户端验证
    if (username) {
      setStep('passwordInput');
    } else {
      alert('请输入电子邮件或电话号码');
    }
  };

  const handleLogin = () => {
    // 处理登录逻辑
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe); // 在登录时记录记住我状态
    // 这里将来会调用后端API
  };

  return (
    <div className="login-page">
      {/* <AiTwotoneLock size={40} color="#333" className="logo" /> */} {/* 将 size 从 50 调整为 40 */}
      <div className="login-container">
        <h1>登入 Mune</h1>

        <div className={`input-group`}> 
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (step === 'passwordInput') {
                setStep('emailInput');
              }
            }}
            className={step === 'passwordInput' ? 'readonly' : ''}
            ref={usernameInputRef} // 将 ref 绑定到输入框
          />
          <label htmlFor="username">电子邮件或电话号码</label>
           {/* 圆形箭头按钮，只在第一步渲染 */}
           {step === 'emailInput' && (
             <button 
               className="next-button"
               onClick={handleNextStep}
               disabled={!username} // 用户名为空时禁用
             >
               → {/* 使用简单的箭头符号 */} 
             </button>
           )}
        </div>

        {/* 密码输入组，始终存在，根据步骤控制可见性和动画 */}
        <div className={`input-group password-input-group ${step === 'passwordInput' ? 'visible' : ''}`}> 
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password">密码</label>
            {step === 'passwordInput' && (
              <button 
                className="next-button"
                onClick={handleLogin}
                disabled={!password} // 密码为空时禁用登录
              >
                → {/* 使用简单的箭头符号 */} 
              </button>
            )}
        </div>

        {/* 记住我复选框 */}
        <div className="remember-me-group">
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">记住我的账号</label>
        </div>

        {/* 忘记密码链接 */}
        <div className="forgot-password-link">
          忘记了密码？ → {/* 添加文本和箭头 */} 
        </div>

        {/* 登录页脚 */}
        <div className="login-footer">
          <a href="/legal" className="footer-link">法律</a>
          <a href="/privacy-policy" className="footer-link">隐私</a>
          <a href="/terms" className="footer-link">条款</a>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;