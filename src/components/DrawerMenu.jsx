import React, { useState } from 'react';
import { Menu, X, Home, Info, List, CreditCard } from 'lucide-react';

export default function DrawerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 平滑滾動到指定區塊
  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 頂部浮動漢堡選單按鈕 */}
      <div className="fixed top-4 w-full max-w-[480px] z-40 pointer-events-none flex justify-end px-4">
        <button 
          onClick={() => setIsMenuOpen(true)} 
          className="pointer-events-auto p-2.5 bg-white/90 backdrop-blur-sm text-[#6b4c3a] rounded-full shadow-sm border-2 border-[#fff8e1] hover:bg-white active:scale-95 transition-all"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* 漢堡選單 Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] flex max-w-[480px] mx-auto">
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity" onClick={() => setIsMenuOpen(false)}></div>
          <div className="absolute top-0 right-0 w-[65%] h-full bg-[#fcf9f2] shadow-2xl flex flex-col p-6 animate-slide-in-right rounded-l-3xl border-l-4 border-[#fff8e1]">
             <div className="flex justify-end mb-10">
               <button onClick={() => setIsMenuOpen(false)} className="text-[#6b4c3a] p-2 bg-white rounded-full shadow-sm border border-[#f4efe6]">
                 <X className="w-6 h-6" />
               </button>
             </div>
             <nav className="flex flex-col gap-6 text-lg font-bold text-[#6b4c3a]">
                <button onClick={() => scrollToSection('home')} className="flex items-center gap-4 hover:bg-white p-3 rounded-2xl transition-colors"><Home className="w-6 h-6 text-[#ffb5a7]"/> 品牌首頁</button>
                <button onClick={() => scrollToSection('about')} className="flex items-center gap-4 hover:bg-white p-3 rounded-2xl transition-colors"><Info className="w-6 h-6 text-[#ffb5a7]"/> 關於角色</button>
                <button onClick={() => scrollToSection('catalog')} className="flex items-center gap-4 hover:bg-white p-3 rounded-2xl transition-colors"><List className="w-6 h-6 text-[#ffb5a7]"/> 商品預覽</button>
                <button onClick={() => scrollToSection('checkout')} className="flex items-center gap-4 hover:bg-white p-3 rounded-2xl transition-colors"><CreditCard className="w-6 h-6 text-[#ffb5a7]"/> 預購下單</button>
             </nav>
             <div className="mt-auto text-center">
               <p className="text-xs text-[#8a6a55] opacity-60">いしよわちゃん</p>
             </div>
          </div>
        </div>
      )}
    </>
  );
}
