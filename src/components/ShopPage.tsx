import React from 'react';
import { Search, ShoppingCart, Camera, Receipt, Truck, Gift, MessageSquareMore, Wallet, ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

const ShopPage: React.FC = () => {
    const categories = [
        { icon: Receipt, label: 'Pesanan' },
        { icon: Truck, label: 'Penghantaran Percuma' },
        { icon: Gift, label: 'Bonus', amount: 'RM0.28' },
        { icon: MessageSquareMore, label: 'Mesej' },
        { icon: Wallet, label: 'Pembiaya' },
    ];

    const tabs = ['Semua', 'Jimat Gila', 'Home Appliances', 'Grocer Day', 'Fesyen Muslimah'];

    const products = [
        {
            id: 1,
            title: 'Surat Cinta Dari Tuhan (Sinopsis 30 Juz Quran) by A...',
            price: 41.00,
            originalPrice: 60.00,
            discount: '-32%',
            rating: 4.9,
            sold: '70',
            image: 'https://picsum.photos/seed/book1/400/400',
            badges: ['XTRA Free Shipping', 'Extra Voucher', 'Save with Bonus'],
            flashSale: '19:52:45'
        },
        {
            id: 2,
            title: 'JHSARI Set Penjagaan Kulit T...',
            price: 15.80,
            originalPrice: 1969.80,
            discount: '-99%',
            rating: 4.7,
            sold: '70',
            image: 'https://picsum.photos/seed/skin1/400/400',
            badges: ['XTRA Free Shipping', 'Extra Voucher', 'Save with Bonus'],
            flashSale: '11:23:45'
        },
        {
            id: 3,
            title: 'Surat Cinta Dari Tuhan',
            price: 41.00,
            originalPrice: 60.00,
            discount: '-20%',
            rating: 4.9,
            sold: '1.2k',
            image: 'https://picsum.photos/seed/book2/400/400',
            badges: ['XTRA Free Shipping', 'Extra Voucher'],
        }
    ];

    return (
        <div className="flex-1 bg-[#F8F8F8] flex flex-col pb-20">
            {/* Header */}
            <div className="bg-white px-4 py-3 sticky top-0 z-30 flex items-center gap-3">
                <div className="flex-1 h-10 bg-gray-100 rounded-lg flex items-center px-3 gap-2 border border-gray-200">
                    <Search size={18} className="text-gray-500" />
                    <input 
                        type="text" 
                        placeholder="00.00 barang percuma" 
                        className="bg-transparent flex-1 text-sm outline-none"
                    />
                    <Camera size={18} className="text-gray-500" />
                    <div className="h-4 w-[1px] bg-gray-300 mx-1"></div>
                    <button className="text-[#FF0050] font-bold text-sm">Cari</button>
                </div>
                <div className="relative">
                    <ShoppingCart size={24} className="text-gray-800" />
                    <span className="absolute -top-1 -right-1 bg-[#FF0050] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
                </div>
            </div>

            {/* Quick Links Row */}
            <div className="bg-white px-4 py-4 grid grid-cols-5 gap-1 mb-2">
                {categories.map((cat, index) => (
                    <div key={index} className="flex flex-col items-center gap-1.5 relative">
                        {cat.amount && (
                            <span className="absolute -top-3 bg-[#FF0050] text-white text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                                {cat.amount}
                            </span>
                        )}
                        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700">
                            <cat.icon size={22} strokeWidth={1.5} />
                        </div>
                        <span className="text-[10px] text-center text-gray-600 leading-tight h-6 flex items-center justify-center font-medium">
                            {cat.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Sales Sections Wrapper */}
            <div className="grid grid-cols-2 gap-2 px-4 mb-3">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-50">
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-black italic text-red-600 text-lg tracking-tighter">FLASH Sale</span>
                        <div className="flex gap-1">
                            <span className="bg-black text-white text-[10px] px-1 py-0.5 rounded font-bold">07</span>
                            <span className="font-bold text-[10px]">:</span>
                            <span className="bg-black text-white text-[10px] px-1 py-0.5 rounded font-bold">53</span>
                            <span className="font-bold text-[10px]">:</span>
                            <span className="bg-black text-white text-[10px] px-1 py-0.5 rounded font-bold">46</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                         <div className="relative">
                            <img src="https://picsum.photos/seed/fan/200/200" alt="item" className="w-full aspect-square object-cover rounded-lg" referrerPolicy='no-referrer' />
                            <div className="absolute top-0 left-0 bg-red-600 text-white text-[8px] px-1 font-bold rounded-tl-lg">Hebat</div>
                            <div className="mt-1">
                                <p className="text-[#FF0050] font-black text-xs">RM19.98</p>
                                <p className="text-gray-400 text-[10px] line-through">RM129.00</p>
                            </div>
                         </div>
                         <div className="relative">
                            <img src="https://picsum.photos/seed/dress/200/200" alt="item" className="w-full aspect-square object-cover rounded-lg" referrerPolicy='no-referrer' />
                            <div className="absolute top-0 left-0 bg-red-600 text-white text-[8px] px-1 font-bold rounded-tl-lg">42%</div>
                            <div className="mt-1">
                                <p className="text-[#FF0050] font-black text-xs">RM14.98</p>
                                <p className="text-gray-400 text-[10px] line-through">RM23.99</p>
                            </div>
                         </div>
                    </div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-50">
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-black text-lg tracking-tighter group flex items-center">
                            Brands Crazy <span className="text-red-600">Deals</span>
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                         <div className="relative">
                            <img src="https://picsum.photos/seed/pan/200/200" alt="item" className="w-full aspect-square object-cover rounded-lg" referrerPolicy='no-referrer' />
                            <div className="absolute top-0 left-0 bg-red-600 text-white text-[8px] px-1 font-bold rounded-tl-lg">-70%</div>
                            <div className="mt-1">
                                <p className="font-bold text-xs">RM12.02</p>
                                <p className="text-gray-400 text-[10px] line-through">RM40.00</p>
                            </div>
                         </div>
                         <div className="relative">
                            <img src="https://picsum.photos/seed/lotion/200/200" alt="item" className="w-full aspect-square object-cover rounded-lg" referrerPolicy='no-referrer' />
                            <div className="absolute top-0 left-0 bg-red-600 text-white text-[8px] px-1 font-bold rounded-tl-lg">-60%</div>
                            <div className="mt-1">
                                <p className="font-bold text-xs">RM14.00</p>
                                <p className="text-gray-400 text-[10px] line-through">RM35.00</p>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* Tabs Row */}
            <div className="bg-white border-b border-gray-100 sticky top-[64px] z-20">
                <div className="flex overflow-x-auto scrollbar-hide px-4 gap-6 py-3 whitespace-nowrap">
                    {tabs.map((tab, idx) => (
                        <button key={idx} className={`text-[15px] font-bold ${idx === 0 ? 'text-black border-b-2 border-black' : 'text-gray-500'}`}>
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Feed */}
            <div className="p-2 grid grid-cols-2 gap-2">
                {products.map(product => (
                    <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
                        <div className="relative aspect-square">
                            <img src={product.image} alt={product.title} className="w-full h-full object-cover" referrerPolicy='no-referrer' />
                            {product.discount && (
                                <div className="absolute top-0 right-0 bg-[#FFD700]/90 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded-bl-lg">
                                    {product.discount}
                                </div>
                            )}
                        </div>
                        <div className="p-2 flex flex-col flex-1">
                            <div className="flex flex-wrap gap-1 mb-1.5">
                                {product.badges.map((badge, bIdx) => (
                                    <span key={bIdx} className={`text-[8px] font-bold px-1 rounded ${
                                        badge.includes('Free') ? 'bg-cyan-100 text-cyan-600' : 
                                        badge.includes('Bonus') ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-600'
                                    }`}>
                                        {badge}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-xs font-medium text-gray-800 line-clamp-2 mb-2 leading-tight">
                                <span className="bg-black text-white text-[8px] px-1 rounded mr-1 font-bold">Mall</span>
                                {product.title}
                            </h3>
                            <div className="mt-auto">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[#FF0050] font-black text-base">RM{product.price.toFixed(2)}</span>
                                    <span className="text-gray-400 text-[10px] line-through">RM{product.originalPrice.toFixed(2)}</span>
                                </div>
                                {product.flashSale && (
                                    <div className="bg-yellow-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full inline-flex items-center gap-1 my-1">
                                         Jualan kilat <Star size={8} fill="white" /> {product.flashSale}
                                    </div>
                                )}
                                <div className="flex items-center gap-1 mt-1 text-[10px] text-gray-500 font-medium">
                                    <Star size={10} className="text-yellow-400 fill-yellow-400" />
                                    <span>{product.rating}</span>
                                    <span className="text-gray-300">|</span>
                                    <span>{product.sold} terjual</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;
