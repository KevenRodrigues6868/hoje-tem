
import { LogOut, LayoutDashboard, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Sidebar = ({ user }: { user: any }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold">Event Manager</h2>
      </div>
      
      <nav className="flex-1">
        <Link 
          to="/dashboard" 
          className={`flex items-center gap-2 p-4 hover:bg-gray-700 ${
            location.pathname === '/dashboard' ? 'bg-gray-700' : ''
          }`}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </Link>
        <Link 
          to="/event-sets" 
          className={`flex items-center gap-2 p-4 hover:bg-gray-700 ${
            location.pathname === '/event-sets' ? 'bg-gray-700' : ''
          }`}
        >
          <Calendar size={20} />
          <span>Event Sets</span>
        </Link>
      </nav>
      
      <div className="p-4 border-t border-gray-700">
        <div className="mb-4">
          <p className="font-medium">{user.displayName}</p>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>
        <button
          onClick={() => window.auth.signOut()}
          className="flex items-center gap-2 text-red-400 hover:text-red-300"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};
