import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SignupForm from "./auth/forms/SignupForm";
import SigninForm from "./auth/forms/SigninForm";
import Home from "./root/pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className=" flex h-screen">
        <Routes>
          {/* publicRoutes */}
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
          {/* privateRoutes */}
          <Route index element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
