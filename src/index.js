import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>Pizza Huttt!!!</h1>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>We are Open...{new Date().toLocaleTimeString()} </footer>
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <h2>Pizza</h2>
      <img src="pizzas/margherita.jpg" alt="margharita"></img>
      <strong>Pizza Margherita</strong>
      <p>Tomato and mozarella</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
