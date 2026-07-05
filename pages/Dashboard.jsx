import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  TrendingUp, 
  DollarSign, 
  Package, 
  Truck, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Search,
  Bell,
  ChevronRight
} from 'lucide-react';

function Dashboard() {
  // Mock Data for demonstration
  const [recentOrders] = useState([
    { id: "#ORD-9482", customer: "Zain Ahmed", items: 2, total: "Rs 6,400", status: "Delivered", date: "Today, 04:30 PM" },
    { id: "#ORD-9481", customer: "Sara Khan", items: 1, total: "Rs 3,200", status: "Processing", date: "Today, 02:15 PM" },
    { id: "#ORD-9480", customer: "Hamza Ali", items: 3, total: "Rs 9,800", status: "Shipped", date: "Yesterday" },
    { id: "#ORD-9479", customer: "Ayesha Omer", items: 1, total: "Rs 2,900", status: "Cancelled", date: "Yesterday" },
  ]);

  const [topProducts] = useState([
    { name: "Cyber-Vibe Oversized Hoodie", sales: 142, stock: 12, price: "Rs 4,500", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=150" },
    { name: "Neon Matrix Graphic Tee", sales: 98, stock: 45, price: "Rs 2,500", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=150" },
    { name: "Tactical Cargo Pants x26", sales: 76, stock: 0, price: "Rs 5,200", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150" },
  ]);

  const stats = [
    { title: "Total Revenue", value: "Rs 428,500", change: "+14.2%", isPositive: true, icon: DollarSign, color: "text-emerald-500 bg-emerald-500/10" },
    { title: "Active Orders", value: "38", change: "+8.4%", isPositive: true, icon: ShoppingBag, color: "text-cyan-500 bg-cyan-500/10" },
    { title: "Products Live", value: "124", change: "-2 new", isPositive: false, icon: Package, color: "text-purple-500 bg-purple-500/10" },
    { title: "Total Customers", value: "1,840", change: "+24.1%", isPositive: true, icon: Users, color: "text-amber-500 bg-amber-500/10" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-neutral-950 dark:to-slate-900 dark:text-white transition-colors duration-300">
      
      {/* GLOBAL BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-950 text-white dark:bg-cyan-400 dark:text-slate-950 flex items-center justify-center font-black text-lg shadow-md">
            Ω
          </div>
          <div>
            <h1 className="font-black text-lg tracking-tight dark:text-white text-neutral-950">VIBE-CHECK</h1>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-cyan-400 font-bold">HQ Control Panel</p>
          </div>
        </div>

        {/* Search Bar & Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Search drops, orders..." 
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>
          <button className="p-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 relative hover:scale-105 transition-transform">
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <Bell className="w-4 h-4 text-neutral-600 dark:text-slate-300" />
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 p-[1.5px] cursor-pointer">
            <div className="w-full h-full bg-neutral-950 rounded-full flex items-center justify-center text-xs font-black text-white">
              AD
            </div>
          </div>
        </div>
      </header>

      {/* DASHBOARD CONTAINER */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 relative z-10">
        
        {/* WELCOME BANNER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl shadow-sm">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white">Welcome Back, Alpha Drop</h2>
            <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1">Here is what's happening with your streetwear brand today.</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-950 text-white dark:bg-cyan-400 dark:text-slate-950 text-xs font-black tracking-wider uppercase rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-cyan-400/10">
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Launch New Drop</span>
          </button>
        </div>

        {/* 4-COLUMN STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl flex items-center justify-between shadow-sm group hover:border-neutral-950 dark:hover:border-cyan-400/40 transition-all duration-300">
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">{stat.title}</p>
                  <h3 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white">{stat.value}</h3>
                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold ${stat.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                    {stat.change}
                  </span>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* MAIN ANALYSIS CONTENT LINK CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: RECENT ORDERS TABLE */}
          <div className="lg:col-span-2 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-sm">
            <div className="p-6 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between">
              <div>
                <h3 className="font-black tracking-tight text-neutral-950 dark:text-white">Recent Drop Orders</h3>
                <p className="text-xs text-neutral-500 dark:text-slate-400 mt-0.5">Live feed of orders incoming all across Pakistan.</p>
              </div>
              <button className="text-xs font-bold text-neutral-600 dark:text-cyan-400 hover:underline flex items-center gap-1">
                <span>View All</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-white/[0.01] text-neutral-400 text-[10px] font-black uppercase tracking-wider">
                    <th className="py-4 px-6">ID</th>
                    <th className="py-4 px-6">Customer</th>
                    <th className="py-4 px-6">Status</th>
                    <th className="py-4 px-6">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-white/5 text-xs">
                  {recentOrders.map((order, index) => (
                    <tr key={index} className="hover:bg-neutral-50 dark:hover:bg-white/[0.01] transition-colors group">
                      <td className="py-4 px-6 font-bold text-neutral-950 dark:text-white">{order.id}</td>
                      <td className="py-4 px-6">
                        <div className="font-bold text-neutral-800 dark:text-slate-200">{order.customer}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{order.date}</div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider ${
                          order.status === 'Delivered' ? 'bg-emerald-500/10 text-emerald-500' :
                          order.status === 'Processing' ? 'bg-cyan-500/10 text-cyan-400' :
                          order.status === 'Shipped' ? 'bg-indigo-500/10 text-indigo-400' :
                          'bg-rose-500/10 text-rose-500'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            order.status === 'Delivered' ? 'bg-emerald-500' :
                            order.status === 'Processing' ? 'bg-cyan-400 animate-pulse' :
                            order.status === 'Shipped' ? 'bg-indigo-400' :
                            'bg-rose-500'
                          }`}></span>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-black text-neutral-950 dark:text-white">{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* RIGHT 1 COLUMN: TOP SELLING ITEMS */}
          <div className="bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="font-black tracking-tight text-neutral-950 dark:text-white">Trending Items</h3>
              <p className="text-xs text-neutral-500 dark:text-slate-400 mt-0.5 mb-6">Highest moving sub-culture aesthetics.</p>
              
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center gap-4 p-2 rounded-xl hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors group">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-xl border border-neutral-200 dark:border-white/10" />
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-xs truncate text-neutral-950 dark:text-white group-hover:text-cyan-400 transition-colors">{product.name}</h4>
                      <p className="text-[10px] text-neutral-400 mt-0.5">{product.sales} units dropped</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="font-black text-xs block text-neutral-950 dark:text-white">{product.price}</span>
                      {product.stock === 0 ? (
                        <span className="inline-flex items-center gap-0.5 text-[9px] font-black text-rose-500 uppercase bg-rose-500/10 px-1.5 py-0.5 rounded mt-0.5">
                          <AlertCircle className="w-2.5 h-2.5" /> SOLD OUT
                        </span>
                      ) : (
                        <span className="text-[10px] text-neutral-400 block mt-0.5">{product.stock} left</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full mt-6 py-3 border border-dashed border-neutral-300 dark:border-white/10 hover:border-cyan-400/50 rounded-xl text-xs font-black tracking-widest uppercase text-neutral-600 dark:text-slate-400 hover:text-cyan-400 transition-colors">
              Inventory Check
            </button>
          </div>

        </div>

      </main>
    </div>
  );
}

export default Dashboard;