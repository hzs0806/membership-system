import React, { useState, useRef, useEffect } from 'react';
import '../styles/ImageUploader.css';

const ImageUploader = ({ onImageSelect }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const fileInputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  // 检测是否为移动设备
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFileSelect = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target.result);
        onImageSelect(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCameraClick = () => {
    // 移动端：使用原生摄像头
    fileInputRef.current.setAttribute('capture', 'environment');
    fileInputRef.current.click();
  };

  const handleGalleryClick = () => {
    // 从相册选择不需要摄像头
    fileInputRef.current.removeAttribute('capture');
    fileInputRef.current.click();
  };

  return (
    <div className="image-uploader">
      <div className="upload-options">
        {isMobile && (
          <button 
            className="upload-button camera"
            onClick={handleCameraClick}
            disabled={isLoading}
          >
            <span className="icon">📷</span>
            <span>拍照</span>
          </button>
        )}
        <button 
          className="upload-button gallery"
          onClick={handleGalleryClick}
          disabled={isLoading}
        >
          <span className="icon">🖼️</span>
          <span>从相册选择</span>
        </button>
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileSelect}
        accept="image/*"
        style={{ display: 'none' }}
      />

      {previewUrl && (
        <div className="preview-container">
          <img src={previewUrl} alt="预览" className="preview-image" />
          <button 
            className="retake-button"
            onClick={() => {
              setPreviewUrl(null);
              fileInputRef.current.value = '';
            }}
          >
            重新选择
          </button>
        </div>
      )}

      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>正在分析图片...</p>
        </div>
      )}
    </div>
  );
};

export default ImageUploader; 