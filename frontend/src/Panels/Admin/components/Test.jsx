<div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={toggleSidebar}
            aria-label="Toggle sidebar"
          >
            <Menu className="w-6 h-6" />
          </button>

          <h1 className="text-lg font-semibold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 rounded-md bg-gray-700 border border-gray-600 focus:outline-none text-sm"
            />
            <div className="w-8 h-8 rounded-full bg-gray-600" />
          </div>
        </div>