import React, { useEffect, useState } from 'react';

export default function Background() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 確保只在瀏覽器環境執行
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden max-w-[480px] mx-auto w-full">
      {/* 每個元素設定不同的 transform Y 乘數，製造遠近不同的視差感 */}
      <div className="absolute top-10 left-4 text-[#e8dcc8]/60 text-2xl" 
           style={{ transform: `translateY(${scrollY * -0.15}px) rotate(12deg)` }}>🐾</div>
      
      <div className="absolute top-40 right-8 text-[#e8dcc8]/70 text-xl" 
           style={{ transform: `translateY(${scrollY * -0.3}px) rotate(-12deg)` }}>🦴</div>
      
      <div className="absolute top-[30%] left-10 text-[#e8dcc8]/60 text-3xl" 
           style={{ transform: `translateY(${scrollY * -0.1}px) rotate(45deg)` }}>✨</div>
      
      <div className="absolute top-[50%] right-6 text-[#e8dcc8]/60 text-2xl" 
           style={{ transform: `translateY(${scrollY * -0.25}px) rotate(12deg)` }}>🐾</div>
      
      <div className="absolute top-[70%] left-8 text-[#e8dcc8]/70 text-xl" 
           style={{ transform: `translateY(${scrollY * -0.4}px) rotate(-12deg)` }}>🦴</div>
      
      <div className="absolute bottom-32 right-12 text-[#e8dcc8]/60 text-3xl" 
           style={{ transform: `translateY(${scrollY * -0.2}px) rotate(12deg)` }}>✨</div>
    </div>
  );
}