import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [
        {
          price: 999,
          price_: 999,
          title: "Phone",
          qty: 1,
          img: "https://m.media-amazon.com/images/I/61AwGDDZd3L._SL1500_.jpg",
          id: 1,
        },
        {
          price: 549,
          price_: 549,
          title: "watch",
          qty: 1,
          img: "https://m.media-amazon.com/images/I/71GIYSZpW+L._SL1500_.jpg",
          id: 2,
        },
        {
          price: 9999,
          price_: 9999,
          title: "laptop",
          qty: 1,
          img: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
          id: 3,
        },
      ],
    }
  }

    handleIncrementQuantity = (product) => {
      console.log(product)
      const {products} = this.state
      console.log(products)
      const index = products.indexOf(product)
      products[index].qty += 1;
      products[index].price = products[index].price_*products[index].qty
  
      this.setState({
          products: products
      })
    };
  
    handleDecrementQuantity = (product) => {
      console.log(product)
      const {products} = this.state
      console.log(products)
      const index = products.indexOf(product)
      if (products[index].qty){products[index].qty -= 1;products[index].price = products[index].price_*products[index].qty}
  
      this.setState({
          products: products
      })
    };
  
    handleDelete = (product) => {
      console.log(product)
      const {products} = this.state
      console.log(products)
      const index = products.indexOf(product)
      
      products.splice(index,1)
  
      this.setState({
          products: products
      })
    };
  
    
    getCartCount = ()=> {
      const {products} = this.state
      let count = 0;
      products.forEach((product)=>{
          count+=product.qty
      })
      return count
  }

  getTotal = ()=> {
    const {products} = this.state
    let count = 0;
    products.forEach((product)=>{
        count+=product.price
    })
    return count
}
  render(){
    const {products} = this.state
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}></Navbar>
        <Cart
        products = {products}
         onIncreaseQuantity = {this.handleIncrementQuantity} 
         onDecreaseQuantity = {this.handleDecrementQuantity}
         onDelete = {this.handleDelete}
         > </Cart>
         <div style={{padding:30}}><h1>Total = {this.getTotal()}</h1></div>
      </div>
    );
  }
}

export default App;
