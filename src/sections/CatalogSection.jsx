import React from 'react';
import { Heart } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ScrollReveal from '../components/ScrollReveal';

export default function CatalogSection() {
  return (
    <section id="catalog" className="px-4 py-10 overflow-hidden bg-[#fcf9f2]">
      
      {/* 標題區塊 */}
      <ScrollReveal delay={0}>
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="w-5 h-5 text-[#ffb5a7]" fill="currentColor" />
          <h2 className="text-2xl font-bold text-[#6b4c3a]">熱門商品閱覽</h2>
          <Heart className="w-5 h-5 text-[#ffb5a7]" fill="currentColor" />
        </div>
      </ScrollReveal>

      {/* 商品列表 */}
      <div className="space-y-8">
        {PRODUCTS.map((product, index) => (
          <ScrollReveal key={product.id} delay={index * 150}>
            <div className="bg-[#fff8e1] rounded-[2.5rem] p-4 shadow-sm border-2 border-white/60">
              
              {/* 多圖橫向滑動區塊 */}
              <div className="relative group mb-4">
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-2 no-scrollbar rounded-2xl">
                  {product.images.map((img, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="flex-shrink-0 w-full aspect-square snap-center bg-white overflow-hidden rounded-2xl"
                    >
                      <img 
                        src={img} 
                        alt={`${product.name}-${imgIndex}`} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
                
                {/* 提示可以滑動的小圖示 (多於一張圖時顯示) */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-3 right-3 bg-black/20 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-full pointer-events-none">
                    ← 左右滑動查看 ({product.images.length})
                  </div>
                )}
              </div>

              {/* 商品文字資訊 */}
              <div className="px-2">
                <h3 className="text-lg font-bold text-[#6b4c3a] mb-1">{product.name}</h3>
                <p className="text-[#8a6a55] text-sm mb-3 min-h-[2.5rem] leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center mt-2 pt-4 border-t-2 border-dashed border-[#e3cebc]">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#ffb5a7] uppercase tracking-wider">Limited Offer</span>
                    <span className="text-sm font-medium text-[#8a6a55]">預購價</span>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#6b4c3a]">NT$ {product.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* 底部溫馨提示 */}
      <ScrollReveal delay={300}>
        <div className="mt-10 text-center text-[11px] leading-relaxed text-[#8a6a55] bg-white/50 border border-white p-4 rounded-2xl mx-2">
          <p className="font-bold mb-1 text-[#6b4c3a]">💡 溫馨提示</p>
          本區僅提供商品型錄閱覽，請記下您想購買的商品與數量，並於下方進行匯款並聯繫官方 LINE 進行登記喔！
        </div>
      </ScrollReveal>
    </section>
  );
}