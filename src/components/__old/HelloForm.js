import HelloSayer from './HelloSayer';
import React from 'react';
import style from '../styles/Helloform.scss';
import styled from 'styled-components';
import Title from './';

class HelloForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'world'};
    }

    render() {
        return (<div className="hello-form">
            <Title>Howdy</Title>
            <input type="text" onChange={this.onChange.bind(this)} />
            <HelloSayer name={this.state.name} />
        </div>);
    }

    onChange(e) {
        this.setState({
            name: e.target.value
        });
    }
}

export default HelloForm;