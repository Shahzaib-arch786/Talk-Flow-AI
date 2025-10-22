import { Search, Bell, Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-900 p-4 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        {/* Mobile Sidebar Toggle (controlled externally) */}
        <button
          className="lg:hidden text-gray-400 hover:text-white"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu className="w-6 h-6" />
        </button>

        <h1 className="text-lg md:text-xl font-semibold text-white">
          Admin Dashboard
        </h1>
      </div>

      {/* Right Section (Desktop) */}
      <div className="hidden sm:flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative w-40 md:w-56">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-700 rounded-lg pl-9 pr-3 py-2 bg-gray-800 text-sm text-gray-200 placeholder-gray-500 w-full focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>

        <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 rounded-full border border-gray-600"
        />
      </div>

      {/* Mobile Icons */}
      <div className="flex items-center gap-3 sm:hidden">
        <Search className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-8 h-8 rounded-full border border-gray-600"
        />
      </div>
    </header>
  );
};

export default Navbar;
