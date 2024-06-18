import './App.css';
import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment className="App">
        <Header />
        <Navigation />
        <main>

        </main>
        <Footer />
    </React.Fragment>
  );
}

export default App;
