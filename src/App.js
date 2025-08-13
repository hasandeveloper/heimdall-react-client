import react from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/Authentication/SignUp";
import SignIn from "./Components/Authentication/SignIn";
import Home from "./Components/Home";

function App() {
  return (
     <Router>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/sign_in" element={<SignIn />} />
       <Route path="/sign_up" element={<SignUp />} />
     </Routes>
   </Router>
  );
}

export default App;
