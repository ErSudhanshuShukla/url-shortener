import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ShortenForm from "@/modules/url-shortener";
import UrlList from "@/modules/url-list";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <div className="min-h-screen bg-(--color-bg) text-(--color-text-primary) transition-colors duration-200">
      <Navbar />

      <main
        id="home"
        className="mx-auto max-w-6xl px-5 pt-16 pb-12 sm:px-6"
      >
        <Hero />
        <ShortenForm />
        <UrlList />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;