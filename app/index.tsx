import React, { useState } from "react";
import Login from "@/app/screen/Login";
import Root from "@/components/RootStack";

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <>
      <Root />
    </>
  );
}