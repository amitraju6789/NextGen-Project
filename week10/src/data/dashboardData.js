export const KPI_DATA = [
  { id: 1, title: 'Gross Revenue', value: '₹24,85,420', change: '+18.4%', isPositive: true, subtext: 'vs last month', icon: 'IndianRupee' },
  { id: 2, title: 'Active Subscriptions', value: '3,842', change: '+12.1%', isPositive: true, subtext: '+412 this week', icon: 'Zap' },
  { id: 3, title: 'Avg. Order Value', value: '₹6,468', change: '+4.2%', isPositive: true, subtext: 'higher basket size', icon: 'ShoppingBag' },
  { id: 4, title: 'System Churn Rate', value: '1.18%', change: '-0.4%', isPositive: true, subtext: 'optimal health', icon: 'Activity' },
];
export const REVENUE_CHART_DATA = [
  { month: 'Apr', revenue: 1240000, target: 1100000, orders: 420 },
  { month: 'May', revenue: 1450000, target: 1300000, orders: 510 },
  { month: 'Jun', revenue: 1820000, target: 1600000, orders: 640 },
  { month: 'Jul', revenue: 1680000, target: 1700000, orders: 590 },
  { month: 'Aug', revenue: 2150000, target: 1900000, orders: 780 },
  { month: 'Sep', revenue: 2485420, target: 2200000, orders: 890 },
];
export const CATEGORY_CHART_DATA = [
  { name: 'Audio & ANC', value: 42, color: '#3b82f6' },
  { name: 'Ergonomic Wear', value: 28, color: '#10b981' },
  { name: 'Gaming Gear', value: 18, color: '#f59e0b' },
  { name: 'Lifestyle', value: 12, color: '#8b5cf6' },
];
export const RECENT_ORDERS = [
  { id: 'TXN-9821', customer: 'Amit Kumar Singh', email: 'amit.singh@dev.io', product: 'NexaSound Max ANC', amount: '₹18,999', status: 'Completed', paymentMethod: 'UPI / GPay', date: '09 Oct, 09:12 AM' },
  { id: 'TXN-9822', customer: 'Priya Sharma', email: 'priya.s@techcorp.in', product: 'Quantum Key-85 Wireless', amount: '₹8,999', status: 'Processing', paymentMethod: 'HDFC Credit Card', date: '09 Oct, 08:45 AM' },
  { id: 'TXN-9823', customer: 'Rohan Verma', email: 'rohan.v@designstudio.com', product: 'Aura Leather Travel Bag', amount: '₹11,499', status: 'Completed', date: '08 Oct, 11:30 PM', paymentMethod: 'ICICI NetBanking' },
  { id: 'TXN-9824', customer: 'Sneha Patel', email: 'patel.sneha@startup.co', product: 'PulseFit X Pro Smartwatch', amount: '₹13,999', status: 'Pending', date: '08 Oct, 07:15 PM', paymentMethod: 'Axis Debit Card' },
  { id: 'TXN-9825', customer: 'Vikramaditya Roy', email: 'v.roy@enterprise.com', product: 'CyberDeck Precision Mouse', amount: '₹4,499', status: 'Refunded', date: '08 Oct, 02:20 PM', paymentMethod: 'UPI / Paytm' },
];
export const SYSTEM_LOGS = [
  { id: 1, time: '09:28 AM', event: 'Database backup synchronized to AWS S3 region ap-south-1', type: 'info' },
  { id: 2, time: '09:15 AM', event: 'Razorpay Webhook: Payment TXN-9821 verified (₹18,999)', type: 'success' },
  { id: 3, time: '08:40 AM', event: 'High traffic surge detected on Asia-South edge gateway', type: 'warning' },
  { id: 4, time: '07:10 AM', event: 'Automated SSL cert renewal completed for api.nexaflow.io', type: 'info' },
];
