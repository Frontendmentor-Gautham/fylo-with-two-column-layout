import "./App.css";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Introduction from "./Components/Introduction/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import Signup from "./Components/Signup/Signup";
function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Features />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
