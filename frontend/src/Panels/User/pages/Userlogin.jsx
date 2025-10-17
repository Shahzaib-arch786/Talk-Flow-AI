import React from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

const Userlogin = () => {
  return (
    <div>
      <Navbar
        list={["About", "Features", "Pricing", "Contact"]}
        ButtonText="Register Now"
      />

      <div
        className="hero min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default Userlogin;
