import React, {Component} from 'react';

class CalcButton extends Component {
    render() {

        const {onClick} = this.props.funcFromApp


        const myCalcButton = {
            marginTop: '3%'
        }

        return (
            <div className="container" style={myCalcButton}>
                <div className='row'>
                    <div className='col-3'>
                        <button onClick={() => onClick('C')} className='btn btn-dark btn-block'>C</button>

                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('-')} className='btn btn-dark btn-block'>_</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('%')} className='btn btn-dark btn-block' >%</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('/')} className='btn btn-danger btn-block'>÷</button>
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <div className='col-3'>
                        <button onClick={() => onClick('7')} className='btn btn-dark btn-block'>7</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('8')} className='btn btn-dark btn-block'>8</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('9')} className='btn btn-dark btn-block'>9</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('*')} className='btn btn-danger btn-block'>x</button>
                    </div>
                </div>
                <div className='row row justify-content-md-center'>
                    <div className='col-3'>
                        <button onClick={() => onClick('4')} className='btn btn-dark btn-block'>4</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('5')} className='btn btn-dark btn-block' name="5">5</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('6')} className='btn btn-dark btn-block'>6</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('-')} className='btn btn-danger btn-block'>-</button>
                    </div>
                </div>
                <div className='row row justify-content-md-center'>
                    <div className='col-3'>
                        <button onClick={() => onClick('1')} className='btn btn-dark btn-block'>1</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('2')} className='btn btn-dark btn-block' >2</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('3')} className='btn btn-dark btn-block'>3</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('+')} className='btn btn-danger btn-block'>+</button>
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <div className='col-3'>
                        <button onClick={() => onClick('.')} className='btn btn-dark btn-block'>.</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('0')} className='btn btn-dark btn-block'>0</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('←')} className='btn btn-danger btn-block'>←</button>
                    </div>
                    <div className='col-3'>
                        <button onClick={() => onClick('=')} className='btn btn-danger btn-block'>=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalcButton;