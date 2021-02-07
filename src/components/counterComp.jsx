import React, { Component } from 'react';

class CounterComp extends Component {
    state = { // here we have all the props
        hello: "Hellooo",
        count: 0,
        imageUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3'],
    };

    // or convert this method to an arrow one that doesn;t bind the this
    handleIncrement = () => {
        console.log("This was clicked", this);
        // updating a state:
        this.setState({count: this.state.count + 1});
    }

    handleDecrement = () => {
        console.log("This was clicked", this);
        // updating a state:
        if (this.state.count > 0) {
            this.setState({count: this.state.count - 1});
        } else {
            console.log("Cannot do this operation.");
            alert("Cannot perform this operation.");
        }
    }

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleDecrement} style={{fontSize: 13, marginLeft: 10, marginRight: 10}} className="btn btn-secondary btn-sm" disable={this.disableBtn()}>-</button>
                <button onClick={this.handleIncrement} style={{fontSize: 13}} className="btn btn-secondary btn-sm">+</button>
                <div className="clearfix" style={{marginBottom: 10}}></div> 
            </div>     
            );
    }

    // Ctrl+Shift+R
    getBadgeClasses() { // rendering classes
        let classes = "badge m2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
	    return count === 0 ? "Zero" : count;
        // or: return count === 0 ? <h1>Zero</h1> : count;
    }

    disableBtn () {
        const {count} = this.state;
        return count === 0 ? "disabled" : "";
    }

}
 
export default CounterComp;

