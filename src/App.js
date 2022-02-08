import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhySection from "./components/WhySection";

function App() {
  return (
    <div className="App overflow-hidden">
      <Header />
      <Hero />
      <WhySection />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
