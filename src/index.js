import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){
 
    return ( 
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
    );

    //react strict mode ,during development it will render all the components twice and check for any errors and outdated react api


//making compoinents    

function Header(){
    return <h1>Fast React Pizza .co</h1>
}

function Menu(){
    return (
        <div>
            <h2>Our menu</h2>
            <Pizza />
            <Pizza />
            <Pizza/>
            <Pizza />
        </div>
    );
}

function Footer(){
    const hour = new Date().getHours();
    const openHour = 9;
    const closeHOur= 22;
    const isOpen = hour>=openHour && hour<=closeHOur; 
    console.log(isOpen);
    // if(hour >= openHour && hour<=closeHOur){
    //     alert("We're currently Open");
    // }else{
    //     alert("Sorry we're closed");
    // }
   // return React.createElement('footer',null,"All rights reserved")
   return (
   <footer>
    {new Date().toLocaleTimeString()}. We're currently Open</footer>
   );
}



function Pizza(){
    return (
        <div>
            <img src="pizzas/funghi.jpg" alt="Pizza funghi" />
            <h1>Pizza</h1>
            <p> Pizza is a fast food , which also can be made in home </p> 
        </div>
    );
}