import React from 'react';
import './App.css';
import CalcContainer from "./component/Calculator/CalcContainer";
import CalcButton from "./component/Calculator/CalcButton";
import CalcForm from "./component/Calculator/CalcForm";

class App extends React.Component {

    state = {
       result:'',
       resultStatus: false
    };

    functions = {

        onClick : (buttonValue) => {
            if (buttonValue === "=") {
                try {
                    this.setState({
                        // eslint-disable-next-line no-eval
                        result: (eval(this.state.result) || "") + "",
                        resultStatus: true
                    })
                } catch (e) {
                    this.setState({
                        result: "error"
                    })
                }
            } else if (buttonValue === "C") {
                this.setState({
                    result: ''
                })
            } else if (buttonValue === "←") {
                if (this.state.result.length > 1) {
                    this.setState({
                        result: this.state.result.slice(0, -1)
                    })
                } else {
                    this.setState({
                        result: ''
                    })
                }
            } else if(buttonValue === "%") {
                this.setState({
                    result : this.state.result /100
                })

        }else {
                this.setState({
                    result: this.state.result + buttonValue
                })
            }
        },
    }


    render() {
        return (
            <div className="App">
                <CalcContainer>
                    <CalcForm result={this.state.result}/>
                    <CalcButton funcFromApp={this.functions}/>
                </CalcContainer>
            </div>
        );
    }
}

export default App;
