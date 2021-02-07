import React, { Component } from 'react';
import CounterComp from './counterComp';

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 3 },
            {id: 2, value: 1 },
            {id: 3, value: 2 },
            {id: 4, value: 0 }
        ]
    }

    // pass a reference from props
    handleDelete = () => {
        console.log('Event handler called');
    }

    render() { 
        console.log(this.props);
        return (
            <div>
                { this.state.counters.map(counter => (
                    <CounterComp onDelete={this.handleDelete} key={counter.id} value={counter.value}>
                        <div class="clearfix"></div>
                        <strong>Counter #{counter.id}: </strong>
                    </CounterComp>  
                ))}
            </div>
        );
    }
}
 
export default Counters;