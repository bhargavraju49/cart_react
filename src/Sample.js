import React from "react";

class Sample extends React.Component {
    constructor(){
        super();
        this.state = {
            val: 0
        }
    }
    add = ()=>{
        this.setState(
            {
                val: this.state.val + 2
            }
        )
    }

    sub = ()=>{
        this.setState((prev)=>{
            return {
                val: prev.val - 2 
            }
        })
    }

    db = ()=>{
        this.setState({
            val: this.state.val*2
        })
    }

    sq = ()=>{
        this.setState({
            val: this.state.val**2
        })
    }

    divid = ()=>{
            this.setState({
                val: this.state.val/2
            })
    }


    render(){
        return (
            <div>
                <h1>{this.state.val}</h1>

                <button onClick={this.add}>add2</button>
                <button onClick={this.sq}>square</button>
                <button onClick={this.db}>double</button>
                <button onClick={this.divid}>divideby2</button>
                <button onClick={this.sub}>subtract2</button>


            </div>
        )
    }
}

export default Sample;