import React from "react";
import LoginForm from "./LoginForm";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen bg-[url('/assets/background.png')] bg-contain bg-no-repeat flex items-center justify-center">
      <LoginForm />
    </div>
  );
};

export default LandingPage;
