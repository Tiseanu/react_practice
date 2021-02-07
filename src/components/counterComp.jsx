import React, { Component } from 'react';

class CounterComp extends Component {
    state = { // here we have all the props
        value: this.props.value,
    };

    // or convert this method to an arrow one that doesn;t bind the this
    handleIncrement = () => { // updating a state:
        this.setState({value: this.state.value + 1});
    }

    handleDecrement = () => {
        console.log("This was clicked", this);
        // updating a state:
        if (this.state.value > 0) {
            this.setState({value: this.state.value - 1});
        } else {
            console.log("Cannot do this operation.");
            alert("Cannot perform this operation.");
        }
    }

    render() { 
        return (
            <div>
                {this.props.children}
                <span className={this.getBadgeClasses()}>{this.state.value}</span>
                <button onClick={this.handleDecrement} style={{fontSize: 13, marginLeft: 10, marginRight: 10}} className="btn btn-secondary btn-sm" disable={this.disableBtn()}>-</button>
                <button onClick={this.handleIncrement} style={{fontSize: 13}} className="btn btn-secondary btn-sm">+</button>

                <button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
                <div className="clearfix" style={{marginBottom: 10}}></div> 
            </div>     
            );
    }

    // Ctrl+Shift+R
    getBadgeClasses() { // rendering classes
        let classes = "badge m2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    disableBtn () {
        const {value} = this.state;
        return value === 0 ? "disabled" : "";
    }

}
 
export default CounterComp;