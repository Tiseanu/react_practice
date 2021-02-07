import React, { Component } from 'react';

class CounterComp extends Component {
    state = { // here we have all the props
        hello: "Hellooo",
        count: 1,
        imageUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3'],
    };

    handleIncrement () {
        console.log("This was clicked");
        // this is undefined here - function scope
        // state belongs to the object
    }

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} style={{fontSize: 13}} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    }

    /*renderTags() {
        // if (this.state.tags.length === 0) return null
        if (this.state.tags.length === 0) return <p>No tags</p>
        return <ul> { this.state.tags.map(tag => <li key={tag}>{ tag }</li>) }</ul>;
    }
    
    { this.state.tags.length === 0 && "Add some tags" }
    { this.renderTags() }
    */

     /*{this.style}
    style = {
        // camel case notation:
        fontSize: 10, // 10px implicit
        fontWeight: "bold"
    };*/

    // Ctrl+Shift+R
    getBadgeClasses() { // rendering classes
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

