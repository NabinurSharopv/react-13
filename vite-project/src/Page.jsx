import React from 'react';
import { 
  Search, Bell, Mail, Phone, MessageSquare, Calendar, ChevronRight, 
  Plus, RefreshCcw, ShoppingCart, 
  CreditCard, ArrowUpRight, Clock, ArrowRightCircle, 
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

// --- MA'LUMOTLAR (DATA) ---
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
  { name: 'iPhone 15 pro max', sells: '168', date: '27 May, 2024', price: '$ 20.00', revenue: '$ 2402.00', img: ASSETS.iphone },
  { name: 'White Denim Tshit M...', sells: '165', date: '27 May, 2024', price: '$ 25.00', revenue: '$ 2552.00', img: ASSETS.tshirt },
];

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#020617] text-slate-300 font-sans select-none">
      
      {/* SIDEBAR */}
      <aside className="w-72 border-r border-slate-800 flex flex-col h-screen sticky top-0 bg-[#020617] shrink-0">
        <div className="p-5 border-b border-slate-800">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/20">Q</div>
            <span className="text-white text-xl font-bold italic tracking-tighter">Quotient</span>
          </div>
          <div className="bg-[#0f172a] rounded-xl p-4 border border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-inner">TG</div>
                <div className="leading-tight">
                  <h3 className="text-white font-semibold text-[11px]">Truck Grear <span className="bg-yellow-500/20 text-yellow-500 text-[8px] px-1 rounded ml-1">BUSINESS</span></h3>
                  <p className="text-[9px] text-slate-500">jale@onechanneladmin.com</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {[Mail, Phone, MessageSquare, Calendar].map((Icon, i) => (
                <button key={i} className="p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-indigo-500 text-slate-400 flex justify-center transition-all"><Icon size={14} /></button>
              ))}
            </div>
            <div className="space-y-4 pt-2 h-105 overflow-y-auto scrollbar-hide pr-1">
              <SidebarItem label="Account Name" value="TRUCK GREAR" />
              <SidebarItem label="Email" value="jale@onechanneladmin.com" hasPlus />
              <SidebarItem label="Phone Number" value="+1 344 434 4455" hasPlus />
              <SidebarItem label="Industry" value="Accounting" />
              <SidebarItem label="Website" value="WWW.TRUCKGEAR.COM" />
              <SidebarItem label="No of Employees" value="10" />
              <SidebarItem label="Credit Limit" value="$ 5000" hasPlus />
              <SidebarItem label="Available Credit" value="$ 806.71" hasRefresh />
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col bg-[#020617] min-w-0">
        <header className="px-6 py-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-[#020617]/90 backdrop-blur-sm z-50">
          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
            <span>CRM</span> <ChevronRight size={12} /> <span>Account</span> <ChevronRight size={12} /> <span className="text-slate-200">Account Details</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
              <input className="bg-slate-900 border border-slate-800 rounded-lg py-1.5 pl-9 pr-4 w-72 text-xs focus:outline-none focus:border-indigo-500 transition-all shadow-inner" placeholder="Search..." />
            </div>
            <div className="flex items-center gap-3">
              <Bell size={18} className="text-slate-400 cursor-pointer hover:text-white transition-colors" />
              <div className="flex items-center gap-2 bg-[#0f172a] border border-slate-800 px-3 py-1 rounded-full shadow-lg">
                <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">MS</div>
                <div className="text-left">
                  <p className="text-[10px] text-white font-medium leading-none">Manoj Sharma</p>
                  <p className="text-[8px] text-indigo-400 font-bold uppercase tracking-wider mt-0.5">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 space-y-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-px">
            <div className="flex gap-8 overflow-x-auto scrollbar-hide">
              {['Dashboard', 'Orders', 'Address', 'Notes', 'Tasks', 'Contacts', 'Credit History'].map((tab, i) => (
                <button key={tab} className={`text-[11px] font-bold pb-3 relative transition-all uppercase tracking-tight ${i === 0 ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-slate-500'}`}>{tab}</button>
              ))}
            </div>
            <div className="flex gap-1 bg-[#0f172a] p-1 rounded-lg border border-slate-800 mb-2 shadow-inner">
              {['Day', 'Week', 'Year'].map((t, i) => (
                <button key={t} className={`px-4 py-1 text-[10px] font-bold rounded-md transition-all ${i === 0 ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}>{t}</button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <KPICard title="Total Orders" value="123" change="28%" icon={<ShoppingCart size={16}/>} color="indigo" />
            <KPICard title="Total Token" value="123" change="15%" icon={<CreditCard size={16}/>} color="orange" />
            <KPICard title="Total Revenue" value="123" change="28%" icon={<div className="font-bold text-sm">$</div>} color="pink" />
            <KPICard title="Pending Orders" value="$1234.99" change="38%" icon={<RefreshCcw size={16}/>} color="red" />
            <KPICard title="Pending Returns" value="$1234.99" change="28%" icon={<RefreshCcw size={16}/>} color="purple" />
          </div>

          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-7 bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-white font-bold text-base tracking-tight">Order Status</h3>
                <div className="flex gap-2 text-slate-400">
                  <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] cursor-pointer hover:bg-slate-800 transition-all">All Categories <ChevronDown size={12} /></div>
                  <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] cursor-pointer hover:bg-slate-800 transition-all">2023 <Calendar size={12} /></div>
                </div>
              </div>
              <div className="flex items-center gap-10">
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <StatusItem label="All" value="50" color="bg-indigo-600" />
                  <StatusItem label="New" value="50" color="bg-orange-500" />
                  <StatusItem label="Pending" value="50" color="bg-blue-500" />
                  <StatusItem label="Dispatched" value="50" color="bg-pink-500" />
                  <StatusItem label="Delivered" value="123" color="bg-emerald-500" />
                  <StatusItem label="Cancelled" value="50" color="bg-red-500" />
                </div>
                <div className="w-56 h-56 relative flex justify-center items-center">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={statusData} innerRadius={70} outerRadius={90} paddingAngle={5} dataKey="value" stroke="none">
                        {statusData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-4xl font-black text-white tracking-tighter">250</span>
                  </div>
                  <div className="absolute top-10 right-10 bg-[#020617] border border-slate-800 px-1 rounded text-[10px] text-white font-bold">20%</div>
                  <div className="absolute bottom-10 right-10 bg-[#020617] border border-slate-800 px-1 rounded text-[10px] text-white font-bold">20%</div>
                </div>
              </div>
            </div>

            <div className="col-span-5 bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-bold text-base">Recent Activities</h3>
                <div className="flex bg-slate-900 p-1 rounded-lg border border-slate-800 shadow-inner">
                  <button className="bg-indigo-600 text-[10px] px-4 py-1.5 rounded-md text-white font-black uppercase">Message</button>
                  <button className="text-[10px] px-4 py-1.5 text-slate-500 font-black uppercase hover:text-slate-300">Email</button>
                </div>
              </div>
              <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-800/80">
                <p className="text-[10px] text-slate-600 font-black uppercase ml-8 mb-2 tracking-[0.2em]">Today</p>
                <ActivityRow user="Christian Wood" action="Sent Message to" target="Nikita Houston" time="1 min ago" />
                <ActivityRow user="Nikita Houston" action="Replay your message" target="Hello" time="1 min ago" isGray />
                <ActivityRow user="Christian Wood" action="Accept Order from" target="Ebay" time="1 min ago" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <TableCard title="Recent Orders" type="order" />
            <TableCard title="Recent Transactions" type="transaction" />
          </div>

          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-6 shadow-2xl overflow-hidden">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-white font-black text-lg tracking-tight">Top Sold Products</h3>
              <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg text-[11px] text-slate-400 font-bold cursor-pointer hover:bg-slate-800 transition-all shadow-md">Jun 2023 <Calendar size={14} /></div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[800px] border-collapse">
                <thead className="text-[10px] text-slate-500 uppercase font-black tracking-[0.1em] border-b border-slate-800/60">
                  <tr>
                    <th className="pb-5 font-bold">Products</th>
                    <th className="pb-5 font-bold">Sells</th>
                    <th className="pb-5 font-bold">Date</th>
                    <th className="pb-5 font-bold">Price</th>
                    <th className="pb-5 font-bold text-right">Total Revenue</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/30">
                  {topSoldData.map((item, i) => (
                    <tr key={i} className="group hover:bg-slate-800/20 transition-all">
                      <td className="py-4 flex items-center gap-5">
                        <div className="w-11 h-11 bg-[#1e293b] rounded-xl border border-slate-700/40 p-1.5 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform">
                          <img src={item.img} alt="" className="max-w-full max-h-full object-contain" />
                        </div>
                        <span className="text-[13px] text-slate-100 font-bold group-hover:text-indigo-400 transition-colors">{item.name}</span>
                      </td>
                      <td className="py-4 text-[13px] text-slate-400 font-bold">{item.sells}</td>
                      <td className="py-4 text-[13px] text-slate-400 font-bold">{item.date}</td>
                      <td className="py-4 text-[13px] text-slate-400 font-bold">{item.price}</td>
                      <td className="py-4 text-[13px] text-slate-100 font-black text-right tracking-tight">{item.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-[#0f172a] rounded-2xl border border-slate-800 p-8 mb-10 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
              <div className="flex bg-[#0f172a] p-1.5 rounded-xl border border-slate-800 shadow-inner">
                <button className="bg-indigo-600 text-[11px] px-6 py-2 rounded-lg text-white font-black shadow-lg shadow-indigo-600/20 uppercase tracking-widest">Revenue</button>
                <button className="text-[11px] px-6 py-2 text-indigo-400 font-black uppercase tracking-widest hover:text-indigo-200 transition-colors">Orders</button>
                <button className="text-[11px] px-6 py-2 text-indigo-400 font-black uppercase tracking-widest hover:text-indigo-200 transition-colors">Customers</button>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-[11px] font-bold cursor-pointer">All Categories <ChevronDown size={14} /></div>
                <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-[11px] font-bold cursor-pointer">Jun 2023 <Calendar size={14} /></div>
              </div>
            </div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-white font-black text-xl tracking-tight">Revenue</h3>
              <p className="text-[12px] text-slate-500 font-bold italic">Total Revenue: <span className="text-white font-black text-3xl ml-3 tracking-tighter leading-none">$89,235.89</span></p>
            </div>
            <div className="h-96 w-full mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData} margin={{top: 30}}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" opacity={0.3} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: 700}} dy={15} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 11, fontWeight: 700}} />
                  <Tooltip cursor={{fill: 'rgba(255,255,255,0.015)'}} contentStyle={{backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', color: '#fff'}} />
                  <Bar dataKey="value" fill="#6366f1" radius={[6, 6, 0, 0]} barSize={45}>
                    <LabelList dataKey="display" position="top" style={{fill: '#64748b', fontSize: '10px', fontWeight: 900}} offset={15} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <p className="text-center text-[11px] text-slate-700 font-black mt-10 tracking-[0.5em] uppercase opacity-40 italic">● 2023 ●</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


const SidebarItem = ({ label, value, hasPlus, hasRefresh }) => (
  <div className="mb-4 group">
    <p className="text-[9px] text-slate-600 uppercase font-black tracking-[0.15em] mb-1">{label}</p>
    <div className="flex justify-between items-center">
      <p className="text-[12px] text-slate-300 font-bold truncate leading-snug group-hover:text-white transition-colors">{value}</p>
      <div className="flex gap-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0 -translate-x-2">
        {hasPlus && <Plus size={14} className="cursor-pointer hover:scale-125" />} {hasRefresh && <RefreshCcw size={14} className="cursor-pointer hover:rotate-180 transition-all duration-500" />}
      </div>
    </div>
    <div className="h-[1px] w-full bg-slate-800/40 mt-2.5 shadow-sm"></div>
  </div>
);

const KPICard = ({ title, value, change, icon, color }) => (
  <div className="bg-[#0f172a] p-5 rounded-2xl border border-slate-800 relative group overflow-hidden hover:border-indigo-500/50 transition-all duration-300 shadow-lg">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-2.5 rounded-xl bg-${color}-500/10 text-${color}-500 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md`}>{icon}</div>
      <div className="text-emerald-400 text-[11px] font-black bg-emerald-500/10 px-2.5 py-0.5 rounded-full flex items-center gap-0.5 border border-emerald-500/20 shadow-sm"><ArrowUpRight size={10} strokeWidth={3} /> {change}</div>
    </div>
    <p className="text-slate-500 text-[10px] mb-1.5 font-black uppercase tracking-widest">{title}</p>
    <h4 className="text-white text-2xl font-black tracking-tighter">{value}</h4>
    <p className="text-[10px] text-slate-600 mt-2.5 italic font-bold opacity-60">From The Last Month</p>
    <div className={`absolute -bottom-4 -right-4 w-16 h-16 bg-${color}-500/5 rounded-full group-hover:scale-150 transition-all duration-500`}></div>
  </div>
);

const StatusItem = ({ label, value, color }) => (
  <div className="flex items-center gap-4 bg-slate-900/50 p-3.5 rounded-2xl border border-slate-800/60 hover:bg-slate-900/80 transition-all shadow-md group">
    <div className={`w-1.5 h-10 rounded-full ${color} shadow-lg shadow-current group-hover:scale-y-110 transition-transform`}></div>
    <div><p className="text-slate-500 text-[10px] uppercase font-black tracking-widest leading-none mb-1.5">{label}</p><p className="text-white font-black text-xl leading-none tracking-tight">{value}</p></div>
  </div>
);

const ActivityRow = ({ user, action, target, time, isGray }) => (
  <div className="flex items-start gap-4 relative z-10 ml-1 group">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0f172a] shadow-xl transition-transform group-hover:scale-110 ${isGray ? 'bg-slate-700' : 'bg-orange-600 shadow-orange-600/20'}`}><div className="w-1.5 h-1.5 rounded-full bg-white opacity-90 shadow-sm"></div></div>
    <div className="flex-1 -mt-1">
      <p className="text-[12px] leading-tight"><span className="text-indigo-400 font-black hover:text-indigo-300 cursor-pointer">{user}</span> <span className="text-slate-500 font-bold tracking-tight">{action}</span> <span className="text-white font-black">{target}</span></p>
      <p className="text-slate-600 text-[10px] mt-1 font-black uppercase tracking-tighter opacity-80 italic">● {time}</p>
    </div>
  </div>
);

const TableCard = ({ title, type }) => (
  <div className="bg-[#0b1120] rounded-2xl border border-slate-800/60 flex flex-col h-[450px] shadow-2xl overflow-hidden group">
    <div className="p-6 flex-1 overflow-hidden">
      <h3 className="text-white font-black text-lg mb-6 tracking-tight group-hover:text-indigo-400 transition-colors">{title}</h3>
      <table className="w-full text-left border-collapse">
        <thead className="text-[10px] text-slate-500 uppercase font-black tracking-[0.15em] border-b border-slate-800/80">
          <tr>
            <th className="pb-4 font-bold">{type === 'order' ? 'ORDER ID' : 'TRANSACTION ID'}</th>
            <th className="pb-4 font-bold">PRODUCTS</th>
            <th className="pb-4 font-bold">CHANNEL</th>
            <th className="pb-4 font-bold">CUSTOMER</th>
            <th className="pb-4 font-bold text-right">TOTAL</th>
          </tr>
        </thead>
        <tbody className="before:block before:h-3">
          {tableData.map((item, i) => (
            <tr key={i} className="group border-b border-slate-800/20 last:border-0 hover:bg-slate-800/10 transition-all">
              <td className="py-3 text-[12px] text-slate-400 font-black">{type === 'order' ? item.id : `#123-456-7890`}</td>
              <td className="py-3">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-slate-500 font-black min-w-[20px]">{item.qty}</span>
                  <div className="w-10 h-10 bg-slate-800/40 rounded-xl flex items-center justify-center border border-slate-700/50 overflow-hidden shadow-inner p-1 group-hover:scale-105 transition-transform">
                    <img src={item.img} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[12px] text-slate-100 font-bold truncate w-32 tracking-tight group-hover:text-white transition-colors">{item.product}</span>
                </div>
              </td>
              <td className="py-3"><ChannelBadge channel={item.channel} /></td>
              <td className="py-3">
                <div className="flex items-center gap-2.5">
                   <div className="w-7 h-7 rounded-full bg-slate-700 border border-slate-600 overflow-hidden shadow-md group-hover:border-indigo-500 transition-colors">
                      <img src={ASSETS.avatars[i]} alt="" className="w-full h-full object-cover opacity-90" />
                   </div>
                   <span className="text-[12px] text-slate-400 font-bold truncate w-20">{item.customer}</span>
                </div>
              </td>
              <td className="py-3 text-[13px] text-slate-100 font-black text-right tracking-tight">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="p-5 flex flex-col items-center gap-4 bg-[#0b1120] rounded-b-xl border-t border-slate-800/40 mt-auto shadow-inner">
        <button className="flex items-center gap-2.5 text-[11px] text-indigo-400 font-black hover:text-indigo-200 transition-all uppercase tracking-[0.2em] shadow-sm">
            View 256 more {type}s <ArrowRightCircle size={16} className="fill-indigo-600 text-[#020617] group-hover:rotate-45 transition-transform duration-300" />
        </button>
        <div className="w-full max-w-[220px] h-[4px] bg-slate-800 rounded-full relative overflow-hidden shadow-inner"><div className="absolute left-0 top-0 h-full w-1/4 bg-slate-500 rounded-full shadow-lg"></div></div>
    </div>
  </div>
);

const ChannelBadge = ({ channel }) => {
  const styles = {
    ebay: (
      <div className="flex items-center gap-1 bg-[#1a2133] border border-slate-700/50 px-2.5 py-1 rounded-lg shadow-sm">
        <span className="text-[11px] font-black tracking-tighter"><span className="text-[#e53238]">e</span><span className="text-[#0064d2]">b</span><span className="text-[#f5af02]">a</span><span className="text-[#86b817]">y</span></span>
      </div>
    ),
    walmart: (
      <div className="flex items-center gap-1 bg-[#152445] border border-slate-700/50 px-2.5 py-1 rounded-lg shadow-sm">
        <span className="text-[11px] text-[#0071dc] font-black italic tracking-tighter leading-none">Walmart</span><span className="text-[#ffc220] text-[12px] font-bold">✴︎</span>
      </div>
    ),
    facebook: (
      <div className="flex items-center gap-1 bg-[#10274d] border border-slate-700/50 px-2.5 py-1 rounded-lg shadow-sm">
        <span className="text-[10px] text-[#1877f2] font-black lowercase tracking-tighter leading-none">facebook</span>
      </div>
    ),
    amazon: (
      <div className="flex flex-col items-center justify-center bg-[#1e2533] border border-slate-800/50 px-2.5 py-1 rounded-lg shadow-sm">
        <span className="text-[11px] text-white font-black leading-none tracking-tight">amazon</span>
        <div className="w-full h-1 border-b-[2px] border-[#ff9900] rounded-[100%] mt-px"></div>
      </div>
    ),
    etsy: (
      <div className="flex items-center gap-1 bg-[#2d1e1a] border border-slate-700/50 px-2.5 py-1 rounded-lg shadow-sm">
        <span className="text-[11px] text-[#f45800] font-serif font-black italic tracking-wider leading-none">Etsy</span>
      </div>
    ),
  };
  return styles[channel] || styles.ebay;
};

export default Dashboard;