import React, { Component } from 'react';
import logo from './logo.svg';
import './Person.css';

const Person = (props) => {
	return(
		<div className="Person">
			<p onClick={props.click}>
				My name is {props.name} and I am {props.age} years old
			</p>
			<input onChange={props.changed} value={props.name}></input>
    </div>
	)
}

export default Person;