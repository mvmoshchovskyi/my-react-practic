import React, {Component} from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    addCount = () => {

        this.setState(({count}) => ({
            count:count + 1
        }))
    }
    subCount = () => {
        this.setState(({count}) => ({
            count:count - 1
        }))
    }

    render() {
        return (
            <div>

                <button onClick={this.addCount}>Add</button>
                <button onClick={this.subCount}>Sub</button>
                 <h2 >{this.state.count}</h2>
            </div>
        );
    }
}

export default Counter;