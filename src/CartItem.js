import React from "react";


const CartItem =  (props)=>{
        console.log(props)

        const {price, title, qty, img} = props.product

        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.Image} src={img}/>
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
                            onClick={()=>props.onIncreaseQuantity(props.product)}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                            onClick={()=>props.onDecreaseQuantity(props.product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1655315414~hmac=10d53426569ef3ac150396d94d24d7e9"
                            onClick={()=>props.onDelete(props.product)}
                        />

                    </div>
                </div>
            </div>
        )
}

const styles = {
    Image: {
        borderRadius: 2,
        height: 120,
        width: 120,
    }
}

export default CartItem;