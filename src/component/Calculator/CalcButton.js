import React from 'react';


const CalcButton = (props) => {
    // e => props.onClick(e.target.name)
    return (
        <div>
            <div className="container">
                <div className='row'>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('C')} className='btn btn-dark btn-block myBtn'>C</button>

                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('-')} className='btn btn-dark btn-block myBtn'>-/+</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('%')} className='btn btn-dark btn-block myBtn' >%</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('/')} className='btn btn-danger btn-block myBtn'>÷</button>
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('7')} className='btn btn-dark btn-block myBtn'>7</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('8')} className='btn btn-dark btn-block myBtn'>8</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('9')} className='btn btn-dark btn-block myBtn'>9</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('*')} className='btn btn-danger btn-block myBtn'>x</button>
                    </div>
                </div>
                <div className='row row justify-content-md-center'>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('4')} className='btn btn-dark btn-block myBtn'>4</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('5')} className='btn btn-dark btn-block myBtn' name="5">5</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('6')} className='btn btn-dark btn-block myBtn'>6</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('-')} className='btn btn-danger btn-block myBtn'>-</button>
                    </div>
                </div>
                <div className='row row justify-content-md-center'>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('1')} className='btn btn-dark btn-block myBtn'>1</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('2')} className='btn btn-dark btn-block myBtn' >2</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('3')} className='btn btn-dark btn-block myBtn'>3</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('+')} className='btn btn-danger btn-block myBtn'>+</button>
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('.')} className='btn btn-dark btn-block myBtn'>.</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('0')} className='btn btn-dark btn-block myBtn'>0</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('←')} className='btn btn-danger btn-block myBtn'>←</button>
                    </div>
                    <div className='col-3 myCol'>
                        <button onClick={()=>props.letCalc('=')} className='btn btn-danger btn-block myBtn'>=</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalcButton;