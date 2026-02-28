import React from 'react';
import { Bell } from 'lucide-react';
import { PRODUCTS } from '../data/products'; // 引入您的商品資料庫

export default function HeroSection() {
  // 動態提取所有商品的封面圖 (每個商品 images 陣列的第一張)
  // 如果商品很多，可以視需求加上 .slice(0, 6) 限制張數
  const carouselImages = PRODUCTS.map(product => product.images[0]);

  return (
    <section id="home" className="pt-8 pb-10 overflow-hidden bg-[#fcf9f2]">
      
      {/* 1. 頂部文字區塊 */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl font-black tracking-wider text-[#6b4c3a] mb-2" style={{ fontFamily: '"Kosugi Maru", "Nunito", sans-serif' }}>
          いしよわちゃん
        </h1>
        <p className="text-sm font-bold text-[#8a6a55] mb-2">明日のじぶんにまかせます</p>
        <p className="text-xs text-[#8a6a55] opacity-80 mb-6">2026年3月</p>

        {/* 角色簡介文字 */}
        <div className="space-y-3 text-xs md:text-sm text-[#8a6a55] font-medium leading-relaxed max-w-xs mx-auto">
          <p className="border-b border-dashed border-[#e8dcc8] pb-2 text-[#8a6a55]">
            一隻狗，是一個三天的男孩，只是安慰自己。
          </p>
          <p className="border-b border-dashed border-[#e8dcc8] pb-2 text-[#8a6a55]">
            她的耳朵和尾巴很直，可能是因為她意志弱。
          </p>
          <p className="border-b border-dashed border-[#e8dcc8] pb-2 text-[#8a6a55]">
            它開始滴越來越多...我有一個習慣說，「明天是正確的時機。」
          </p>
        </div>
      </div>

      {/* 2. 自動左右輪播圖片區塊 (連動商品圖) */}
      <div className="relative w-full overflow-hidden py-4 mb-4">
        {/* 為了讓輪播無縫接軌，展開兩次 [...A, ...A] */}
        <div className="flex gap-4 animate-scroll-horizontal w-max px-4">
          {[...carouselImages, ...carouselImages].map((img, idx) => (
            <div 
              key={idx} 
              className="w-40 h-56 md:w-48 md:h-64 flex-shrink-0 rounded-[2rem] overflow-hidden shadow-sm border-4 border-white bg-white"
            >
              <img 
                src={img} 
                alt={`gallery-${idx}`} 
                className="w-full h-full object-cover opacity-95 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 3. 最新消息跑馬燈 */}
      <div className="mt-8 px-4">
        <div className="bg-white/60 rounded-full p-1 flex items-center shadow-sm border border-white backdrop-blur-sm">
          <div className="bg-[#ffb5a7] text-white p-2 rounded-full z-10 shadow-sm">
            <Bell className="w-4 h-4" />
          </div>
          <div className="overflow-hidden flex-1 px-2 whitespace-nowrap relative">
            <p className="animate-marquee text-sm text-[#6b4c3a] font-bold inline-block">
              📢 最新消息：2026年3月『推しだいすき』主題周邊即將開放預購！請密切鎖定官方社群～✨
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}