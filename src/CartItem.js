import React from "react";


class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJHhJTOh8fa87Js5EAWMMLr9ApcyvkjgHrPuexPDAijm1eC_2lr_xnYoNmnIfkN5lDHZk&usqp=CAU',
        }
        
    }
    increaseQuantity () {                                             // can use arrow funct with out binding
        this.setState(
            {
                qty:this.state.qty+1,
                price: 999*(this.state.qty+1)
            }
            )
        console.log(this.state)
    }

    decreaseQuantity = () => {
        if (this.state.qty > 0){
            this.setState(
                {
                    qty:this.state.qty-1,
                    price: 999*(this.state.qty-1)
                }
                )
        }
        
    }
    
    render(){
        let {price, title, qty} = this.state

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.Image} src={this.state.img}/>
                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div>rs {price}</div>
                    <div>qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                            onClick={this.increaseQuantity.bind(this)}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1655315414~hmac=10d53426569ef3ac150396d94d24d7e9"
                        />

                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    Image: {
        borderRadius: 2,
        height: 120,
        width: 120,
    }
}

export default CartItem;