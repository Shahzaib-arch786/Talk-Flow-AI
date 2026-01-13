
const UserSignUp = () => {
  return (
     <div className="min-h-screen bg-gradient-to-b from-[#0b1621] to-[#07101a] text-gray-200 flex flex-col">

      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-white font-semibold text-lg">
          <div className="w-6 h-6 border-2 border-blue-500 rounded-full" />
          TalkFlowAI
        </div>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-400 hidden sm:block">
            Already have an account?
          </span>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white font-medium">
            Sign In
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-6 sm:px-8">
        <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 shadow-xl">

          <h1 className="text-3xl font-bold text-white text-center">
            Empower your communication with AI.
          </h1>
          <p className="text-center text-gray-400 mt-3 mb-8 text-sm">
            Join hundreds of businesses automating their voice operations.
          </p>

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              className="w-full bg-[#0b1621] border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Business Email */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Business Email</label>
            <input
              type="email"
              placeholder="name@company.com"
              className="w-full bg-[#0b1621] border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label className="block text-sm mb-1">Company Name</label>
            <input
              type="text"
              placeholder="Acme Corp"
              className="w-full bg-[#0b1621] border border-white/10 rounded-lg px-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type="password"
                placeholder="Min. 8 characters"
                className="w-full bg-[#0b1621] border border-white/10 rounded-lg px-4 py-3 pr-10 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                👁
              </span>
            </div>
          </div>

          {/* Password Strength */}
          <div className="mb-4">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Password strength</span>
              <span className="text-blue-500">Strong</span>
            </div>
            <div className="flex gap-1">
              <div className="h-1 flex-1 bg-blue-600 rounded" />
              <div className="h-1 flex-1 bg-blue-600 rounded" />
              <div className="h-1 flex-1 bg-blue-600 rounded" />
              <div className="h-1 flex-1 bg-white/10 rounded" />
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-start gap-2 text-xs text-gray-400 mb-6">
            <input type="checkbox" className="mt-1 rounded border-white/20 bg-transparent" />
            <span>
              By creating an account, I agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>.
            </span>
          </label>

          {/* Create Account */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold text-white">
            Create Account
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6 text-gray-500 text-xs">
            <div className="flex-1 h-px bg-white/10" />
            OR SIGN UP WITH
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* OAuth */}
          <div className="flex gap-3">
            <button className="flex-1 border border-white/10 rounded-lg py-2 hover:bg-white/5 flex items-center justify-center gap-2 text-sm">
              <span className="w-4 h-4 bg-white rounded-sm" />
              Google
            </button>
            <button className="flex-1 border border-white/10 rounded-lg py-2 hover:bg-white/5 flex items-center justify-center gap-2 text-sm">
              <span className="w-4 h-4 bg-blue-500 rounded-sm" />
              SSO
            </button>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            No credit card required for 14-day trial.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-500 py-6">
        © 2024 VoiceAI Inc. All rights reserved.
      </footer>
    </div>
  );
};

export default UserSignUp;
