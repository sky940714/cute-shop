import React, { useState } from 'react';
import { CreditCard, Copy, CheckCircle2, MessageCircle } from 'lucide-react';

export default function CheckoutSection() {
  const [copied, setCopied] = useState(false);

  // 複製匯款帳號
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="checkout" className="px-4 py-10 mb-10">
      <div className="bg-white rounded-[2.5rem] p-6 shadow-md border-4 border-[#fff8e1]">
        <h2 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
          <CreditCard className="w-6 h-6" /> 官方預購下單
        </h2>

        {/* 匯款資訊區塊 */}
        <div className="bg-[#f4efe6] rounded-2xl p-5 mb-6">
          <h3 className="text-sm font-bold text-[#6b4c3a] mb-4 text-center">👇 請先匯款至以下帳戶 👇</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
              <span className="text-[#8a6a55]">銀行代碼</span>
              <span className="font-bold">中國信託 (822)</span>
            </div>
            
            <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
              <span className="text-[#8a6a55]">匯款帳號</span>
              <div className="flex items-center gap-2">
                <span className="font-bold font-mono text-base tracking-wider">1234-5678-9012</span>
                <button 
                  onClick={() => handleCopy('123456789012')}
                  className="p-1.5 bg-[#fff8e1] text-[#6b4c3a] rounded-lg hover:bg-[#ffe082] transition-colors"
                  title="複製帳號"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            <div className="flex justify-between items-center bg-white p-3 rounded-xl shadow-sm">
              <span className="text-[#8a6a55]">戶名</span>
              <span className="font-bold">王小明 (範例)</span>
            </div>
          </div>
        </div>

        {/* LINE 回報按鈕 */}
        <div className="text-center mt-8">
          <p className="text-sm font-bold text-[#8a6a55] mb-2">匯款完成後，請務必點擊下方按鈕</p>
          <p className="text-xs text-rose-500 mb-4 font-bold">
            ⚠️ 請在 LINE 訊息中告訴我們您支持的<br/>「KOL 專屬推薦碼」喔！
          </p>
          
          <a 
            href="#" 
            className="w-full bg-[#06C755] text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-green-200 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-6 h-6" fill="currentColor" />
            點我加 LINE 回報匯款
          </a>
        </div>
        
        <p className="text-[10px] text-center text-[#8a6a55] mt-6 opacity-70">
          © 2024 Ishiyowachan. All rights reserved.
        </p>
      </div>
    </section>
  );
}
