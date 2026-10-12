import React, { useState } from 'react';
import { RECENT_ORDERS } from '../data/dashboardData';
export default function OrdersTable({ searchTerm }) {
  const [filterStatus, setFilterStatus] = useState('All');
  const filteredOrders = RECENT_ORDERS.filter((order) => {
    const matchesSearch =
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'All' || order.status === filterStatus;
    return matchesSearch && matchesStatus;
  });
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Pending':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Processing':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'Cancelled':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/20';
    }
  };
  return (
    <div className="bg-slate-950 border border-slate-800 rounded-xl p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
        <div>
          <h3 className="text-base font-semibold text-slate-100">Recent Transactions</h3>
          <p className="text-xs text-slate-400">Live order status and invoice details</p>
        </div>
        <div className="flex items-center gap-2">
          {['All', 'Completed', 'Processing', 'Pending', 'Cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                filterStatus === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-900/50 text-xs uppercase text-slate-400 border-b border-slate-800">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Product</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-slate-500">
                  No matching orders found.
                </td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-900/30 transition-colors">
                  <td className="px-4 py-3 font-mono text-xs text-blue-400">{order.id}</td>
                  <td className="px-4 py-3 font-medium text-slate-200">{order.customer}</td>
                  <td className="px-4 py-3 text-slate-400">{order.product}</td>
                  <td className="px-4 py-3 font-semibold text-slate-100">{order.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getStatusBadge(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">{order.date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
