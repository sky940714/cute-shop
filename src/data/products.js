// --- 匯入圖片資源 ---

// 1430 系列
import p1430_1 from '../assets/products/1430/1.jpg';
import p1430_2 from '../assets/products/1430/2.jpg';
import p1430_3 from '../assets/products/1430/3.jpg';
import p1430_4 from '../assets/products/1430/4.jpg';

// 1540 系列
import p1540_1 from '../assets/products/1540/1.jpg';
import p1540_2 from '../assets/products/1540/2.jpg';
import p1540_3 from '../assets/products/1540/3.jpg';

// 1980 系列
import p1980_1 from '../assets/products/1980/1.jpg';
import p1980_2 from '../assets/products/1980/2.jpg';
import p1980_3 from '../assets/products/1980/3.jpg';
import p1980_4 from '../assets/products/1980/4.jpg';

// 1980-1 系列
import p1980_1_1 from '../assets/products/1980-1/1.jpg';
import p1980_1_2 from '../assets/products/1980-1/2.jpg';
import p1980_1_3 from '../assets/products/1980-1/3.jpg';
import p1980_1_4 from '../assets/products/1980-1/4.jpg';
import p1980_1_5 from '../assets/products/1980-1/5.jpg';

// 2420 系列
import p2420_1 from '../assets/products/2420/1.jpg';
import p2420_2 from '../assets/products/2420/2.jpg';
import p2420_3 from '../assets/products/2420/3.jpg';
import p2420_4 from '../assets/products/2420/4.jpg';
import p2420_5 from '../assets/products/2420/5.jpg';
import p2420_6 from '../assets/products/2420/6.jpg';

// 3960 系列
import p3960_1 from '../assets/products/3960/1.jpg';
import p3960_2 from '../assets/products/3960/2.jpg';
import p3960_3 from '../assets/products/3960/3.jpg';
import p3960_4 from '../assets/products/3960/4.jpg';

// --- 商品資料陣列 ---

export const PRODUCTS = [
  {
    id: 1430,
  name: '意志薄弱小狗：掌上型絨毛玩偶（最愛推角系列）',
  price: 1430, // 參考官方售價 1,430円
  images: [p1430_1, p1430_2, p1430_3, p1430_4], 
  description: '【いしよわちゃん新系列】小巧可愛的掌上型玩偶！頭上裝飾著可愛的小夾子，雙頰帶著淡淡粉紅。適合帶去跟你的「推角」一起拍照，讓意志薄弱的小狗陪你一起應援！'
  },
  {
    d: 1540,
  name: '意志薄弱小狗：快閃店限定蝴蝶結玩偶（盛裝打扮系列）',
  price: 1540, // 參考官方售價 1,540円
  images: [p1540_1, p1540_2, p1540_3], 
  description: '【POP-UP SHOP 限定款】今天的小狗特別不一樣！戴上了比頭還大的藍色亮粉蝴蝶結，展現出想要「盛裝打扮」的軟萌心情。這款限定版玩偶非常適合收藏，也是快閃店最熱銷的單品之一。'
  },
  {
    id: 1980,
  name: '意志薄弱小狗：長相伴絨毛玩偶吊飾',
  price: 1980, // 參考官方售價 1,980円
  images: [p1980_1, p1980_2, p1980_3, p1980_4], 
  description: '【長相伴系列】隨時隨地都想和你在一起！這款玩偶吊飾附有珠鍊，可以掛在包包上。旁邊還跟著一個表情呆萌的小草夥伴，讓你出門在外也能感受到いしよわちゃん的療癒力量。'
  },
  {
    id: 1981, // 對應您的 1980-1 資料夾
  name: '意志薄弱小狗：經典療癒絨毛玩偶 (S)',
  price: 1980, // 參考官方售價 1,980円
  images: [p1980_1_1, p1980_1_2, p1980_1_3, p1980_1_4, p1980_1_5], 
  description: '【經典系列】最受歡迎的標準尺寸！擁有與 M 尺寸相同的柔軟觸感，體型更適合擺放在辦公桌或書架上，讓いしよわちゃん隨時提醒你：意志薄弱也沒關係，休息一下再出發吧。'
  },
  {
    id: 2420,
  name: '意志薄弱小狗：快閃店限定大蝴蝶結玩偶（盛裝打扮系列）',
  price: 2420, // 參考官方售價 2,420円
  images: [p2420_1, p2420_2, p2420_3, p2420_4, p2420_5, p2420_6], 
  description: '【POP-UP SHOP 限定款】盛裝打扮的いしよわちゃん來到大尺寸系列了！比起掌上型更具存在感，大大的藍色亮粉蝴蝶結配上圓滾滾的身軀，不論是抱著拍照還是裝飾房間都超級吸睛。'
  },
  {
  id: 3960,
  name: '意志薄弱小狗：經典療癒絨毛玩偶 (M)',
  price: 3960, // 參考圖片中的日幣價格 3,960
  images: [p3960_1, p3960_2, p3960_3, p3960_4], 
  description: '【いしよわちゃん系列】超人氣 M 尺寸玩偶！擁有極致軟綿綿的觸感與無辜表情，不論是抱著睡覺還是放在床頭都能提供滿滿的治癒感。'
}
];