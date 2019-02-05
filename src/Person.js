import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Person = (props) => {
	return(
		<div>
			<p onClick={props.click}>
				My name is {props.name} and I am {props.age} years old
			</p>
    </div>
	)
}

export default Person;