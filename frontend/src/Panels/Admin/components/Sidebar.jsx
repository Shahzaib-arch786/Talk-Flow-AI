import { useState } from "react";
import {
  Home,
  Users,
  Phone,
  Database,
  Cpu,
  Settings,
  Menu,
  X,
  LifeBuoy,
  LogOut,
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const menu = [
    { name: "Dashboard", icon: Home },
    { name: "Users", icon: Users },
    { name: "Tenants", icon: Database },
    { name: "Calls", icon: Phone },
    { name: "AI Models", icon: Cpu },
    { name: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white z-40 flex flex-col transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="p-5 text-xl font-semibold border-b border-gray-700 flex justify-between items-center">
          TalkFlow AI
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-2">
          {menu.map((item, idx) => (
            <button
              key={idx}
              className="flex items-center gap-3 px-4 py-2 w-full text-left rounded-lg hover:bg-gray-700 transition"
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-700 text-gray-400 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <LifeBuoy className="w-4 h-4" /> Support
          </div>
          <button className="flex items-center gap-2 text-sm w-full justify-center bg-gray-700 hover:bg-gray-600 rounded-lg py-2 transition">
            <LogOut className="w-4 h-4" /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 lg:hidden z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;
