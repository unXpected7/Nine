import React from "react";


export default class Reusable extends React.Component {
    render() {
        return (
            <div>
                <h1>hello woorld {this.props.name}</h1>
             </div>
        )
    }
}
