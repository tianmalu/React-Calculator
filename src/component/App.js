import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import "../styles/App.css"
import { Component } from "react";
import calculate from "../logic/calculate";

/*
export default function App() {
    return (
        <div className="component-app">
            <Display value="" />
            <ButtonPanel />
        </div>
    )
}
*/

export default class App extends Component{
    /*
    'Component' inherit from React.
    */
    constructor(props){
        super(props);
        //total: 1st operand and its result.
        //next: 2nd operand
        //operation: operator
        this.state = {
            total: null,
            next: null,
            operation: null,
        };
    }

    handleClick = buttonName => {
        //update the state of button components
        this.setState(calculate(this.state, buttonName))
    }

    render(){
        return (
            <div className="component-app">
                <Display value={this.state.next || this.state.total || "0"} />
                <ButtonPanel clickHandler={this.handleClick} />
            </div>
        )
    }

}