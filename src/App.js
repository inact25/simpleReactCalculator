import React, {useState} from 'react';
import './App.css';
import CalcContainer from "./component/Calculator/CalcContainer";
import CalcButton from "./component/Calculator/CalcButton";
import CalcForm from "./component/Calculator/CalcForm";






const App = () => {

    const [result, setResult] = useState('');
    const [status,setStatus] = useState(false);

    const onClick = (buttonValue) => {
        if (buttonValue === "=") {
            try {
                const result = ((eval(this.state.result) || "") + "")
                setResult(result)
                setStatus(true)
            } catch (e) {
                setResult('error')
            }
        } else if (buttonValue === "C") {
            setResult('')
        } else if (buttonValue === "←") {
            if (this.state.result.length > 1) {
                setResult(result.slice(0,-1))
            } else {
                setResult('')
            }
        } else if(buttonValue === "%") {
            const result = (result/100).toString()
            setResult(result)

        }else {
            setResult(result+buttonValue)
        }
    }

    return (
        <div>
            <div className="App">
                <CalcContainer>
                    <CalcForm result={result}/>
                    <CalcButton funcFromApp={onClick}/>
                </CalcContainer>
            </div>
            );
        </div>
    );
};

export default App;

