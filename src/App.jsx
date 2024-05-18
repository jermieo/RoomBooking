// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HotelList from "./components/RoomList";
import Navbar from "./components/Navbar";
import BookingForm from "./components/BookingForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <div>
        <Toaster />
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/roomlist" element={<HotelList />} />
          <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
