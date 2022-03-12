// contoh penggunaan reusable componen

import React from "react";
import Reusable from "./Reuse";
import Bar from "./Bar";
import Product from "./product";

export default class Reuse extends React.Component{

    
    state = {
        value: 0
    }
    
    handleValue = (data) => {
        this.setState({
            value: data
        })
    }

    render() {
        return(
            <div>
                <Reusable name="Anonymous"/>
                <Reusable name="Anonymous2"/>

                <Bar value={this.state.value}/>
                <Product receiveValue={this.handleValue}/>
            </div>
            
        )
    }
}

// isi props pada component (Product) berisi function sbg callback