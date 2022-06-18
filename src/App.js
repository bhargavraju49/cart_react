import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Sample from "./Sample";

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, onSnapshot, DocumentReference, addDoc  } from 'firebase/firestore/lite';
// import { onSnapshot } from 'firebase/firestore';

import firebaseApp from "./index";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: [],
      loading: true
    }
    this.db = getFirestore(firebaseApp);
  }
  componentDidMount(){

    const db = getFirestore(firebaseApp);
    // Get a list of products from your database
    // const getproducts = async (db) => {
    //   const productCols = collection(db, 'Products');
    //   const productSnap = await getDocs(productCols);
    //   const productList = productSnap.docs.map((doc) => {
    //     const data = doc.data();
    //     data['id'] = doc.id
    //     return data;
    //   });
    //   console.log(productList)
    //   this.setState({
    //     products:productList,
    //     loading:false
    //   })
    // }
    // getproducts(db);


    const getproducts = async (db) => {
      const productCols = collection(db, 'Products');
      const productSnap = await onSnapshot(productCols,(products)=>{
        const productList = products.docs.map((doc) => {
          const data = doc.data();
          data['id'] = doc.id
          return data;
        });
        console.log(productList)
        this.setState({
          products:productList,
          loading:false
        })
      });
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
        count+=product.price*product.qty
    })
    return count
}
   addProduct = async ()=>{
    const docRef = await addDoc(collection(this.db, "Products"), {
      img:'',
      price:30000,
      qty:1,
      title:'washing machine'
    });
    console.log("Document written with ID: ", docRef.id);
    
}
  render(){
    const {products , loading} = this.state
    return (
      <div className="App">
        <Navbar count = {this.getCartCount()}></Navbar>
        <button onClick={this.addProduct}>add a product</button>
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
