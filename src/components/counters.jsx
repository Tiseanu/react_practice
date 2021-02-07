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
    render() { 
        return (
            <div>
                { this.state.counters.map(counter => 
                    <CounterComp key={counter.id} value={counter.value} />) }
            </div>
        );
    }
}
 
export default Counters;