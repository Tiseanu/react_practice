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
    }

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount(this.state.count)}</span>
                <button onClick={this.handleIncrement} style={{fontSize: 13}} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    // Ctrl+Shift+R
    getBadgeClasses() { // rendering classes
        let classes = "badge m2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(counter) {
        return counter === 0 ? "Zero" : counter;
        // or: return count === 0 ? <h1>Zero</h1> : count;
    }

}
 
export default CounterComp;

