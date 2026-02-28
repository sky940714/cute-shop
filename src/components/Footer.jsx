import React from 'react';
import { Instagram, Twitter, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="px-6 pt-8 pb-16 text-center text-[#8a6a55] bg-transparent">
      
      {/* 社群連結區 */}
      <div className="flex justify-center gap-5 mb-8">
        <a 
          href="https://www.instagram.com/sanx_official/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm text-[#6b4c3a] hover:bg-[#ffb5a7] hover:text-white transition-all duration-300"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="https://twitter.com/sanx_official" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm text-[#6b4c3a] hover:bg-[#38bdf8] hover:text-white transition-all duration-300"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a 
          href="https://www.san-x.co.jp/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-sm text-[#6b4c3a] hover:bg-[#fff8e1] transition-all duration-300"
        >
          <Globe className="w-5 h-5" />
        </a>
      </div>
      
      {/* 快速連結 */}
      <div className="flex flex-wrap justify-center gap-y-2 gap-x-4 text-[11px] font-bold mb-8 text-[#6b4c3a]/80">
        <a href="#" className="hover:text-[#ffb5a7] transition-colors">品牌故事</a>
        <span className="opacity-30">|</span>
        <a href="#" className="hover:text-[#ffb5a7] transition-colors">購物須知</a>
        <span className="opacity-30">|</span>
        <a href="#" className="hover:text-[#ffb5a7] transition-colors">常見問題</a>
        <span className="opacity-30">|</span>
        <a href="#" className="hover:text-[#ffb5a7] transition-colors">隱私權政策</a>
      </div>

      {/* 重要：版權規避與聲明區 */}
      <div className="text-[10px] leading-loose opacity-80 mb-8 space-y-2 px-4">
        <div className="bg-white/40 py-3 px-2 rounded-2xl border border-white/60">
          <p className="font-bold mb-1">【 免責聲明與版權標示 】</p>
          <p>本網站僅作為個人專案開發練習與商品型錄展示使用。</p>
          <p>網站內使用之角色圖像、商標及相關素材，其版權均屬 </p>
          <p className="font-bold text-[#6b4c3a]">© SAN-X CO., LTD. 所有。</p>
          <p>我們僅提供代購資訊整理，與原廠無直接授權關係。</p>
        </div>
        
        <p className="pt-4 font-medium tracking-widest uppercase">
          © {new Date().getFullYear()} cute.shop Project. 
        </p>
        <p className="italic scale-90">Created for Fan Appreciation.</p>
      </div>

    </footer>
  );
}