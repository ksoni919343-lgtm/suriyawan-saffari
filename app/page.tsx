import Link from 'next/link';

export default function Home() {
  return (
    <div className="container max-w-7xl mx-auto p-8">
      <div className="ornate-border border-8 border-double border-sandyGold rounded-3xl p-14 text-center text-6xl font-bold bg-chockleti text-white shadow-golden box-shadow-[0_30px_80px_rgba(0,0,0,0.7)] inset-shadow-[0_0_40px_#FFD700] relative overflow-hidden transform-style-preserve-3d transform-rotate-x-10 translate-z-50 transition-transform duration-600 hover:transform-rotate-x-15 hover:translate-z-70 hover:scale-105">
        Suriyawan Saffari
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
        <Link href="/owner" className="product-card bg-chockleti border-4 border-double border-sandyGold rounded-2xl p-8 text-center text-white min-h-[300px] transition-all duration-700 transform-style-preserve-3d transform-rotate-y-0 translate-z-30 hover:transform-rotate-y-20 hover:translate-z-50 hover:scale-115 shadow-[0_40px_100px_rgba(255,215,0,0.8)] hover:inset-shadow-[0_0_30px_#FFD700]">
          Owner Portal
        </Link>
        <Link href="/suriyawan/customer" className="product-card bg-chockleti border-4 border-double border-sandyGold rounded-2xl p-8 text-center text-white min-h-[300px] transition-all duration-700 transform-style-preserve-3d transform-rotate-y-0 translate-z-30 hover:transform-rotate-y-20 hover:translate-z-50 hover:scale-115 shadow-[0_40px_100px_rgba(255,215,0,0.8)] hover:inset-shadow-[0_0_30px_#FFD700]">Customer Portal</Link>
        <Link href="/suriyawan/seller" className="product-card bg-chockleti border-4 border-double border-sandyGold rounded-2xl p-8 text-center text-white min-h-[300px] transition-all duration-700 transform-style-preserve-3d transform-rotate-y-0 translate-z-30 hover:transform-rotate-y-20 hover:translate-z-50 hover:scale-115 shadow-[0_40px_100px_rgba(255,215,0,0.8)] hover:inset-shadow-[0_0_30px_#FFD700]">Seller Portal</Link>
        <Link href="/tracking" className="product-card bg-chockleti border-4 border-double border-sandyGold rounded-2xl p-8 text-center text-white min-h-[300px] transition-all duration-700 transform-style-preserve-3d transform-rotate-y-0 translate-z-30 hover:transform-rotate-y-20 hover:translate-z-50 hover:scale-115 shadow-[0_40px_100px_rgba(255,215,0,0.8)] hover:inset-shadow-[0_0_30px_#FFD700]">Tracking Portal</Link>
        <Link href="/delivery" className="product-card bg-chockleti border-4 border-double border-sandyGold rounded-2xl p-8 text-center text-white min-h-[300px] transition-all duration-700 transform-style-preserve-3d transform-rotate-y-0 translate-z-30 hover:transform-rotate-y-20 hover:translate-z-50 hover:scale-115 shadow-[0_40px_100px_rgba(255,215,0,0.8)] hover:inset-shadow-[0_0_30px_#FFD700]">Delivery Boy Portal</Link>
      </div>
    </div>
  );
}
