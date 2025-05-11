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

  const pizzas= pizzaData;
  const totalpizza= pizzas.length;

    return (
        <main className ="menu">

            <h2>Our menu</h2>

            {totalpizza>0 ?(
                <ul className="pizzas">
                {
                 pizzas.map( (pizza)=>
                  <Pizza pizzaObject={pizza} key={pizza.name} />)
                };
              </ul>):<p>Sorry our Pizza are finished,Comeback tommorow!</p>
            };

            {/* <Pizza name="Pizza Funghi" 
            ingredients="Tomato, mozarella, mushrooms, and onion"
            photoName="pizzas/funghi.jpg" price={200} />    

            <Pizza name="Pizza Margherita" 
            ingredients="Tomato and mozarella"
            photoName="pizzas/margherita.jpg" price={300} />
         */}
        </main>
    );
}



function Pizza(props){
  console.log(props);
  return (
      <li className="pizza">
          <img src={props.pizzaObject.photoName} alt="Pizza funghi" />
          <div>
            <h1>{props.pizzaObject.name}</h1>
            <p> {props.pizzaObject.ingredients} </p> 
            <span>{props.pizzaObject.price + 7} </span>
          </div>
      </li>
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
    {
      isOpen && (
        <div className="order">
          <p>
           We are currently open.We'll be opening till {closeHOur}:00.Order Now!!!
         </p>
         <button className="btn">!!Order Now!!</button>
        </div>
      )
    }
    </footer>
   );
}



