import "./App.css";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./components/Home";
import ReviewList from "./components/ReviewList";
import { Routes, Route } from "react-router-dom";
import { SingleReview } from "./components/SingleReview";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<ReviewList />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
