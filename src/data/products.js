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
    name: '經典軟綿綿抱枕',
    price: 650,
    images: [p1430_1, p1430_2, p1430_3, p1430_4],
    description: '陪伴你每個夜晚的超柔軟抱枕，明天的煩惱明天再說。'
  },
  {
    id: 1540,
    name: '慵懶帆布托特包',
    price: 450,
    images: [p1540_1, p1540_2, p1540_3],
    description: '大容量設計，把所有的「不想面對」通通裝進去。'
  },
  {
    id: 1980,
    name: '日常療癒馬克杯',
    price: 380,
    images: [p1980_1, p1980_2, p1980_3, p1980_4],
    description: '喝口水，休息一下，今天也辛苦了。'
  },
  {
    id: 1981, // 1980-1 的 ID
    name: '閃亮壓克力鑰匙圈',
    price: 150,
    images: [p1980_1_1, p1980_1_2, p1980_1_3, p1980_1_4, p1980_1_5],
    description: '掛在包包上，隨身攜帶微小的幸福感。'
  },
  {
    id: 2420,
    name: '可愛手感貼紙組',
    price: 120,
    images: [p2420_1, p2420_2, p2420_3, p2420_4, p2420_5, p2420_6],
    description: '隨處點綴你的生活空間。'
  },
  {
    id: 3960,
    name: '全系列收藏組',
    price: 3960,
    images: [p3960_1, p3960_2, p3960_3, p3960_4],
    description: '一次帶走所有的慵懶感。'
  }
];