import React from "react";
import Navbar from "../components/Navbar";


const UserSignUp = () => {
  return (
    <div
       className="relative w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/27252001/pexels-photo-27252001.jpeg')",
          }}
    >
       <div className="absolute inset-0 bg-black/40 pointer-events-auto"></div>
      <Navbar
        list={["About", "Features", "Pricing", "Contact"]}
        ButtonText="Login Now"
        link="/UserLogin"
      />
      <div className="hero bg-transparent min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-12 px-6 sm:px-10 lg:px-20">
          <div className="text-center lg:text-left text-blue-950">
            <h1 className="text-5xl font-bold">Register Now</h1>
            <p className="py-6">
              
            </p>
          </div>
          <div className="card bg-gray-900 w-full max-w-sm shadow-2xl mb-12 lg:mb-0">
            <div className="card-body p-11">
              <fieldset className="fieldset">
                <legend className="label text-2xl font-bold text-center mb-6">
                  Sign Up
                </legend>
                <label className="label">Full Name</label>
                <input type="text" className="input" placeholder="Full Name" />
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <label className="label">Confirm Password</label>
                <input type="text" className="input" placeholder="Confirm Password" />
                <button className="btn btn-neutral mt-4">Sign Up</button>
                <div className="divider">OR</div>
                <button className="btn btn-outline">Sign UP with Google</button>
                <a href="">Already Have an Account ? login Now</a>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSignUp;
