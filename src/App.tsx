import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { HomePage } from './pages/HomePage';
import { FAQsPage } from './pages/FAQsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faqs" element={<FAQsPage />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;
