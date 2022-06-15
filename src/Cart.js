import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 999,
          title: "Phone",
          qty: 1,
          img: "",
          id: 1,
        },
        {
          price: 549,
          title: "watch",
          qty: 1,
          img: "",
          id: 2,
        },
        {
          price: 9999,
          title: "laptop",
          qty: 1,
          img: "",
          id: 3,
        },
      ],
    };
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
    if (products[index].qty){products[index].qty -= 1;}

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

  render() {
    return (
      <div className="cart">
        {this.state.products.map((item) => {
          return <CartItem product={item} key={item.id} 
          onIncreaseQuantity = {this.handleIncrementQuantity} 
          onDecreaseQuantity = {this.handleDecrementQuantity}
          onDelete = {this.handleDelete}
          ></CartItem>;
        })}
      </div>
    );
  }
}

export default Cart;
