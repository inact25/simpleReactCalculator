import React, {useState} from 'react';
import './App.css';
import CalcContainer from "./component/Calculator/CalcContainer";
import CalcButton from "./component/Calculator/CalcButton";
import CalcForm from "./component/Calculator/CalcForm";


const App = () => {

    const [result, setResult] = useState('');

    const onClick = (buttonValue) => {
        if (buttonValue === "=") {
            try {
                // eslint-disable-next-line no-eval
                setResult((eval(result) || "") + "")
            } catch (e) {
                setResult('error')
            }
        } else if (buttonValue === "C") {
            setResult('')
        } else if (buttonValue === "←") {
            if (result.length > 1) {
                setResult(result.slice(0,-1))
            } else {
                setResult('')
            }
        } else if(buttonValue === "%") {
            setResult((result/100).toString())

        }else {
            setResult(result+buttonValue)
        }
    }


    return (
        <div>
            <div className="App">
                <CalcContainer>
                    <CalcForm result={result}/>
                    <CalcButton letCalc={onClick}/>
                </CalcContainer>
            </div>
            );
        </div>
    );
};

export default App;

