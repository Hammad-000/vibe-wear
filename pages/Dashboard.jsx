import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  DollarSign, 
  Package, 
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Search,
  Bell,
  ChevronRight,
  Trash2,
  Edit3,
  X,
  Upload,
  CheckCircle2
} from 'lucide-react';

function Dashboard() {
  // --- REAL-TIME STATES FOR CRUD ---
  const [topProducts, setTopProducts] = useState([
    { id: 1, name: "Cyber-Vibe Oversized Hoodie", sales: 142, stock: 12, price: "4500", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=150" },
    { id: 2, name: "Neon Matrix Graphic Tee", sales: 98, stock: 45, price: "2500", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=150" },
    { id: 3, name: "Tactical Cargo Pants x26", sales: 76, stock: 0, price: "5200", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150" },
  ]);

  const [recentOrders] = useState([
    { id: "#ORD-9482", customer: "Zain Ahmed", items: 2, total: "Rs 6,400", status: "Delivered", date: "Today, 04:30 PM" },
    { id: "#ORD-9481", customer: "Sara Khan", items: 1, total: "Rs 3,200", status: "Processing", date: "Today, 02:15 PM" },
    { id: "#ORD-9480", customer: "Hamza Ali", items: 3, total: "Rs 9,800", status: "Shipped", date: "Yesterday" },
  ]);

  // Form Management States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    stock: '',
    image: ''
  });

  // --- CRUD HANDLERS ---
  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setFormData({ name: '', price: '', stock: '', image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=150' });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      price: product.price,
      stock: product.stock,
      image: product.image
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    if(window.confirm("Kya aap waqai is streetwear piece ko drop se remove karna chahte hain?")) {
      setTopProducts(topProducts.filter(p => p.id !== id));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // Edit logic
      setTopProducts(topProducts.map(p => p.id === editingProduct.id ? { ...p, ...formData } : p));
    } else {
      // Add logic
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        price: formData.price,
        stock: parseInt(formData.stock) || 0,
        sales: 0,
        image: formData.image || "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=150"
      };
      setTopProducts([newProduct, ...topProducts]);
    }
    setIsModalOpen(false);
  };

  const stats = [
    { title: "Total Revenue", value: "Rs 428,500", change: "+14.2%", isPositive: true, icon: DollarSign, color: "text-emerald-500 bg-emerald-500/10" },
    { title: "Active Orders", value: "38", change: "+8.4%", isPositive: true, icon: ShoppingBag, color: "text-cyan-500 bg-cyan-500/10" },
    { title: "Products Live", value: topProducts.length, change: "Updated", isPositive: true, icon: Package, color: "text-purple-500 bg-purple-500/10" },
    { title: "Total Customers", value: "1,840", change: "+24.1%", isPositive: true, icon: Users, color: "text-amber-500 bg-amber-500/10" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-neutral-950 dark:to-slate-900 dark:text-white transition-colors duration-300 relative">
      
      {/* GLOBAL BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-neutral-950 text-white dark:bg-cyan-400 dark:text-slate-950 flex items-center justify-center font-black text-lg shadow-md">Ω</div>
          <div>
            <h1 className="font-black text-lg tracking-tight dark:text-white text-neutral-950">VIBE-CHECK</h1>
            <p className="text-[10px] uppercase tracking-widest text-neutral-400 dark:text-cyan-400 font-bold">HQ Control Panel</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input type="text" placeholder="Search drops..." className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 focus:outline-none focus:border-cyan-400 transition-all" />
          </div>
          <button className="p-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 relative">
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <Bell className="w-4 h-4 text-neutral-600 dark:text-slate-300" />
          </button>
        </div>
      </header>

      {/* DASHBOARD CONTAINER */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 relative z-10">
        
        {/* WELCOME BANNER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl shadow-sm">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white">Welcome Back, Alpha Drop</h2>
            <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1">Manage inventory, launch items, and look up statistics.</p>
          </div>
          <button onClick={handleOpenAddModal} className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-950 text-white dark:bg-cyan-400 dark:text-slate-950 text-xs font-black tracking-wider uppercase rounded-xl hover:opacity-90 transition-all transform active:scale-95 cursor-pointer shadow-lg shadow-cyan-400/10">
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Launch New Drop</span>
          </button>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl flex items-center justify-between shadow-sm">
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">{stat.title}</p>
                  <h3 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white">{stat.value}</h3>
                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold ${stat.isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />} {stat.change}
                  </span>
                </div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE PRODUCT MANAGER GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: ORDERS */}
          <div className="lg:col-span-2 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-sm">
            <div className="p-6 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between">
              <div>
                <h3 className="font-black tracking-tight text-neutral-950 dark:text-white">Recent Drop Orders</h3>
                <p className="text-xs text-neutral-500 dark:text-slate-400 mt-0.5">Live feed of orders incoming all across Pakistan.</p>
              </div>
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
                    <tr key={index} className="hover:bg-neutral-50 dark:hover:bg-white/[0.01] transition-colors">
                      <td className="py-4 px-6 font-bold text-neutral-950 dark:text-white">{order.id}</td>
                      <td className="py-4 px-6">
                        <div className="font-bold text-neutral-800 dark:text-slate-200">{order.customer}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{order.date}</div>
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-black ${
                          order.status === 'Delivered' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-cyan-500/10 text-cyan-400'
                        }`}>
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

          {/* RIGHT 1 COLUMN: DYNAMIC INVENTORY HUB (EDIT / DELETE ACTIONS HERE) */}
          <div className="bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-black tracking-tight text-neutral-950 dark:text-white">Live Inventory Hub</h3>
                  <p className="text-xs text-neutral-500 dark:text-slate-400 mt-0.5">Edit status or wipe articles directly.</p>
                </div>
                <span className="text-[10px] bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded font-bold uppercase">{topProducts.length} Items</span>
              </div>
              
              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                {topProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-2 rounded-xl bg-neutral-50 dark:bg-white/[0.01] border border-neutral-200 dark:border-white/5 group transition-all">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-xl border border-neutral-200 dark:border-white/10" />
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-xs truncate text-neutral-950 dark:text-white">{product.name}</h4>
                      <p className="text-[10px] font-bold text-cyan-400 mt-0.5">Rs {product.price}</p>
                    </div>
                    
                    {/* ACTION CONTROLS */}
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => handleOpenEditModal(product)}
                        title="Edit Item"
                        className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-cyan-400 hover:bg-neutral-200 dark:hover:bg-white/5 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        title="Delete Item"
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {topProducts.length === 0 && (
                  <div className="text-center py-8 text-xs text-neutral-400">
                 "No items are live. Launch a new drop!"
                  </div>
                )}
              </div>
            </div>

            <button onClick={handleOpenAddModal} className="w-full mt-6 py-3 border border-dashed border-neutral-300 dark:border-white/10 hover:border-cyan-400/50 rounded-xl text-xs font-black tracking-widest uppercase text-neutral-600 dark:text-slate-400 hover:text-cyan-400 transition-colors">
              + Add Quick Article
            </button>
          </div>

        </div>
      </main>

      {/* --- ADD / EDIT PRODUCT MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-slate-900 border border-neutral-200 dark:border-white/10 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl transition-all">
            
            {/* Modal Header */}
            <div className="p-6 border-b border-neutral-200 dark:border-white/5 flex items-center justify-between bg-neutral-50 dark:bg-white/[0.02]">
              <div>
                <h3 className="font-black text-base text-neutral-950 dark:text-white uppercase tracking-tight">
                  {editingProduct ? '⚡ Edit Variant Fit' : '🔥 Launch New Fit'}
                </h3>
                <p className="text-xs text-neutral-400 mt-0.5">Fill standard specifications details.</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-1 rounded-lg hover:bg-neutral-200 dark:hover:bg-white/10 text-neutral-400 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
              
              {/* Product Name Input */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-black text-neutral-400">Article Title Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Matrix Heavy Weight Tee"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-neutral-950 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              {/* Price and Stock Row */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-black text-neutral-400">Retail Price (Rs)</label>
                  <input 
                    type="number" 
                    required
                    placeholder="4500"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-black text-neutral-400">Initial Stock Units</label>
                  <input 
                    type="number" 
                    required
                    placeholder="24"
                    value={formData.stock}
                    onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              {/* Mock Upload Image Box */}
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-black text-neutral-400">Article Artwork Image</label>
                <div className="w-full border-2 border-dashed border-neutral-200 dark:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center bg-neutral-50 dark:bg-white/[0.01] hover:border-cyan-400/40 transition-colors cursor-pointer relative group">
                  <Upload className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 transition-colors mb-1.5" />
                  <span className="text-[10px] text-neutral-400 font-bold">Standard Drop Link Active</span>
                  <input 
                    type="text" 
                    placeholder="Paste image URL or mock is used"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full text-center bg-transparent border-t border-neutral-200 dark:border-white/5 mt-2 pt-2 text-[10px] focus:outline-none focus:text-cyan-400"
                  />
                </div>
              </div>

              {/* Action Trigger Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 py-2.5 border border-neutral-200 dark:border-white/10 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="w-1/2 py-2.5 bg-neutral-950 text-white dark:bg-cyan-400 dark:text-slate-950 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-cyan-400/5 hover:opacity-90 transition-opacity"
                >
                  {editingProduct ? 'Update Live' : 'Deploy Article'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}

export default Dashboard;