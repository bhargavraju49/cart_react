import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            product:[
            {
                price: 999,
                title: 'Phone',
                qty: 1,
                img: '',
                id: 1
            },
            {
                price: 549,
                title: 'watch',
                qty: 1,
                img: '',
                id: 2

            },
            {
                price: 9999,
                title: 'laptop',
                qty: 1,
                img: '',
                id: 3

            },
        ]}
    }


    render(){
        return(
            <div className="cart">
                {this.state.product.map((item)=>{
                    return <CartItem product={item} key={item.id}></CartItem>
                    })}
            </div>
        )
    }
}

export default Cart;