import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Sidebar from "./SideBar";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">

      <Navbar />

      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <div className="flex pt-16 min-w-0 px-10">
                <Sidebar />
                <div className="flex-1 min-w-0 overflow-hidden">
                  <Home />
                </div>
              </div>
            </ProtectedRoute>
          }
        />

      </Routes>

    </div>
  );
};

export default App;
