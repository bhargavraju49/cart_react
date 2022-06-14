import React from "react";


class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }
    render(){
        const {price, title, qty} = this.state
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.Image}/>
                </div>
                <div className="right-block">
                    <div>{title}</div>
                    <div>rs {price}</div>
                    <div>qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* buttons */}
                        <img alt="increase" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/1008/premium/1008978.png?token=exp=1655227735~hmac=30b72cd8f29f7d436886b46f9d8e7f2d"/>
                        <img alt="decrease" className="action-icons" src="https://cdn-icons-png.flaticon.com/512/992/992683.png"/>
                        <img alt="delete" className="action-icons" src="https://cdn-icons.flaticon.com/png/512/542/premium/542775.png?token=exp=1655227753~hmac=af17e53734fc2dc6f0418afdfab3e29f"/>

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
        backgroundColor: 'grey'

    }
}

export default CartItem;