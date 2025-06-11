import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import '../styles/AIIdentification.css';

const AIIdentification = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleImageSelect = async (file) => {
    try {
      // TODO: 调用 AI API 进行材质识别
      // 这里先模拟一个结果
      setTimeout(() => {
        setResult({
          material: "紫檀木",
          confidence: 0.95,
          description: "这是一种珍贵的紫檀木，具有独特的纹理和色泽。"
        });
      }, 2000);
    } catch (err) {
      setError("识别失败，请重试");
    }
  };

  return (
    <div className="ai-identification">
      <div className="container">
        <h1>AI材质初级鉴别</h1>
        <p className="description">
          上传您想要鉴别的物品图片，我们的AI将为您提供初步的材质分析。
        </p>

        <ImageUploader onImageSelect={handleImageSelect} />

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {result && (
          <div className="result-container">
            <h2>识别结果</h2>
            <div className="result-card">
              <div className="result-item">
                <span className="label">材质：</span>
                <span className="value">{result.material}</span>
              </div>
              <div className="result-item">
                <span className="label">可信度：</span>
                <span className="value">{(result.confidence * 100).toFixed(1)}%</span>
              </div>
              <div className="result-item description">
                <span className="label">描述：</span>
                <span className="value">{result.description}</span>
              </div>
            </div>
            <div className="disclaimer">
              * 此结果仅供参考，建议咨询专业鉴定师获取更准确的结果
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIIdentification; 