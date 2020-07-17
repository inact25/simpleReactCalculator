import React, {Component} from 'react';

class CalcButton extends Component {
    render() {

        const {onClick} = this.props.funcFromApp


                return (
            <div className="container">
                <div className='row'>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('C')} className='btn btn-dark btn-block myBtn'>C</button>

                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('-')} className='btn btn-dark btn-block myBtn'>-/+</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('%')} className='btn btn-dark btn-block myBtn' >%</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('/')} className='btn btn-danger btn-block myBtn'>÷</button>
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('7')} className='btn btn-dark btn-block myBtn'>7</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('8')} className='btn btn-dark btn-block myBtn'>8</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('9')} className='btn btn-dark btn-block myBtn'>9</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('*')} className='btn btn-danger btn-block myBtn'>x</button>
                    </div>
                </div>
                <div className='row row justify-content-md-center'>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('4')} className='btn btn-dark btn-block myBtn'>4</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('5')} className='btn btn-dark btn-block myBtn' name="5">5</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('6')} className='btn btn-dark btn-block myBtn'>6</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('-')} className='btn btn-danger btn-block myBtn'>-</button>
                    </div>
                </div>
                <div className='row row justify-content-md-center'>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('1')} className='btn btn-dark btn-block myBtn'>1</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('2')} className='btn btn-dark btn-block myBtn' >2</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('3')} className='btn btn-dark btn-block myBtn'>3</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('+')} className='btn btn-danger btn-block myBtn'>+</button>
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('.')} className='btn btn-dark btn-block myBtn'>.</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('0')} className='btn btn-dark btn-block myBtn'>0</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('←')} className='btn btn-danger btn-block myBtn'>←</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={() => onClick('=')} className='btn btn-danger btn-block myBtn'>=</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CalcButton;