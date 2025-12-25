import React, { useState } from 'react';
import { 
  Search, Bell, Mail, Phone, MessageSquare, Calendar, ChevronRight, 
  Plus, RefreshCcw, ShoppingCart, Menu, X,
  CreditCard, ArrowUpRight, ArrowRightCircle, 
  ChevronDown 
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LabelList
} from 'recharts';

const ASSETS = {
  iphone: "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=200",
  tshirt: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=200",
  perfume: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=200",
  watch: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=200",
  lipstick: "https://images.unsplash.com/photo-1586776977607-310e9c725c37?auto=format&fit=crop&q=80&w=200",
  avatars: [
    "https://i.pravatar.cc/100?u=gabriella",
    "https://i.pravatar.cc/100?u=harris",
    "https://i.pravatar.cc/100?u=lilia",
    "https://i.pravatar.cc/100?u=rehan",
    "https://i.pravatar.cc/100?u=maxim"
  ]
};

// --- DATA ---
const revenueData = [
  { name: 'Jan', value: 300, display: '589.12' }, { name: 'Feb', value: 843, display: '843.20' },
  { name: 'Mar', value: 600, display: '698.80' }, { name: 'Apr', value: 203, display: '203.00' },
  { name: 'May', value: 408, display: '408.01' }, { name: 'Jun', value: 823, display: '823.12' },
  { name: 'Jul', value: 398, display: '398.20' }, { name: 'Aug', value: 683, display: '683.08' },
  { name: 'Sep', value: 190, display: '190.00' }, { name: 'Oct', value: 818, display: '818.00' },
  { name: 'Nov', value: 410, display: '410.12' }, { name: 'Dec', value: 943, display: '943.20' },
];

const statusData = [
  { name: 'Pending', value: 25, color: '#6366f1' },
  { name: 'New', value: 25, color: '#f59e0b' },
  { name: 'Delivered', value: 25, color: '#10b981' },
  { name: 'Dispatched', value: 25, color: '#ec4899' },
];

const tableData = [
  { id: '275936', qty: 'x1', product: 'iPhone 15 pro max', channel: 'ebay', customer: 'Gabriella...', total: '$ 400.00', img: ASSETS.iphone },
  { id: '415368', qty: 'x4', product: 'White Denim Tshit M...', channel: 'walmart', customer: 'Harris Sa...', total: '$ 151.00', img: ASSETS.tshirt },
  { id: '275063', qty: 'x2', product: 'David Beckham class...', channel: 'facebook', customer: 'Lilia Ponce', total: '$ 167.00', img: ASSETS.perfume },
  { id: '274778', qty: 'x3', product: 'Samsung i-20 series sm...', channel: 'amazon', customer: 'Rehan Ch...', total: '$ 262.00', img: ASSETS.watch },
  { id: '638032', qty: 'x5', product: 'Nykaa Red lipstick', channel: 'etsy', customer: 'Maxim Br...', total: '$ 319.00', img: ASSETS.lipstick },
];

const topSoldData = [
  { name: 'iPhone 15 pro max', sells: '156', date: '27 May, 2024', price: '$ 40.00', revenue: '$ 6,240.00', img: ASSETS.iphone },
  { name: 'White Denim Tshit M Size', sells: '139', date: '27 May, 2024', price: '$ 15.00', revenue: '$ 2,085', img: ASSETS.tshirt },
  { name: 'David Beckham classic Blue Perfume', sells: '125', date: '27 May, 2024', price: '$ 16.00', revenue: '$ 1167.00', img: ASSETS.perfume },
  { name: 'Samsung i-20 series smart watch', sells: '167', date: '27 May, 2024', price: '$ 26.00', revenue: '$ 2262.00', img: ASSETS.watch },
  { name: 'Nykaa Red lipstick', sells: '110', date: '27 May, 2024', price: '$ 31.00', revenue: '$ 3319.00', img: ASSETS.lipstick },
];

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-300 font-sans select-none">
      
      {/* MOBILE OVERLAY */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* SIDEBAR */}
      <aside className={`fixed lg:sticky top-0 left-0 z-[70] h-screen w-72 bg-[#020617] border-r border-slate-800 transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-5 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">Q</div>
              <span className="text-white text-xl font-bold italic tracking-tighter">Quotient</span>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400"><X size={24} /></button>
          </div>
          
          <div className="bg-[#0f172a] rounded-xl p-4 border border-slate-800 overflow-y-auto scrollbar-hide flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs">TG</div>
              <div className="leading-tight">
                <h3 className="text-white font-semibold text-[11px]">Truck Grear <span className="text-yellow-500 text-[8px] border border-yellow-500/20 px-1 rounded ml-1">BIZ</span></h3>
                <p className="text-[9px] text-slate-500 truncate">jale@onechanneladmin.com</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {[Mail, Phone, MessageSquare, Calendar].map((Icon, i) => (
                <button key={i} className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 flex justify-center hover:border-indigo-500 transition-colors"><Icon size={14} /></button>
              ))}
            </div>
            <div className="space-y-4">
              <SidebarItem label="Account Name" value="TRUCK GREAR" />
              <SidebarItem label="Email" value="jale@onechanneladmin.com" hasPlus />
              <SidebarItem label="Phone Number" value="+1 344 434 4455" />
              <SidebarItem label="Available Credit" value="$ 806.71" hasRefresh />
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* HEADER */}
        <header className="px-4 lg:px-6 py-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-[#020617]/90 backdrop-blur-md z-50">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-400"><Menu size={24} /></button>
            <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-500">
              <span>CRM</span> <ChevronRight size={12} /> <span className="text-slate-200">Dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-3 lg:gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
              <input className="bg-slate-900 border border-slate-800 rounded-lg py-1.5 pl-9 pr-4 w-48 lg:w-72 text-xs focus:outline-none focus:border-indigo-500" placeholder="Search..." />
            </div>
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-slate-400" />
              <div className="flex items-center gap-2 bg-[#0f172a] border border-slate-800 px-3 py-1 rounded-full">
                <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] text-white">MS</div>
                <p className="hidden sm:block text-[10px] text-white font-medium">Manoj Sharma</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 lg:p-6 space-y-6 lg:space-y-8 overflow-y-auto">
          
          {/* KPI SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <KPICard title="Total Orders" value="123" change="28%" icon={<ShoppingCart size={16}/>} color="indigo" />
            <KPICard title="Total Token" value="123" change="15%" icon={<CreditCard size={16}/>} color="orange" />
            <KPICard title="Revenue" value="$89,235" change="28%" icon={<div className="font-bold text-sm">$</div>} color="pink" />
            <KPICard title="Pending" value="12" change="38%" icon={<RefreshCcw size={16}/>} color="red" />
            <KPICard title="Returns" value="5" change="28%" icon={<RefreshCcw size={16}/>} color="purple" />
          </div>

          {/* MIDDLE SECTION (Charts) */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            <div className="xl:col-span-7 bg-[#0f172a] rounded-2xl border border-slate-800 p-4 lg:p-6 shadow-xl">
              <h3 className="text-white font-bold mb-8">Order Status</h3>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="grid grid-cols-2 gap-4 flex-1 w-full">
                  <StatusItem label="New" value="50" color="bg-orange-500" />
                  <StatusItem label="Delivered" value="123" color="bg-emerald-500" />
                  <StatusItem label="Pending" value="50" color="bg-blue-500" />
                  <StatusItem label="Cancelled" value="50" color="bg-red-500" />
                </div>
                <div className="w-48 h-48 lg:w-56 lg:h-56 relative flex justify-center items-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={statusData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" stroke="none">
                        {statusData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute text-center"><span className="text-3xl font-black text-white">250</span></div>
                </div>
              </div>
            </div>

            <div className="xl:col-span-5 bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-xl">
              <h3 className="text-white font-bold mb-6">Recent Activities</h3>
              <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-800">
                <ActivityRow user="Christian Wood" action="Sent Message to" target="Nikita" time="1 min ago" />
                <ActivityRow user="Nikita Houston" action="Replied" target="Hello" time="1 min ago" isGray />
                <ActivityRow user="Christian Wood" action="Accept Order" target="Ebay" time="1 min ago" />
              </div>
            </div>
          </div>

          {/* TABLES (Orders & Transactions) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TableCard title="Recent Orders" type="order" />
            <TableCard title="Recent Transactions" type="transaction" />
          </div>

          {/* TOP SOLD PRODUCTS SECTION (User's requested part) */}
          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-black text-lg tracking-tight">Top Sold Products</h3>
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-[11px] text-slate-400 font-bold cursor-pointer">
                Jun 2023 <Calendar size={14} />
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[800px] border-collapse">
                <thead className="text-[10px] text-slate-500 uppercase font-black tracking-widest border-b border-slate-800/60">
                  <tr>
                    <th className="pb-5">Products</th>
                    <th className="pb-5">Sells</th>
                    <th className="pb-5">Date</th>
                    <th className="pb-5">Price</th>
                    <th className="pb-5 text-right">Total Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/30">
                  {topSoldData.map((item, i) => (
                    <tr key={i} className="group hover:bg-slate-800/20 transition-all">
                      <td className="py-4 flex items-center gap-5">
                        <div className="w-11 h-11 bg-slate-800 rounded-xl border border-slate-700/40 p-1.5 flex items-center justify-center overflow-hidden">
                          <img src={item.img} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <span className="text-[13px] text-slate-100 font-bold group-hover:text-indigo-400">{item.name}</span>
                      </td>
                      <td className="py-4 text-[13px] text-slate-400 font-bold">{item.sells}</td>
                      <td className="py-4 text-[13px] text-slate-400 font-bold">{item.date}</td>
                      <td className="py-4 text-[13px] text-slate-400 font-bold">{item.price}</td>
                      <td className="py-4 text-[13px] text-slate-100 font-black text-right">{item.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* REVENUE CHART */}
          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-4 lg:p-8 shadow-2xl">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
              <div>
                <h3 className="text-white font-black text-xl mb-2">Revenue</h3>
                <p className="text-3xl text-white font-black">$89,235.89</p>
              </div>
              <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800">
                <button className="bg-indigo-600 text-[10px] px-4 py-2 rounded-md text-white font-bold uppercase tracking-widest">Revenue</button>
                <button className="text-[10px] px-4 py-2 text-slate-500 font-bold uppercase tracking-widest hover:text-slate-300">Orders</button>
              </div>
            </div>
            <div className="h-72 lg:h-96 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" opacity={0.3} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 10}} />
                  <Tooltip contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '10px'}} />
                  <Bar dataKey="value" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

// --- SUB COMPONENTS ---

const SidebarItem = ({ label, value, hasPlus, hasRefresh }) => (
  <div className="group mb-4">
    <p className="text-[8px] text-slate-600 uppercase font-black tracking-widest mb-1">{label}</p>
    <div className="flex justify-between items-center">
      <p className="text-[11px] text-slate-300 font-bold truncate pr-2">{value}</p>
      <div className="flex gap-1 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all">
        {hasPlus && <Plus size={12} className="cursor-pointer" />} 
        {hasRefresh && <RefreshCcw size={12} className="cursor-pointer" />}
      </div>
    </div>
    <div className="h-[1px] w-full bg-slate-800/50 mt-2"></div>
  </div>
);

const KPICard = ({ title, value, change, icon, color }) => (
  <div className="bg-[#0f172a] p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/50 transition-all shadow-lg group">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2.5 rounded-xl bg-${color}-500/10 text-${color}-500 group-hover:bg-indigo-600 group-hover:text-white transition-all`}>{icon}</div>
      <div className="text-emerald-400 text-[10px] font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full flex items-center gap-0.5"><ArrowUpRight size={10} /> {change}</div>
    </div>
    <p className="text-slate-500 text-[9px] uppercase font-bold tracking-widest">{title}</p>
    <h4 className="text-white text-xl font-black mt-1">{value}</h4>
  </div>
);

const StatusItem = ({ label, value, color }) => (
  <div className="flex items-center gap-3 bg-slate-900/40 p-3 rounded-xl border border-slate-800/50">
    <div className={`w-1 h-8 rounded-full ${color}`}></div>
    <div>
      <p className="text-slate-500 text-[9px] uppercase font-black">{label}</p>
      <p className="text-white font-bold text-lg leading-none">{value}</p>
    </div>
  </div>
);

const ActivityRow = ({ user, action, target, time, isGray }) => (
  <div className="flex items-start gap-4 ml-1 relative z-10 group">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0f172a] transition-transform group-hover:scale-110 ${isGray ? 'bg-slate-700' : 'bg-orange-600'}`}>
      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
    </div>
    <div className="flex-1">
      <p className="text-[11px] text-slate-400"><span className="text-indigo-400 font-bold">{user}</span> {action} <span className="text-white font-bold">{target}</span></p>
      <p className="text-slate-600 text-[9px] mt-1 font-bold italic tracking-tighter uppercase">{time}</p>
    </div>
  </div>
);

const TableCard = ({ title, type }) => (
  <div className="bg-[#0f172a] rounded-2xl border border-slate-800 overflow-hidden flex flex-col shadow-xl">
    <div className="p-5">
      <h3 className="text-white font-bold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left min-w-[500px]">
          <thead className="text-[9px] text-slate-500 uppercase font-bold tracking-widest border-b border-slate-800">
            <tr>
              <th className="pb-3">{type === 'order' ? 'ID' : 'TX ID'}</th>
              <th className="pb-3">Product</th>
              <th className="pb-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/40">
            {tableData.map((item, i) => (
              <tr key={i} className="hover:bg-slate-800/20">
                <td className="py-3 text-[11px] text-slate-500">#{item.id}</td>
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <img src={item.img} className="w-8 h-8 rounded-lg object-cover bg-slate-800" alt="" />
                    <span className="text-[11px] text-slate-200 truncate w-32">{item.product}</span>
                  </div>
                </td>
                <td className="py-3 text-[11px] text-white font-bold text-right">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="p-4 border-t border-slate-800 bg-slate-900/10 text-center">
      <button className="text-[10px] text-indigo-400 font-bold uppercase flex items-center gap-2 mx-auto hover:text-indigo-200">
        View All <ArrowRightCircle size={14} />
      </button>
    </div>
  </div>
);

export default Dashboard;