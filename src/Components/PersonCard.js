import React, { Component } from 'react';
import '../App.css';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Count: 0
        };

        
    }

    btnStyle = {
        padding: '12px 15px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        background: 'linear-gradient(30deg, rebeccapurple, magenta)',
        color: '#fff',
        border: 'none'
    };

    AgePlus = () => {
        this.setState({
            Count: this.state.Count + 1
        });
        console.log(this.state.Count)
    }




    render() {
        return (
            <div>
                <h1 className="H1Tags">Name: {this.props.firstName} {this.props.lastName} </h1>
                <p>Age: {this.props.Age + this.state.Count}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button style={this.btnStyle} onClick={this.AgePlus}>Age += 1</button>
            </div>
        );
    }
}

export default PersonCard;