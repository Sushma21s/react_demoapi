import React, { Component } from 'react';

class ReguCompo extends Component {
    render() {
        console.log('--Regular component render--')
        return (
            <div>
                this Regular Component {this.props.name}
            </div>
        );
    }
}

export default ReguCompo;