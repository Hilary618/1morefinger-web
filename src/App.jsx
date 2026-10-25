import React, { useState } from 'react';
import { ShoppingBag, Heart, Search, Menu, X, Sparkles, Globe } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState('zh'); // 'zh', 'en', 'jp'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [monogramText, setMonogramText] = useState('');
  const [monogramStyle, setMonogramStyle] = useState('classic');

  // 多語言文字字典
  const t = {
    zh: {
      topBanner: "🇬🇧 英國傳統工藝 ｜ 全館滿 HK$ 800 免運費 ｜ 專屬名字刺繡服務",
      featured: "精選系列",
      custom: "名字刺繡客製化",
      about: "關於品牌",
      gifts: "禮盒專區",
      heroTag: "英倫優雅傳承",
      heroTitle: "傳承英倫優雅\n給寶貝的第一份奢華禮物",
      heroDesc: "採用 100% 頂級有機超長棉，搭配古典手工刺繡工藝，記錄孩子成長的優雅印記。",
      exploreBtn: "探索新品系列",
      customBtn: "訂製專屬名字",
      customTitle: "專屬名字刺繡預覽",
      customDesc: "輸入寶貝的英文名字，打造獨一無二的專屬禮物",
      inputPlaceholder: "例如: Oliver",
      fontClassic: "經典襯線",
      fontCursive: "優雅草書",
      fontModern: "現代簡約",
      previewLabel: "即時預覽",
      goldThread: "刺繡款式：100% 經典金絲線",
      confirmCustom: "確認刺繡樣式並選擇商品",
      sectionTitle: "精選英倫系列",
      sectionSub: "給孩子最溫柔的舒適肌膚觸感",
      allCat: "全部商品",
      babyCat: "嬰兒包屁衣",
      kidsCat: "童裝洋裝",
      giftCat: "精選禮盒",
      addToCart: "加入購物車",
      footerDesc: "專注於英國經典風格童裝與專屬訂製禮盒。用心呵護每一位寶貝的成長時光。",
      guide: "選購指南",
      service: "顧客服務",
      subscribe: "訂閱最新優惠",
      subDesc: "訂閱即可享有首購 9 折優惠與專屬新品通知。",
      subscribeBtn: "訂閱",
      emailPlaceholder: "輸入您的 Email",
      copyright: "© 2026 1morefinger Childrenswear. All rights reserved."
    },
    en: {
      topBanner: "🇬🇧 British Heritage Craftsmanship ｜ Free Shipping over HK$ 800 ｜ Custom Monogram Service",
      featured: "Featured",
      custom: "Monogram",
      about: "About Us",
      gifts: "Gift Sets",
      heroTag: "HERITAGE & ELEGANCE",
      heroTitle: "British Elegance\nLuxury Gifts for Your Little One",
      heroDesc: "Crafted with 100% organic long-staple cotton and exquisite hand embroidery to capture precious childhood moments.",
      exploreBtn: "Explore New Arrivals",
      customBtn: "Customise Name",
      customTitle: "Personalised Monogram Preview",
      customDesc: "Enter your baby's name to create a truly unique, bespoke gift.",
      inputPlaceholder: "e.g. Oliver",
      fontClassic: "Classic Serif",
      fontCursive: "Cursive Script",
      fontModern: "Modern Sans",
      previewLabel: "Preview",
      goldThread: "Embroidery: 100% Classic Gold Thread",
      confirmCustom: "Confirm Style & Select Item",
      sectionTitle: "British Heritage Collection",
      sectionSub: "The softest touch and tender care for your child.",
      allCat: "All",
      babyCat: "Baby Rompers",
      kidsCat: "Kids Dresses",
      giftCat: "Gift Sets",
      addToCart: "Add to Bag",
      footerDesc: "Specialising in classic British childrenswear and bespoke gift sets, cherishing every moment of your baby's growth.",
      guide: "Shopping Guide",
      service: "Customer Service",
      subscribe: "Subscribe & Save",
      subDesc: "Subscribe to enjoy 10% off your first order and exclusive updates.",
      subscribeBtn: "Subscribe",
      emailPlaceholder: "Enter your email",
      copyright: "© 2026 1morefinger Childrenswear. All rights reserved."
    },
    jp: {
      topBanner: "🇬🇧 英国の伝統工芸 ｜ 800香港ドル以上のご注文で送料無料 ｜ イニシャル刺繍サービス",
      featured: "コレクション",
      custom: "名入れ刺繍",
      about: "ブランドについて",
      gifts: "ギフトセット",
      heroTag: "ヘリテージ＆エレガンス",
      heroTitle: "英国の優雅さを纏う\n大切な我が子へ贈る至高のギフト",
      heroDesc: "100%オーガニック超長綿を使用し、伝統的なハンド刺繍で子供たちの成長の足跡を彩ります。",
      exploreBtn: "新作コレクションを見る",
      customBtn: "名入れをオーダーする",
      customTitle: "パーソナライズ名入れプレビュー",
      customDesc: "お子様のお名前を入力して、世界に一つだけの特別なギフトを作りましょう。",
      inputPlaceholder: "例: Oliver",
      fontClassic: "クラシック",
      fontCursive: "筆記体",
      fontModern: "モダン",
      previewLabel: "プレビュー",
      goldThread: "刺繍：100% クラシックゴールド糸",
      confirmCustom: "刺繍スタイルを確定して商品を選ぶ",
      sectionTitle: "ブリティッシュ・セレクション",
      sectionSub: "お子様の肌に最も優しい、極上の肌触り。",
      allCat: "すべて",
      babyCat: "ロンパース",
      kidsCat: "ドレス",
      giftCat: "ギフトセット",
      addToCart: "カートに追加",
      footerDesc: "英国のクラシックな子供服と特注ギフトセットをお届けします。大切なお子様の成長を優しく包み込みます。",
      guide: "ショッピングガイド",
      service: "カスタマーサービス",
      subscribe: "最新情報を受け取る",
      subDesc: "ご登録いただくと、初回10%オフクーポンと最新情報をお届けします。",
      subscribeBtn: "登録",
      emailPlaceholder: "メールアドレスを入力",
      copyright: "© 2026 1morefinger Childrenswear. All rights reserved."
    }
  };

  const currentT = t[lang];

  const products = [
    {
      id: 1,
      name: { zh: "經典英式刺繡包屁衣", en: "Classic British Embroidered Romper", jp: "クラシック英国刺繍ロンパース" },
      price: "HK$ 380",
      category: "baby",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=600",
      isCustomizable: true,
      tag: { zh: "熱銷經典", en: "Best Seller", jp: "ベストセラー" }
    },
    {
      id: 2,
      name: { zh: "皇家格紋針織外巾禮盒", en: "Royal Tartan Knit Blanket Gift Set", jp: "ロイヤルタータンニットブランケットギフトセット" },
      price: "HK$ 520",
      category: "gifts",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=600",
      isCustomizable: true,
      tag: { zh: "彌月首選", en: "Newborn Choice", jp: "出産祝いギフト" }
    },
    {
      id: 3,
      name: { zh: "維多利亞蕾絲領童裝洋裝", en: "Victorian Lace Collar Dress", jp: "ビクトリアンレースカラー ドレス" },
      price: "HK$ 680",
      category: "kids",
      image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&q=80&w=600",
      isCustomizable: false,
      tag: { zh: "新品上市", en: "New Arrival", jp: "新着商品" }
    },
    {
      id: 4,
      name: { zh: "倫敦小熊純棉客製連身衣", en: "London Bear Cotton Custom Jumpsuit", jp: "ロンドンベア コットンカスタムジャンプスーツ" },
      price: "HK$ 450",
      category: "baby",
      image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=600",
      isCustomizable: true,
      tag: { zh: "獨家設計", en: "Exclusive", jp: "限定デザイン" }
    }
  ];

  const addToCart = () => setCartCount(prev => prev + 1);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C3E50] font-sans">
      {/* 頂部通知與語言切換列 */}
      <div className="bg-[#1B365D] text-white text-xs py-2 px-4 flex justify-between items-center">
        <div className="flex-1 text-center tracking-wider truncate">{currentT.topBanner}</div>
        <div className="flex items-center space-x-2 bg-[#2C4A7C] px-2 py-1 rounded">
          <Globe size={14} />
          <button onClick={() => setLang('zh')} className={`px-1.5 transition ${lang === 'zh' ? 'font-bold text-[#C5A059]' : 'text-gray-300'}`}>繁中</button>
          <span>/</span>
          <button onClick={() => setLang('en')} className={`px-1.5 transition ${lang === 'en' ? 'font-bold text-[#C5A059]' : 'text-gray-300'}`}>EN</button>
          <span>/</span>
          <button onClick={() => setLang('jp')} className={`px-1.5 transition ${lang === 'jp' ? 'font-bold text-[#C5A059]' : 'text-gray-300'}`}>日本語</button>
        </div>
      </div>

      {/* 導覽列 */}
      <nav className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2C3E50]">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="text-center md:text-left">
              <span className="text-2xl md:text-3xl font-serif tracking-widest font-bold text-[#1B365D]">
                1morefinger
              </span>
              <p className="text-[10px] text-[#8C7A6B] tracking-widest uppercase">British Childrenswear</p>
            </div>

            <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
              <a href="#featured" className="hover:text-[#8C7A6B] transition">{currentT.featured}</a>
              <a href="#custom" className="hover:text-[#8C7A6B] transition">{currentT.custom}</a>
              <a href="#about" className="hover:text-[#8C7A6B] transition">{currentT.about}</a>
              <a href="#gifts" className="hover:text-[#8C7A6B] transition">{currentT.gifts}</a>
            </div>

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
              {currentT.heroTag}
            </span>
            <h1 className="text-3xl md:text-5xl font-serif text-[#1B365D] leading-tight whitespace-pre-line">
              {currentT.heroTitle}
            </h1>
            <p className="text-gray-600 max-w-md mx-auto md:mx-0 font-light">
              {currentT.heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href="#featured" className="bg-[#1B365D] text-white px-8 py-3.5 font-medium hover:bg-[#2C4A7C] transition shadow-md text-center">
                {currentT.exploreBtn}
              </a>
              <a href="#custom" className="border border-[#1B365D] text-[#1B365D] px-8 py-3.5 font-medium hover:bg-[#1B365D] hover:text-white transition text-center">
                {currentT.customBtn}
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
            </div>
          </div>
        </div>
      </section>

      {/* 名字刺繡客製化試算區 */}
      <section id="custom" className="py-20 bg-white border-y border-[#E5E0D8]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2 text-[#C5A059] mb-2">
              <Sparkles size={18} />
              <span className="text-xs font-bold uppercase tracking-widest">Personalisation</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B365D]">{currentT.customTitle}</h2>
            <p className="text-gray-500 mt-2">{currentT.customDesc}</p>
          </div>

          <div className="bg-[#FAF9F6] p-8 md:p-12 rounded-xl shadow-sm border border-[#E5E0D8] grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white p-12 rounded-lg border border-[#E5E0D8] text-center shadow-inner relative flex flex-col items-center justify-center min-h-[260px]">
              <span className="text-xs text-gray-400 absolute top-4 left-4 uppercase tracking-widest">{currentT.previewLabel}</span>
              <div className="w-24 h-24 rounded-full bg-[#FAF9F6] border border-[#E5E0D8] flex items-center justify-center mb-4">
                <span className={`text-2xl md:text-3xl text-[#1B365D] ${monogramStyle === 'classic' ? 'font-serif' : monogramStyle === 'cursive' ? 'font-serif italic' : 'font-mono'}`}>
                  {monogramText || "Oliver"}
                </span>
              </div>
              <p className="text-xs text-[#8C7A6B] font-medium">{currentT.goldThread}</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{currentT.customDesc}</label>
                <input
                  type="text"
                  maxLength={10}
                  value={monogramText}
                  onChange={(e) => setMonogramText(e.target.value)}
                  placeholder={currentT.inputPlaceholder}
                  className="w-full px-4 py-3 bg-white border border-[#E5E0D8] focus:outline-none focus:border-[#1B365D] text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'classic', name: currentT.fontClassic },
                    { id: 'cursive', name: currentT.fontCursive },
                    { id: 'modern', name: currentT.fontModern }
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
                  onClick={() => alert(`Applied Monogram: ${monogramText || 'Oliver'}`)}
                  className="w-full bg-[#C5A059] text-white py-3.5 font-medium hover:bg-[#B38F48] transition shadow-sm"
                >
                  {currentT.confirmCustom}
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
            <h2 className="text-3xl font-serif text-[#1B365D]">{currentT.sectionTitle}</h2>
            <p className="text-gray-500 mt-1">{currentT.sectionSub}</p>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0 flex-wrap">
            {[
              { id: 'all', label: currentT.allCat },
              { id: 'baby', label: currentT.babyCat },
              { id: 'kids', label: currentT.kidsCat },
              { id: 'gifts', label: currentT.giftCat }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs font-medium transition border ${selectedCategory === cat.id ? 'border-[#1B365D] bg-[#1B365D] text-white' : 'border-[#E5E0D8] bg-white text-gray-600'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
            .map((product) => (
              <div key={product.id} className="group bg-white border border-[#E5E0D8] overflow-hidden hover:shadow-lg transition">
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name[lang]} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-[#1B365D] text-white text-[10px] px-2.5 py-1 tracking-wider uppercase font-medium">
                      {product.tag[lang]}
                    </span>
                  )}
                  {product.isCustomizable && (
                    <span className="absolute top-3 right-3 bg-[#C5A059] text-white text-[10px] px-2.5 py-1 tracking-wider uppercase font-medium flex items-center gap-1">
                      <Sparkles size={10} /> Monogram
                    </span>
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-medium text-gray-900 group-hover:text-[#8C7A6B] transition">{product.name[lang]}</h3>
                  <p className="text-sm font-semibold text-[#1B365D]">{product.price}</p>
                  <button 
                    onClick={addToCart}
                    className="w-full mt-3 bg-[#FAF9F6] border border-[#E5E0D8] py-2 text-xs font-medium hover:bg-[#1B365D] hover:text-white hover:border-[#1B365D] transition"
                  >
                    {currentT.addToCart}
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
              {currentT.footerDesc}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C5A059] mb-4">{currentT.guide}</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#" className="hover:underline">Baby Rompers</a></li>
              <li><a href="#" className="hover:underline">Custom Embroidery</a></li>
              <li><a href="#" className="hover:underline">Gift Sets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C5A059] mb-4">{currentT.service}</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-wider uppercase text-[#C5A059] mb-4">{currentT.subscribe}</h4>
            <p className="text-xs text-gray-300 mb-3">{currentT.subDesc}</p>
            <div className="flex">
              <input type="email" placeholder={currentT.emailPlaceholder} className="px-3 py-2 text-xs text-gray-900 w-full focus:outline-none" />
              <button className="bg-[#C5A059] text-white px-4 text-xs font-medium hover:bg-[#B38F48]">{currentT.subscribeBtn}</button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-400">
          {currentT.copyright}
        </div>
      </footer>
    </div>
  );
}
