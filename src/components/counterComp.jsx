import React, { Component } from 'react';

class CounterComp extends Component {
    state = { // here we have all the props
        hello: "Hellooo",
        count: 1,
        imageUrl: "https://picsum.photos/200"
    };

    /*{this.style}
    style = {
        // camel case notation:
        fontSize: 10, // 10px implicit
        fontWeight: "bold"
    };*/

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button style={{fontSize: 13}} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    // Ctrl+Shift+R
    getBadgeClasses() {
        let classes = "badge m2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    // <h1>{this.state.hello} {2 + 2}</h1>
    // <img className="hidden" src={this.state.imageUrl} alt=""/>
    // {this.formatCount()}
    formatCount() {
        // object destructuring
        const {count} = this.state;
        const x = <h1>JSX expression here</h1>
        return count === 0 ? "Zero" : count;
        // or: return count === 0 ? <h1>Zero</h1> : count;
    }
}
 
export default CounterComp;

