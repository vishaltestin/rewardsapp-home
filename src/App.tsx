import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import ContactFormSection from "./components/Home/ContactForm";
import BookDemo from "./pages/BookDemo"; 
import Header from "./components/Navbar";
import Welcome from "./pages/Welcome";
import ThankYouForRequest from "./pages/ThankYouForRequesting";
import TermsAndConditionsPage from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/book-demo" element={<BookDemo />} />
            <Route path="/signup" element={<ContactFormSection />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditionsPage />} />
            <Route path="/thank-you-for-request" element={<ThankYouForRequest />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;