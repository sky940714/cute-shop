import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutSection() {
  // 角色資料陣列 (第一隻為現有，後兩隻為敬請期待)
  const characters = [
    {
      id: 1,
      name: "意志薄弱狗",
      desc: "一隻狗，是一個三天的男孩，只是安慰自己。",
      icon: "🐶", 
      isComingSoon: false
    },
    {
      id: 2,
      name: "敬請期待",
      desc: "神祕的新角色即將登場...",
      icon: "❓",
      isComingSoon: true
    },
    {
      id: 3,
      name: "敬請期待",
      desc: "神祕的新角色即將登場...",
      icon: "❓",
      isComingSoon: true
    }
  ];

  return (
    <section id="about" className="py-10 overflow-hidden">
      
      {/* 頂部標題與副標題 (還原截圖的藍色系字體) */}
      <ScrollReveal delay={0}>
        <div className="text-center mb-6 px-4">
          <h2 className="text-3xl font-black text-[#38bdf8] mb-2 tracking-wider">角色</h2>
          <p className="text-sm font-bold text-[#38bdf8]">選擇感興趣的角色，可以查看詳細介紹哦♪</p>
        </div>
      </ScrollReveal>

      {/* 橫向滑動卡片列 */}
      <ScrollReveal delay={200}>
        <div className="flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory">
          {characters.map((char) => (
            <div 
              key={char.id} 
              className="min-w-[220px] w-[220px] bg-[#fff8e1] rounded-[2rem] p-5 shadow-sm border-2 border-white/60 snap-center flex flex-col items-center text-center relative transition-transform hover:-translate-y-1"
            >
              {/* 角色圓形頭像框 */}
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 border-4 border-[#f4efe6]">
                <span className={`text-4xl ${char.isComingSoon ? 'opacity-30' : ''}`}>
                  {char.icon}
                </span>
              </div>
              
              {/* 角色名稱標籤 (還原截圖的藍色膠囊狀背景) */}
              <div className="bg-[#a2c8e8] text-white px-5 py-1.5 rounded-full text-sm font-bold mb-4 w-full shadow-sm">
                {char.name}
              </div>
              
              {/* 角色描述 */}
              <p className="text-xs text-[#6b4c3a] font-medium leading-relaxed mb-6 flex-1">
                {char.desc}
              </p>

              {/* 右下角箭頭圖示 */}
              <div className="absolute bottom-4 right-4 text-[#a2c8e8]">
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
      
    </section>
  );
}