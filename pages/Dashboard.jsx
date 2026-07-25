import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, 
  Users, 
  DollarSign, 
  Package, 
  ArrowUpRight, 
  ArrowDownRight, 
  Plus, 
  Trash2, 
  Edit3, 
  X, 
  Upload, 
  AlertTriangle,
  RefreshCw
} from 'lucide-react';

function Dashboard() {
  // --- STATE MANAGEMENT ---
  const [topProducts, setTopProducts] = useState([
    { id: 1, name: "Cyber-Vibe Oversized Hoodie", sales: 142, stock: 12, price: "4500", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=150" },
    { id: 2, name: "Neon Matrix Graphic Tee", sales: 98, stock: 5, price: "2500", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=150" },
    { id: 3, name: "Tactical Cargo Pants x26", sales: 76, stock: 0, price: "5200", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=150" },
  ]);

  const [recentOrders, setRecentOrders] = useState([
    { id: "#ORD-9482", customer: "Zain Ahmed", items: 2, total: "Rs 6,400", status: "Delivered", date: "Today, 04:30 PM" },
    { id: "#ORD-9481", customer: "Sara Khan", items: 1, total: "Rs 3,200", status: "Processing", date: "Today, 02:15 PM" },
    { id: "#ORD-9480", customer: "Hamza Ali", items: 3, total: "Rs 9,800", status: "Shipped", date: "Yesterday" },
  ]);

  // Filter State
  const [orderFilter, setOrderFilter] = useState('All');

  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteCandidateId, setDeleteCandidateId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({ name: '', price: '', stock: '', image: '' });

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
      stock: product.stock.toString(),
      image: product.image
    });
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (deleteCandidateId) {
      setTopProducts(topProducts.filter(p => p.id !== deleteCandidateId));
      setDeleteCandidateId(null);
    }
  };

  const handleQuickAddStock = (id) => {
    setTopProducts(topProducts.map(p => p.id === id ? { ...p, stock: p.stock + 5 } : p));
  };

  const handleStatusCycle = (orderId) => {
    const nextStatus = {
      'Processing': 'Shipped',
      'Shipped': 'Delivered',
      'Delivered': 'Processing'
    };

    setRecentOrders(recentOrders.map(o => 
      o.id === orderId ? { ...o, status: nextStatus[o.status] || 'Processing' } : o
    ));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setTopProducts(topProducts.map(p => p.id === editingProduct.id ? { 
        ...p, 
        name: formData.name,
        price: formData.price,
        stock: parseInt(formData.stock) || 0,
        image: formData.image
      } : p));
    } else {
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

  // Filtered Orders
  const filteredOrders = useMemo(() => {
    if (orderFilter === 'All') return recentOrders;
    return recentOrders.filter(o => o.status === orderFilter);
  }, [recentOrders, orderFilter]);

  const stats = [
    { title: "Total Revenue", value: "Rs 428,500", change: "+14.2%", isPositive: true, icon: DollarSign, color: "text-emerald-500 bg-emerald-500/10" },
    { title: "Active Orders", value: recentOrders.length.toString(), change: "+8.4%", isPositive: true, icon: ShoppingBag, color: "text-cyan-500 bg-cyan-500/10" },
    { title: "Products Live", value: topProducts.length.toString(), change: "Updated", isPositive: true, icon: Package, color: "text-purple-500 bg-purple-500/10" },
    { title: "Total Customers", value: "1,840", change: "+24.1%", isPositive: true, icon: Users, color: "text-amber-500 bg-amber-500/10" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-gradient-to-br dark:from-slate-950 dark:via-neutral-950 dark:to-slate-900 dark:text-white transition-colors duration-300 relative pt-6">
      
      {/* GLOBAL BACKGROUND GLOWS */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* DASHBOARD CONTAINER */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 relative z-10">
        
        {/* WELCOME BANNER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl shadow-sm">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-neutral-950 dark:text-white">Welcome Back, Alpha Drop</h2>
            <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1">Manage inventory, monitor dispatch feeds, and launch drops.</p>
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
              <div key={i} className="bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl flex items-center justify-between shadow-sm hover:border-neutral-300 dark:hover:border-white/20 transition-all">
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

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: ORDERS TABLE */}
          <div className="lg:col-span-2 bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-sm">
            <div className="p-6 border-b border-neutral-200 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-black tracking-tight text-neutral-950 dark:text-white">Recent Drop Orders</h3>
                <p className="text-xs text-neutral-500 dark:text-slate-400 mt-0.5">Click status tag to quickly update fulfillment stage.</p>
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-1 bg-neutral-100 dark:bg-white/5 p-1 rounded-xl">
                {['All', 'Processing', 'Shipped', 'Delivered'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setOrderFilter(status)}
                    className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all ${
                      orderFilter === status 
                        ? 'bg-white dark:bg-slate-800 text-neutral-950 dark:text-white shadow-sm' 
                        : 'text-neutral-500 dark:text-slate-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-white/5 bg-neutral-50 dark:bg-white/[0.01] text-neutral-400 text-[10px] font-black uppercase tracking-wider">
                    <th className="py-4 px-6">Order ID</th>
                    <th className="py-4 px-6">Customer</th>
                    <th className="py-4 px-6">Status (Click to Cycle)</th>
                    <th className="py-4 px-6">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-white/5 text-xs">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-neutral-50 dark:hover:bg-white/[0.01] transition-colors">
                      <td className="py-4 px-6 font-bold text-neutral-950 dark:text-white">{order.id}</td>
                      <td className="py-4 px-6">
                        <div className="font-bold text-neutral-800 dark:text-slate-200">{order.customer}</div>
                        <div className="text-[10px] text-neutral-400 mt-0.5">{order.date} • {order.items} items</div>
                      </td>
                      <td className="py-4 px-6">
                        <button 
                          onClick={() => handleStatusCycle(order.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[10px] font-black transition-transform active:scale-95 cursor-pointer ${
                            order.status === 'Delivered' 
                              ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                              : order.status === 'Shipped'
                              ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                              : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                          }`}
                        >
                          <RefreshCw className="w-3 h-3" />
                          <span>{order.status}</span>
                        </button>
                      </td>
                      <td className="py-4 px-6 font-black text-neutral-950 dark:text-white">{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredOrders.length === 0 && (
                <div className="text-center py-12 text-xs text-neutral-400">
                  No orders found matching status "{orderFilter}"
                </div>
              )}
            </div>
          </div>

          {/* RIGHT 1 COLUMN: DYNAMIC INVENTORY HUB */}
          <div className="bg-white dark:bg-white/[0.02] border border-neutral-200 dark:border-white/10 p-6 rounded-2xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-black tracking-tight text-neutral-950 dark:text-white">Live Inventory Hub</h3>
                  <p className="text-xs text-neutral-500 dark:text-slate-400 mt-0.5">Manage variants or update stock levels.</p>
                </div>
                <span className="text-[10px] bg-cyan-400/10 text-cyan-400 px-2.5 py-1 rounded-full font-bold uppercase border border-cyan-400/20">
                  {topProducts.length} Items
                </span>
              </div>
              
              <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                {topProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-50 dark:bg-white/[0.01] border border-neutral-200 dark:border-white/5 hover:border-cyan-500/30 transition-all">
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-xl border border-neutral-200 dark:border-white/10 flex-shrink-0" />
                    
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-xs truncate text-neutral-950 dark:text-white">{product.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[11px] font-black text-cyan-400">Rs {product.price}</span>
                        
                        {/* Stock Badges */}
                        {product.stock === 0 ? (
                          <span className="text-[9px] font-extrabold bg-rose-500/10 text-rose-500 px-1.5 py-0.5 rounded">OOS</span>
                        ) : product.stock < 10 ? (
                          <span className="text-[9px] font-extrabold bg-amber-500/10 text-amber-500 px-1.5 py-0.5 rounded">Low ({product.stock})</span>
                        ) : (
                          <span className="text-[9px] font-extrabold text-neutral-400">{product.stock} in stock</span>
                        )}
                      </div>
                    </div>
                    
                    {/* ACTION CONTROLS */}
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => handleQuickAddStock(product.id)}
                        title="Quick Add 5 Units Stock"
                        className="p-1.5 rounded-lg text-xs font-bold text-emerald-500 hover:bg-emerald-500/10 transition-colors"
                      >
                        +5
                      </button>
                      <button 
                        onClick={() => handleOpenEditModal(product)}
                        title="Edit Item"
                        className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-cyan-400 hover:bg-neutral-200 dark:hover:bg-white/5 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => setDeleteCandidateId(product.id)}
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
                    No articles available.
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider font-black text-neutral-400">Retail Price (Rs)</label>
                  <input 
                    type="number" 
                    required
                    placeholder="4500"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-neutral-950 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
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
                    className="w-full bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-3 py-2.5 text-xs text-neutral-950 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider font-black text-neutral-400">Article Artwork Image URL</label>
                <div className="w-full border-2 border-dashed border-neutral-200 dark:border-white/10 rounded-xl p-4 flex flex-col items-center justify-center bg-neutral-50 dark:bg-white/[0.01]">
                  <Upload className="w-5 h-5 text-neutral-400 mb-1.5" />
                  <input 
                    type="text" 
                    placeholder="Paste image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full text-center bg-transparent border-t border-neutral-200 dark:border-white/5 mt-2 pt-2 text-[10px] focus:outline-none focus:text-cyan-400 text-neutral-950 dark:text-white"
                  />
                </div>
              </div>

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
                  className="w-1/2 py-2.5 bg-neutral-950 text-white dark:bg-cyan-400 dark:text-slate-950 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg hover:opacity-90 transition-opacity"
                >
                  {editingProduct ? 'Update Live' : 'Deploy Article'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* --- CUSTOM DELETE CONFIRMATION MODAL --- */}
      {deleteCandidateId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 border border-neutral-200 dark:border-white/10 w-full max-w-sm rounded-2xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center gap-3 text-rose-500">
              <div className="p-2.5 bg-rose-500/10 rounded-xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase tracking-tight text-neutral-950 dark:text-white">Delete Article?</h4>
                <p className="text-xs text-neutral-400">This action cannot be undone.</p>
              </div>
            </div>
            
            <p className="text-xs text-neutral-500 dark:text-slate-300 leading-relaxed">
              Kya aap waqai is streetwear piece ko inventory drop se permanent remove karna chahte hain?
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button 
                onClick={() => setDeleteCandidateId(null)}
                className="w-1/2 py-2.5 border border-neutral-200 dark:border-white/10 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-neutral-100 dark:hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="w-1/2 py-2.5 bg-rose-500 text-white font-black rounded-xl text-xs uppercase tracking-widest shadow-lg shadow-rose-500/20 hover:bg-rose-600 transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Dashboard;