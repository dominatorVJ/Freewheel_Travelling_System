import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Footer } from "./components/Footer";
import { Checkout } from "./components/Checkout";
import { FlightBlog } from "./components/TravelBlogs/FlightBlog";
import { TrainBlog } from "./components/TravelBlogs/TrainBlog";
import { HotelBlog } from "./components/TravelBlogs/HotelBlog";
import { Forgotpassword } from "./components/Forgotpassword";
import { Resetpassword } from "./components/Resetpassword";
import { Travelhistory } from "./components/Travelhistory";
import { Flightsearch } from "./components/TravelBlogs/Flightsearch";
import TicketState from "./components/TicketState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div>
      <TicketState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="" element={<FlightBlog />} />
              <Route path="flights" element={<FlightBlog />} />
              <Route path="trains" element={<TrainBlog />} />
              <Route path="hotels" element={<HotelBlog />} />
            </Route>
            <Route exact path="/checkout" element={<Checkout />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
            <Route exact path="/signup" element={<Signup />}></Route>
            <Route exact path="/forgotpassword" element={<Forgotpassword />}></Route>
            <Route path="/resetpassword/:token" element={<Resetpassword />}></Route>
            <Route path="/travelhistory" element={<Travelhistory />}></Route>
            <Route path="/flight/search" element={<Flightsearch />}></Route>
          </Routes>
        </Router>
        <Footer />
      </TicketState>
    </div>
  );
}

export default App;
