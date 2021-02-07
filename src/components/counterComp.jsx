import React, { Component } from 'react';

class CounterComp extends Component {
    state = { // here we have all the props
        hello: "Hellooo",
        count: 0
    }
    render() {  
        return (
            <React.Fragment>
                <h1>{this.state.hello} {2 + 2}</h1>
                <button>Increment</button>
                {this.formatCount()}
            </React.Fragment>
        );
    }

    formatCount() {
        const {count} = this.state;
        const x = <h1>JSX expression here</h1>
	    return count === 0 ? <h1>Zero</h1> : count;
        // or: return count === 0 ? "Zero" : count ;
    }
}
 
export default CounterComp;

