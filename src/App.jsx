import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, ChevronRight, Star, Sparkles, Filter, Check } from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [monogramText, setMonogramText] = useState('');
  const [monogramStyle, setMonogramStyle] = useState('classic');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "經典英式刺繡包屁衣",
      price: "HK$ 380",
      category: "baby",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
      isCustomizable: true,
      tag: "熱銷經典"
    },
    {
      id: 2,
      name: "皇家格紋針織外巾禮盒",
      price: "HK$ 520",
      category: "gifts",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=600",
      isCustomizable: true,
      tag: "彌月首選"
    },
    {
      id: 3,
      name: "維多利亞蕾絲領童裝洋裝",
      price: "HK$ 680",
      category: "kids",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=600",
      isCustomizable: false,
      tag: "新品上市"
    },
    {
      id: 4,
      name: "倫敦小熊純棉客製連身衣",
      price: "HK$ 450",
      category: "baby",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600",
      isCustomizable: true,
      tag: "獨家設計"
    }
  ];

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C3E50] font-sans">
      {/* 頂部通知欄 */}
      <div className="bg-[#1B365D] text-white text-xs text-center py-2 px-4 tracking-wider">
        🇬🇧 英國傳統工藝 ｜ 全館滿 HK$ 800 免運費 ｜ 專屬專屬名字刺繡服務
      </div>

      {/* 導覽列 */}
      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* 行動裝置選單按鈕 */}
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2C3E50]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* 品牌標誌 */}
            <div className="text-center md:text-left">
              <span className="text-2xl md:text-3xl font-serif tracking-widest font-bold text-[#1B365D]">
                1morefinger
              </span>
              <p className="text-[10px] text-[#8C7A6B] tracking-widest uppercase">British Childrenswear</p>
            </div>

            {/* 選單項目 */}
            <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
              <a href="#featured" className="hover:text-[#8C7A6B] transition">精選系列</a>
              <a href="#custom" className="hover:text-[#8C7A6B] transition">名字刺繡客製化</a>
              <a href="#about" className="hover:text-[#8C7A6B] transition">關於品牌</a>
              <a href="#gifts" className="hover:text-[#8C7A6B] transition">禮盒專區</a>
            </div>

            {/* 功能圖標 */}
            <div className="flex items-center space-x-5">
              <Search size={20} className="cursor-pointer hover:text-[#8C7A6B] transition hidden sm:block" />
              <Heart size={20} className="cursor-pointer hover:text-[#8C7A6B] transition hidden sm:block" />
              <div className="relative cursor-pointer">
                <ShoppingBag size={22} className="text-[#1B365D]" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#C5A059] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 主頁橫幅 */}
      <section className="relative bg-[#F4F0EA] py-20 md:py-28 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left z-10">
            <span className="inline-block bg-[#E8DFD1] text-[#1B365D] text-xs px-3 py-1 rounded-full tracking-widest font-medium">
              HERITAGE & ELEGANCE
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[#1B365D] leading-tight">
              傳承英倫優雅<br />給寶貝的第一份奢華禮物
            </h1>
            <p className="text-gray-600 max-w-md mx-auto md:mx-0 font-light">
              採用 100% 頂級有機超長棉，搭配古典手工刺繡工藝，記錄孩子成長的優雅印記。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href="#featured" className="bg-[#1B365D] text-white px-8 py-3.5 rounded-none font-medium hover:bg-[#2C4A7C] transition shadow-md">
                探索新品系列
              </a>
              <a href="#custom" className="border border-[#1B365D] text-[#1B365D] px-8 py-3.5 rounded-none font-medium hover:bg-[#1B365D] hover:text-white transition">
                訂製專屬名字
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800" 
                alt="1morefinger British Style Childrenswear" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 名字刺繡客製化試算區 (Monogram Feature) */}
      <section id="custom" className="py-20 bg-white border-y border-[#E5E0D8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-[#C5A059] mb-2">
              <Sparkles size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Personalisation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B365D]">專屬名字刺繡預覽</h2>
            <p className="text-gray-500 mt-2">輸入寶貝的英文名字，打造獨一無二的專屬禮物</p>
          </div>

          <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-xl shadow-sm border border-[#E5E0D8] grid md:grid-cols-2 gap-8 items-center">
            {/* 實時預覽框 */}
            <div className="bg-white p-12 rounded-lg border border-[#E5E0D8] text-center shadow-inner relative flex flex-col items-center justify-center min-h-[260px]">
              <span className="text-xs text-gray-400 absolute top-4 left-4 uppercase tracking-widest">Preview</span>
              <div className="w-24 h-24 rounded-full bg-[#FAF9F6] border border-[#E5E0D8] flex items-center justify-center mb-4">
                <span className={`text-2xl md:text-3xl text-[#1B365D] ${monogramStyle === 'classic' ? 'font-serif' : monogramStyle === 'cursive' ? 'font-serif italic' : 'font-mono'}`}>
                  {monogramText || "Oliver"}
                </span>
              </div>
              <p className="text-xs text-[#8C7A6B] font-medium">刺繡款式：100% 經典金絲線</p>
            </div>

            {/* 控制項 */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">輸入寶貝英文名字或縮寫</label>
                <input
                  type="text"
                  maxLength={10}
                  value={monogramText}
                  onChange={(e) => setMonogramText(e.target.value)}
                  placeholder="例如: Oliver"
                  className="w-full px-4 py-3 bg-white border border-[#E5E0D8] focus:outline-none focus:border-[#1B365D] text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">選擇刺繡字體風格</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'classic', name: '經典襯線' },
                    { id: 'cursive', name: '優雅草書' },
                    { id: 'modern', name: '現代簡約' }
                  ].map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setMonogramStyle(style.id)}
                      className={`py-2.5 text-xs font-medium border transition ${monogramStyle === style.id ? 'border-[#1B365D] bg-[#1B365D] text-white' : 'border-[#E5E0D8] bg-white text-gray-700'}`}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => alert(`已套用專屬刺繡名字：${monogramText || 'Oliver'}`)}
                  className="w-full bg-[#C5A059] text-white py-3.5 font-medium hover:bg-[#B38F48] transition shadow-sm"
                >
                  確認刺繡樣式並選擇商品
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 商品系列展示 */}
      <section id="featured" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-serif text-[#1B365D]">精選英倫系列</h2>
            <p className="text-gray-500 mt-1">給孩子最溫柔的舒適肌膚觸感</p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            {['all', 'baby', 'kids', 'gifts'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium capitalize border transition ${selectedCategory === cat ? 'border-[#1B365D] bg-[#1B365D] text-white' : 'border-[#E5E0D8] bg-white text-gray-600'}`}
              >
                {cat === 'all' ? '全部商品' : cat === 'baby' ? '嬰兒包屁衣' : cat === 'kids' ? '童裝洋裝' : '精選禮盒'}
              </button>
            ))}
          </div>
        </div>

        {/* 商品卡片列表 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
            .map((product) => (
              <div key={product.id} className="group bg-white border border-[#E5E0D8] overflow-hidden hover:shadow-lg transition">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-[#1B365D] text-white text-[10px] px-2.5 py-1 tracking-wider uppercase font-medium">
                      {product.tag}
                    </span>
                  )}
                  {product.isCustomizable && (
                    <span className="absolute top-3 right-3 bg-[#C5A059] text-white text-[10px] px-2.5 py-1 tracking-wider uppercase font-medium flex items-center gap-1">
                      <Sparkles size={10} /> 可刺繡
                    </span>
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-medium text-gray-900 group-hover:text-[#8C7A6B] transition">{product.name}</h3>
                  <p className="text-sm font-semibold text-[#1B365D]">{product.price}</p>
                  <button 
                    onClick={addToCart}
                    className="w-full mt-3 bg-[#FAF9F6] border border-[#E5E0D8] py-2 text-xs font-medium hover:bg-[#1B365D] hover:text-white hover:border-[#1B365D] transition"
                  >
                    加入購物車
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-[#1B365D] text-white py-16 border-t border-[#2C4A7C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <span className="text-2xl font-serif tracking-widest font-bold">1morefinger</span>
            <p className="text-xs text-gray-300 leading-relaxed">
              專注於英國經典風格童裝與專屬訂製禮盒。用心呵護每一位寶貝的成長時光。
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C5A059] mb-4">選購指南</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#" className="hover:underline">嬰幼兒服飾</a></li>
              <li><a href="#" className="hover:underline">經典手工刺繡</a></li>
              <li><a href="#" className="hover:underline">彌月送禮專區</a></li>
              <li><a href="#" className="hover:underline">尺寸對照表</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C5A059] mb-4">顧客服務</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#" className="hover:underline">運送與退換貨</a></li>
              <li><a href="#" className="hover:underline">刺繡客製化須知</a></li>
              <li><a href="#" className="hover:underline">常見問題 FAQ</a></li>
              <li><a href="#" className="hover:underline">聯絡我們</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C5A059] mb-4">訂閱最新優惠</h4>
            <p className="text-xs text-gray-300 mb-3">訂閱即可享有首購 9 折優惠與專屬新品通知。</p>
            <div className="flex">
              <input type="email" placeholder="輸入您的 Email" className="px-3 py-2 text-xs text-gray-900 w-full focus:outline-none" />
              <button className="bg-[#C5A059] text-white px-4 text-xs font-medium hover:bg-[#B38F48]">訂閱</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          © 2026 1morefinger Childrenswear. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
