import React from 'react';import "./App.css";const BoxSettings = (props) => {	return (		<div className="boxCounter">			<div className="boxInput">				<form action="">					<span>Start Value : </span>					<input type="number"						   min="0"						   max="100"						   value={props.state.startValue}						   onChange={props.onChangeStart}/>					<span>\nMax Value : </span>					<input type="number"						   min="0"						   max="100"						   value={props.state.maxValue}						   onChange={props.onChangeMax}/>				</form>			</div>			<div className="boxButtons">				<button onClick={props.changeValue}> Set</button>			</div>		</div>	)}export default BoxSettings;