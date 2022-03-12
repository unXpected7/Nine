import React from "react";
import styled from "styled-components";

const Qty = styled.p`
    font-size: 22px;
    width: 600px;
`;

const Button = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: darkslategrey;
    text-align: center;
    cursor: pointer;
    font-size: 18px;

    &:hover {
        opacity: 0.7;
    }
`;

export default class Counter extends React.Component{

    state = {
        value: 0
    }

    handleMinus = () => {
        this.setState({
            value: this.state.value - 1
            }, () => this.props.receiveValue(this.state.value));
    }

    handlePlus = () => {
        this.setState({
            value: this.state.value + 1
             },  () => this.props.receiveValue(this.state.value));
    }


    render(){
        return(
            <div style={{display: "flex"}}>
                <Button onClick={this.handleMinus}>-</Button>
                <Qty>{this.state.value}</Qty>
                <Button onClick={this.handlePlus}>+</Button>
                </div>
        )
    }
}

// membuat func callback di child (component counter)
// agar dapat mengirimkan data ke parent (product)
//props disini sbg alat komunikasi data antar component
// state = render . properties = value.
// saat menggunakan this, dapat menggunakan callback berupa props