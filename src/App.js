import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Sample from "./Sample";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebaseApp from "./index";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [],
      loading: true
    }
  }
  componentDidMount(){

    const db = getFirestore(firebaseApp);
    // Get a list of cities from your database
    const getproducts = async (db) => {
      const productCols = collection(db, 'Products');
      const productSnap = await getDocs(productCols);
      const productList = productSnap.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id
        return data;
      });
      console.log(productList)
      this.setState({
        products:productList,
        loading:false
      })
    }
    getproducts(db);

  }

    handleIncrementQuantity = (product) => {
      console.log(product)
      const {products} = this.state
      console.log(products)
      const index = products.indexOf(product)
      products[index].qty += 1;
  
      this.setState({
          products: products
      })
    };
  
    handleDecrementQuantity = (product) => {
      console.log(product)
      const {products} = this.state
      console.log(products)
      const index = products.indexOf(product)
      if (products[index].qty){products[index].qty -= 1}
  
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
    const {products , loading} = this.state
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}></Navbar>
        <Cart
        products = {products}
         onIncreaseQuantity = {this.handleIncrementQuantity} 
         onDecreaseQuantity = {this.handleDecrementQuantity}
         onDelete = {this.handleDelete}
         > </Cart>
         {loading && <h1>loading...</h1>}
         <div style={{padding:30}}><h1>Total = {this.getTotal()}</h1></div>
         
      </div>
    );
  }
}

export default App;
