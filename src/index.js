import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
        <div className="container">
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

  // const style ={
  //   color:"green",
  //   fontSize:"39px",
  //   textTransform:"uppercase"
  // };

    return (
      <header className="header">
        <h1>
          Learning React with Pizza Menu
        </h1>
      </header>);
}

function Menu(){
    return (
        <main className ="menu">

            <h2>Our menu</h2>

            <Pizza name="Pizza Funghi" 
            ingredients="Tomato, mozarella, mushrooms, and onion"
            photoName="pizzas/funghi.jpg" price={200} />    

            <Pizza name="Pizza Margherita" 
            ingredients="Tomato and mozarella"
            photoName="pizzas/margherita.jpg" price={300} />
        
        </main>
    );
}



function Pizza(props){
  console.log(props);
  return (
      <div className="pizza">
          <img src={props.photoName} alt="Pizza funghi" />
          <div>
            <h1>{props.name}</h1>
            <p> {props.ingredients} </p> 
            <span>{props.price}</span>
          </div>
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
   <footer className="footer">
    {new Date().toLocaleTimeString()}. We're currently Open</footer>
   );
}



