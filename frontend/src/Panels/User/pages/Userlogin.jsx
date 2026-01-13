

const Userlogin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b1621] to-[#07101a] text-gray-200">

      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <div className="w-6 h-6 bg-blue-600 rounded-sm" />
          TalkFlowAI
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium text-white">
          Help
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 shadow-xl">

          <h1 className="text-3xl font-bold text-white text-center">
            Welcome Back
          </h1>
          <p className="text-center text-gray-400 mt-2 mb-8 text-sm">
            Sign in to manage your AI call assistant.
          </p>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="e.g. name@company.com"
              className="w-full rounded-lg bg-[#0b1621] border border-white/10 px-4 py-3 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full rounded-lg bg-[#0b1621] border border-white/10 px-4 py-3 pr-10 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                👁
              </span>
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm mb-6">
            <label className="flex items-center gap-2 text-gray-400">
              <input type="checkbox" className="rounded border-white/20 bg-transparent" />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2">
            Sign In →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6 text-gray-500 text-xs">
            <div className="flex-1 h-px bg-white/10" />
            OR CONTINUE WITH
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* OAuth */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 border border-white/10 rounded-lg py-2 hover:bg-white/5 flex items-center justify-center gap-2">
              <span className="w-4 h-4 bg-white rounded-sm" />
              Google
            </button>
            <button className="flex-1 border border-white/10 rounded-lg py-2 hover:bg-white/5 flex items-center justify-center gap-2">
              <span className="w-4 h-4 bg-blue-500 rounded-sm" />
              Microsoft
            </button>
          </div>

          {/* Signup */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Create an account
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 pb-6 space-y-2">
        <div className="flex items-center justify-center gap-5 py-4">
          🔒 Secure 256-bit encrypted login
        </div>
        <div>© 2024 VoiceAI Platform Inc. All rights reserved.</div>
      </footer>
    </div>
  );
}
 

export default Userlogin;
