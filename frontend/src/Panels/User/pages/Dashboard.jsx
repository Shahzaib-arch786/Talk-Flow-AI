import React from "react";
import { Phone, Mic, FileText, Headset, BarChart, Shield } from "lucide-react";
import BlurText from "../components/BlurText";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import PriceingCards from "../components/PriceingCards";
import Footer from "../components/Footer";
import Hyperspeed from "../components/HyperSpeed";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Dashboard = () => {
  return (
    <div>
      <Navbar
        list={["About", "Features", "Pricing", "Contact"]}
        ButtonText="Get Started"
      />
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Hyperspeed Background */}
        {/* <div className="absolute top-1/4 left-1/4 w-full h-full -translate-x-1/2 -translate-y-1/2">
          <Hyperspeed
            className="w-full h-full"
            effectOptions={{
              onSpeedUp: () => {},
              onSlowDown: () => {},
              distortion: "turbulentDistortion",
              length: 400,
              roadWidth: 10,
              islandWidth: 2,
              lanesPerRoad: 4,
              fov: 90,
              fovSpeedUp: 150,
              speedUp: 2,
              carLightsFade: 0.4,
              totalSideLightSticks: 20,
              lightPairsPerRoadWay: 40,
              shoulderLinesWidthPercentage: 0.05,
              brokenLinesWidthPercentage: 0.1,
              brokenLinesLengthPercentage: 0.5,
              lightStickWidth: [0.12, 0.5],
              lightStickHeight: [1.3, 1.7],
              movingAwaySpeed: [60, 80],
              movingCloserSpeed: [-120, -160],
              carLightsLength: [400 * 0.03, 400 * 0.2],
              carLightsRadius: [0.05, 0.14],
              carWidthPercentage: [0.3, 0.5],
              carShiftX: [-0.8, 0.8],
              carFloorSeparation: [0, 5],
              colors: {
                roadColor: 0x080808,
                islandColor: 0x0a0a0a,
                background: 0x000000,
                shoulderLines: 0xffffff,
                brokenLines: 0xffffff,
                leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
                rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
                sticks: 0x03b3c3,
              },
            }}
          />
        </div> */}
        
        {/*temporary background image will remove it and apply the hyperspeed effect */}
        <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3791256/pexels-photo-3791256.jpeg')",
          }}
        >
        {/* Overlay (allows pointer events to pass) */}
        <div className="absolute inset-0 bg-black/20 pointer-events-auto"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-10 text-center">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <BlurText
              text="TalkFlow AI Call Assistant"
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
              delay={150}
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              animateBy="words"
            />

            <BlurText
              text="Revolutionize Your Communication with AI-Powered Call Management and Summaries"
              className="text-sm sm:text-base md:text-lg"
              delay={150}
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              animateBy="words"
            />

            <button className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm sm:text-base animate-fade-up delay-200">
              Get Started
            </button>
          </div>
        </div>
        </div>
      </div>

      {/* About Section */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-900 text-white items-center px-6 sm:px-10 lg:px-20 py-16">
        {/* Left Section (Text) */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">About</h2>

          <p className="text-sm sm:text-base leading-relaxed">
            Our AI Call Assistant is designed to streamline your communication.
            It intelligently manages incoming calls, provides summaries, and
            helps you stay on top of your conversations. Whether you're a small
            business or an individual, our assistant adapts to your needs,
            ensuring you never miss an important call.
          </p>

          <p className="text-sm sm:text-base leading-relaxed">
            Experience the future of communication with TalkFlow AI Call
            Assistant.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <button className="btn bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Learn More
            </button>
            <button className="btn btn-outline border-white hover:bg-white hover:text-gray-900 px-6 py-2 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex justify-center lg:justify-end mt-10 lg:mt-0">
          <img
            src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
            alt="About TalkFlow AI"
            className="w-full max-w-md sm:max-w-lg rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800 text-white py-16 px-6 sm:px-10 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Features
        </h2>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Cards
            icon={<Phone className="text-blue-500 mb-4" />}
            title="Smart Call Management"
            description="Intelligently routes and manages incoming calls, ensuring important calls are never missed."
          />
          <Cards
            icon={<Mic className="text-blue-500 mb-4" />}
            title="Real-time Transcription"
            description="Provides real-time summaries of calls, allowing you to quickly catch up on conversations."
          />
          <Cards
            icon={<FileText className="text-blue-500 mb-4" />}
            title="Customizable Settings"
            description="Customize settings to fit your specific needs, from call routing to summary preferences."
          />
          <Cards
            icon={<Headset className="text-blue-500 mb-4" />}
            title="24/7 Support"
            description="Access to our support team at any time, ensuring you have help whenever you need it."
          />
          <Cards
            icon={<BarChart className="text-blue-500 mb-4" />}
            title="Detailed Analytics"
            description="Gain insights into your call patterns and performance with comprehensive analytics."
          />
          <Cards
            icon={<Shield className="text-blue-500 mb-4" />}
            title="Secure and Reliable"
            description="Built with security in mind, ensuring your data and calls are protected at all times."
          />
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-gray-900 text-white py-14 px-8 sm:px-10 lg:px-20">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Pricing
        </h2>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <PriceingCards
            plan="Basic Plan"
            price="$29/month"
            features={[
              "Call Management",
              "Real-time Transcription",
              "Basic Support",
              "AI-driven image enhancements",
            ]}
            nfeatures={["Advance Call Routing", "Detailed Analytics"]}
            buttonText="Choose Plan"
          />

          <PriceingCards
            famous="Most Popular"
            plan="Pro Plan"
            price="$49/month"
            features={[
              "Advanced Call Management",
              "Real-time Transcription",
              "Priority Support",
              "Detailed Analytics",
            ]}
            nfeatures={["Custom Solutions", "24/7 Support"]}
            buttonText="Choose Plan"
          />

          <PriceingCards
            plan="Enterprise Plan"
            price="Customized"
            features={[
              "All Pro Features",
              "Custom Solutions",
              "Dedicated Support",
              "24/7 Support",
            ]}
            nfeatures={["N/A"]}
            buttonText="Choose Plan"
          />
        </div>
      </div>

      {/*contact Section */}
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-10 bg-gray-700 text-white items-center px-6 sm:px-10 lg:px-20 py-16">
        {/* Left Section: Contact Form */}
        <div className="bg-gray-800 p-8 sm:p-10 rounded-2xl shadow-lg text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Contact Us</h2>
          <form className="space-y-4 max-w-md mx-auto">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full bg-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full bg-gray-700 text-white placeholder-gray-400"
                rows="4"
              ></textarea>
            </div>
            <button className="btn bg-blue-800 hover:bg-blue-700 w-full text-white font-semibold">
              Send Message
            </button>
          </form>

          <p className="mt-6 text-gray-300 text-sm sm:text-base">
            Have questions or need support? Reach out to our team!
          </p>
        </div>

        {/* Right Section: Image and Text */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0">
          <img
            src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg"
            alt="Contact TalkFlow AI"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover"
          />
          <p className="mt-6 text-gray-300 text-center lg:text-left text-sm sm:text-base leading-relaxed">
            Our team is here to assist you with any inquiries or support you may
            need.
            <br /> Feel free to reach out!
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Dashboard;
