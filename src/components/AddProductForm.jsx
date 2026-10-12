import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
export default function AddProductForm() {
  const [formData, setFormData] = useState({ title: '', category: 'Audio', price: '', stock: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Product "${formData.title}" added successfully!`);
    setFormData({ title: '', category: 'Audio', price: '', stock: '' });
  };
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <PlusCircle className="w-5 h-5 text-blue-400" />
        <h3 className="text-base font-semibold text-slate-100">Quick Add Product</h3>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-xs text-slate-400 mb-1">Product Title</label>
          <input
            type="text"
            required
            placeholder="e.g. Wireless Earbuds"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"
          >
            <option value="Audio">Audio</option>
            <option value="Peripherals">Peripherals</option>
            <option value="Fashion">Fashion</option>
            <option value="Wearables">Wearables</option>
          </select>
        </div>
        <div>
          <label className="block text-xs text-slate-400 mb-1">Price (₹)</label>
          <input
            type="number"
            required
            placeholder="14999"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors shadow-lg shadow-blue-600/20"
          >
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
}
