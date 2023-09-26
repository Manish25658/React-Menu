import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";
//Importing 2 libraries react and react Dom
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
  return<div className="container">
    {/* <h1> Hello React!</h1> */}
    <Header/>
   <Menu/>
    <Footer/>
</div>
}//we nested pizza component in App component or calling Pizza component in App component

function Header(){
  // const style={color:"red" ,fontSize:"48px"}
  const style={}
  return(
  <header className="header">
 <h1 style={style}
>Fast Pizza.Co</h1>
</header>)
}//we use {{style }} to enter javascript mode

function Menu(){
return<main className="menu">
<h2> Our Menu</h2>
<p> Authentic Italian Cuisine.All from stone oven,all organic,all tasty.</p>

<ul className="pizzas">
{pizzaData.map((pizza) => ( <Pizza pizzaObj={pizza} key={pizza.name}/>))}
</ul>

{//in the above method we are storing pizza obj ie {pizza} to a some random property pizzaObj
//here we have used main tag ..instead of div tag

/* <Pizza name="Pizza Spinaci"
ingredients="Tomato, mozarella, spinach, and ricotta cheese"
photoName="pizzas/spinaci.jpg"
price={10}
/>
<Pizza
name= "Pizza Funghi"
ingredients="Tomato, mozarella, mushrooms, and onion"
price= "12"
photoName= "pizzas/funghi.jpg"
/> */}
    </main>//"key is not imp as of now"
}//here  react included "pizza" component  (green color) and called ...function Pizza(props)and passed props object

//passing the data from parent componet ie Menu to pizza componet which is the child
//so to define props we do it in 2 steps
//1)Pass the props into the component
//2)then we receive the props in the component we pass them into
//we pass props parameter


  function Pizza(props){
return(
  <li className="pizza"> {/* className=`pizza ${pizzaObj.soldOut?"sold-out:" " } ` */}
    {/* Suppose a pizza has been sold out then.. */}
   
    <img src={ props.pizzaObj.photoName}alt={props.pizzaObj.name}/>
    <div>
  <h3>{props.pizzaObj.name}</h3>
  <p>{props.pizzaObj.ingredients}</p>
  <span> {props.pizzaObj.price}</span>
  {/*  instead of giving the "price" as above code we can do this  <span> {pizzaObj.soldOut?"SOLD OUT":pizzaObj.price}</span>      */}
  </div>
</li>
  )}

  //SEE ABOVE CODE 100 LINE
//instead of passing props parameter we can do destructuring by directly passing pizzaObj

// function Pizza({pizzaObj}){
//   return(
//     <li className="pizza">
//       <img src={ pizzaObj.photoName}alt={pizzaObj.name}/>
//       <div>
//     <h3>{pizzaObj.name}</h3>
//     <p>{pizzaObj.ingredients}</p>
//     <span> {pizzaObj.price}</span>
//     </div>
//   </li>
//     )}

  


function Footer(){
const hour=new Date().getHours();
const openHour=12;//12pm opens
const closeHour=22;//10pm closes
const isOpen=(hour>= openHour && hour<=closeHour) 
console.log(isOpen)

// if(hour>= openHour && hour<=closeHour) alert("We are open!");
// else alert("We are closed!")

return <footer className="footer">
  {new Date().toLocaleTimeString()}.We are open
  <div className="order">
  <button className="btn">Order</button>
  </div>
  </footer>
}//12:39:48 am.We are open ..this is wat we get using above method



const root=ReactDOM.createRoot(document.getElementById("root"))//here ReactDom is a library,createRoot is the method
//<div id="root"></div> getelementbyId refers to this div..
root.render(<React.StrictMode>
  <App/>
  </React.StrictMode>)//and hello react is rendered inside this <div> 