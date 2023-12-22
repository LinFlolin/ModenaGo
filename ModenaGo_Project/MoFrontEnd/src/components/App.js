import React, {Component} from "react";
import {render} from "react-dom";

export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<h1>Modena GO </h1>)
    }
    
}
const AppDiv = document.getElementById('home');
render (<App/>,AppDiv)