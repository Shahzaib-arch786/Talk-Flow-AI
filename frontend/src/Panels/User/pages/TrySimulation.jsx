import React from "react";

const TryCallAssistant = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-900 shadow-sm">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-semibold text-gray-200">
            Call Assistant
          </span>
        </div>
        <ul className="hidden md:flex space-x-6 text-gray-200 font-medium">
          <li>
            <a href="#" className="hover:text-blue-600">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Analytics
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Playbooks
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600">
              Settings
            </a>
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge bg-blue-400">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-3">Try out Call Assistant</h1>
        <p className="text-gray-200 mb-8">
          Experience the power of Call Assistant with a free trial. Simply enter
          your details below to get started and explore how our AI can transform
          your customer interactions.
        </p>

        {/* Form Section */}
        <form className="space-y-5 mb-10">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </form>

        {/* Simulated Call Interface */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2">
            Simulated Call Interface
          </h2>
          <p className="text-gray-200 mb-4">
            Interact with our AI Call Assistant in real-time. Speak into your
            microphone and see how the assistant responds.
          </p>

          <div className="border-2 border-dashed border-gray-300 rounded-lg py-16 text-center">
            <p className="text-gray-200 font-medium mb-4">
              Click to Start Call
            </p>
            <p className="text-gray-200 text-sm mb-6">
              Initiate a simulated call to experience the AI Call Assistant's
              capabilities.
            </p>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-5 rounded-lg transition">
              Start Call
            </button>
          </div>
        </section>

        {/* Suggested Prompts */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Suggested Prompts</h2>
          <p className="text-gray-200 mb-4">
            Try these prompts to explore the AI Call Assistant’s capabilities:
          </p>
          <ul className="space-y-2 text-gray-200">
            <li>• Can you summarize my last customer interaction?</li>
            <li>• What were the key issues discussed in the previous call?</li>
            <li>
              • How can I improve customer satisfaction based on recent
              feedback?
            </li>
          </ul>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
            Start Free Trial
          </button>
        </section>
      </main>
    </div>
  );
};

export default TryCallAssistant;
