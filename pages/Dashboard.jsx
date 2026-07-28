import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, Users, DollarSign, Package, ArrowUpRight, ArrowDownRight, 
  Plus, Trash2, Edit3, X, Upload, AlertTriangle, RefreshCw 
} from 'lucide-react';

function Dashboard() {
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

  const [orderFilter, setOrderFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deleteCandidateId, setDeleteCandidateId] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', stock: '', image: '' });

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

  const filteredOrders = useMemo(() => {
    if (orderFilter === 'All') return recentOrders;
    return recentOrders.filter(o => o.status === orderFilter);
  }, [recentOrders, orderFilter]);

  const stats = [
    { title: "Total Revenue", value: "Rs 428,500", change: "+14.2%", isPositive: true, icon: DollarSign },
    { title: "Active Orders", value: recentOrders.length.toString(), change: "+8.4%", isPositive: true, icon: ShoppingBag },
    { title: "Products Live", value: topProducts.length.toString(), change: "Updated", isPositive: true, icon: Package },
    { title: "Total Customers", value: "1,840", change: "+24.1%", isPositive: true, icon: Users },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-slate-200 transition-colors p-4 sm:p-8">
      
      {/* DASHBOARD CONTAINER */}
      <main className="max-w-6xl mx-auto space-y-6">
        
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-zinc-800">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h1>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">Manage products, orders, and inventory status.</p>
          </div>
          <button 
            onClick={handleOpenAddModal} 
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold rounded-lg hover:opacity-90 transition-all cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Product</span>
          </button>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-4 rounded-xl flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-500 dark:text-zinc-400">{stat.title}</p>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                  <span className={`inline-flex items-center gap-0.5 text-[11px] font-medium ${stat.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'}`}>
                    {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />} {stat.change}
                  </span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                  <Icon className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* MAIN CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT 2 COLUMNS: ORDERS TABLE */}
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="font-bold text-sm text-slate-900 dark:text-white">Recent Orders</h2>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Click status to update stage.</p>
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-1 bg-slate-100 dark:bg-zinc-800 p-1 rounded-lg">
                {['All', 'Processing', 'Shipped', 'Delivered'].map((status) => (
                  <button
                    key={status}
                    onClick={() => setOrderFilter(status)}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                      orderFilter === status 
                        ? 'bg-white dark:bg-zinc-700 text-slate-900 dark:text-white shadow-xs' 
                        : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
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
                  <tr className="border-b border-slate-200 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30 text-slate-500 dark:text-zinc-400 text-[11px] font-semibold">
                    <th className="py-3 px-4">Order ID</th>
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-zinc-800 text-xs">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/20 transition-colors">
                      <td className="py-3 px-4 font-medium text-slate-900 dark:text-white">{order.id}</td>
                      <td className="py-3 px-4">
                        <div className="font-medium text-slate-800 dark:text-zinc-200">{order.customer}</div>
                        <div className="text-[10px] text-slate-400">{order.date} • {order.items} items</div>
                      </td>
                      <td className="py-3 px-4">
                        <button 
                          onClick={() => handleStatusCycle(order.id)}
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-medium cursor-pointer transition-opacity hover:opacity-80 ${
                            order.status === 'Delivered' 
                              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' 
                              : order.status === 'Shipped'
                              ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400'
                              : 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400'
                          }`}
                        >
                          <RefreshCw className="w-2.5 h-2.5" />
                          <span>{order.status}</span>
                        </button>
                      </td>
                      <td className="py-3 px-4 text-right font-medium text-slate-900 dark:text-white">{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredOrders.length === 0 && (
                <div className="text-center py-8 text-xs text-slate-400">
                  No orders found with status "{orderFilter}"
                </div>
              )}
            </div>
          </div>

          {/* RIGHT 1 COLUMN: INVENTORY */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-4 rounded-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-bold text-sm text-slate-900 dark:text-white">Inventory</h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">Manage stock and details.</p>
                </div>
                <span className="text-[11px] text-slate-500 bg-slate-100 dark:bg-zinc-800 dark:text-zinc-400 px-2 py-0.5 rounded font-medium">
                  {topProducts.length} items
                </span>
              </div>
              
              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                {topProducts.map((product) => (
                  <div key={product.id} className="flex items-center gap-3 p-2 rounded-lg border border-slate-100 dark:border-zinc-800/80 hover:border-slate-300 dark:hover:border-zinc-700 transition-all">
                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded-md flex-shrink-0" />
                    
                    <div className="flex-grow min-w-0">
                      <h3 className="font-medium text-xs truncate text-slate-900 dark:text-white">{product.name}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-semibold text-slate-700 dark:text-zinc-300">Rs {product.price}</span>
                        
                        {/* Stock Badges */}
                        {product.stock === 0 ? (
                          <span className="text-[10px] text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 px-1 rounded">Out of stock</span>
                        ) : product.stock < 10 ? (
                          <span className="text-[10px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-1 rounded">Low ({product.stock})</span>
                        ) : (
                          <span className="text-[10px] text-slate-400">{product.stock} in stock</span>
                        )}
                      </div>
                    </div>
                    
                    {/* CONTROLS */}
                    <div className="flex items-center gap-1">
                      <button 
                        onClick={() => handleQuickAddStock(product.id)}
                        title="Add 5 units"
                        className="px-1.5 py-1 rounded text-xs font-medium text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors"
                      >
                        +5
                      </button>
                      <button 
                        onClick={() => handleOpenEditModal(product)}
                        title="Edit product"
                        className="p-1 rounded text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => setDeleteCandidateId(product.id)}
                        title="Delete product"
                        className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {topProducts.length === 0 && (
                  <div className="text-center py-6 text-xs text-slate-400">
                    No products listed.
                  </div>
                )}
              </div>
            </div>

            <button 
              onClick={handleOpenAddModal} 
              className="w-full mt-4 py-2 border border-dashed border-slate-300 dark:border-zinc-700 hover:border-slate-400 rounded-lg text-xs font-medium text-slate-600 dark:text-zinc-400 transition-colors"
            >
              + Quick Add Product
            </button>
          </div>

        </div>
      </main>

      {/* --- ADD / EDIT PRODUCT MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400">Enter product details below.</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="p-1 rounded text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleFormSubmit} className="p-4 space-y-3">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600 dark:text-zinc-400">Product Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., Heavyweight Cotton Tee"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600 dark:text-zinc-400">Price (Rs)</label>
                  <input 
                    type="number" 
                    required
                    placeholder="2500"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-400"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-600 dark:text-zinc-400">Initial Stock</label>
                  <input 
                    type="number" 
                    required
                    placeholder="10"
                    value={formData.stock}
                    onChange={(e) => setFormData({...formData, stock: e.target.value})}
                    className="w-full bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-lg px-3 py-1.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-600 dark:text-zinc-400">Image URL</label>
                <div className="border border-slate-200 dark:border-zinc-700 rounded-lg p-3 bg-slate-50 dark:bg-zinc-800 flex flex-col items-center justify-center">
                  <Upload className="w-4 h-4 text-slate-400 mb-1" />
                  <input 
                    type="text" 
                    placeholder="Paste image URL"
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full text-center bg-transparent text-xs focus:outline-none text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="w-1/2 py-2 border border-slate-200 dark:border-zinc-700 rounded-lg text-xs font-medium text-slate-600 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="w-1/2 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-lg text-xs font-medium hover:opacity-90 transition-opacity"
                >
                  {editingProduct ? 'Save Changes' : 'Add Item'}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* --- DELETE CONFIRMATION MODAL --- */}
      {deleteCandidateId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 dark:bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 w-full max-w-xs rounded-xl p-4 space-y-3 shadow-lg">
            <div className="flex items-center gap-2.5 text-rose-600 dark:text-rose-400">
              <AlertTriangle className="w-5 h-5 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xs text-slate-900 dark:text-white">Delete Product?</h4>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400">This item will be permanently removed.</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <button 
                onClick={() => setDeleteCandidateId(null)}
                className="w-1/2 py-1.5 border border-slate-200 dark:border-zinc-700 rounded-lg text-xs font-medium text-slate-600 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={confirmDelete}
                className="w-1/2 py-1.5 bg-rose-600 text-white rounded-lg text-xs font-medium hover:bg-rose-700 transition-colors"
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