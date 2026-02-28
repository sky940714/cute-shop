import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import DrawerMenu from './components/DrawerMenu';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import CatalogSection from './sections/CatalogSection';
import CheckoutSection from './sections/CheckoutSection';
import SplashSection from './sections/SplashSection'; // 引入新的進入頁面

export default function App() {
  // 設定狀態：預設為 false (還沒進入)
  const [isEntered, setIsEntered] = useState(false);

  // === 新增：確保畫面始終從最上方開始 ===
  useEffect(() => {
    // 1. 告訴瀏覽器「不要自動恢復」上次的滾動位置
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    // 2. 網頁剛重新載入(F5)時，強制回到最頂端 (0, 0)
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // 3. 當使用者點擊「點擊進入官網」後，也確保畫面從最上方開始
    if (isEntered) {
      window.scrollTo(0, 0);
    }
  }, [isEntered]);
  // =====================================

  return (
    <div className="min-h-screen bg-[#fcf9f2] text-[#6b4c3a] font-sans relative overflow-hidden flex justify-center selection:bg-[#fff8d6]">
      
      {/* 進入頁面：如果還沒進入 (isEntered 為 false)，就蓋在最上層 */}
      {!isEntered && <SplashSection onEnter={() => setIsEntered(true)} />}

      {/* ===== 這是原本的官網主內容 ===== */}
      <Background />
      <DrawerMenu />
      
      {/* 模擬手機螢幕的內容區塊 */}
      <div className="w-full max-w-[480px] bg-transparent relative z-10 pb-10 shadow-2xl min-h-screen">
        <HeroSection />
        <AboutSection />
        <CatalogSection />
        <CheckoutSection />
        <Footer />
      </div>

    </div>
  );
}