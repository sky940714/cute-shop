import React, { useState } from 'react';

export default function SplashSection({ onEnter }) {
  const [isLeaving, setIsLeaving] = useState(false);

  // 處理點擊進入按鈕的動畫過渡
  const handleEnter = () => {
    setIsLeaving(true); // 觸發淡出動畫
    setTimeout(() => {
      onEnter(); // 500毫秒後正式切換到主網頁，卸載此組件
    }, 500); 
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#fcf9f2] flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${
        isLeaving ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* 漂浮的可愛背景裝飾 */}
      <div className="absolute top-24 left-12 text-[#e8dcc8] text-4xl animate-bounce-slow" style={{animationDelay: '0s'}}>🐾</div>
      <div className="absolute top-48 right-16 text-[#e8dcc8] text-3xl animate-bounce-slow" style={{animationDelay: '0.5s'}}>🦴</div>
      <div className="absolute bottom-40 left-16 text-[#e8dcc8] text-4xl animate-bounce-slow" style={{animationDelay: '1s'}}>✨</div>
      <div className="absolute bottom-24 right-12 text-[#e8dcc8] text-3xl animate-bounce-slow" style={{animationDelay: '1.5s'}}>🐾</div>

      {/* 中央主視覺與按鈕 */}
      <div className="text-center z-10 flex flex-col items-center">
        
        {/* 角色頭像 (帶有柔和呼吸燈動畫) */}
        <div className="w-32 h-32 bg-[#fff8e1] rounded-full mx-auto mb-6 flex items-center justify-center border-4 border-white shadow-sm animate-pulse-soft">
          <span className="text-6xl">🐶</span>
        </div>
        
        {/* 品牌名稱 */}
        <h1 className="text-4xl font-black tracking-wider text-[#6b4c3a] mb-2" style={{ fontFamily: '"Kosugi Maru", "Nunito", sans-serif' }}>
          いしよわちゃん
        </h1>
        <p className="text-sm font-bold text-[#8a6a55] mb-12 tracking-widest">明日のじぶんにまかせます</p>

        {/* 進入按鈕 */}
        <button
          onClick={handleEnter}
          className="px-10 py-4 bg-[#6b4c3a] text-white rounded-full font-bold shadow-lg hover:bg-[#8a6a55] hover:shadow-xl active:scale-95 transition-all animate-pulse-soft flex items-center gap-2"
        >
          點擊進入官網
        </button>
      </div>
    </div>
  );
}