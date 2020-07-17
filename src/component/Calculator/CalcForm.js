import React, {Component} from 'react';

class CalcForm extends Component {
    render() {

        const {result} = this.props

        const calcForm = {
            background: '#343a40',
            color: 'white',
            textAlign: 'right',
            padding: 3,
            maxWidth: '330px',
            minHeight:'65px',
            boxShadow : '0px 0px 40px #888888'
        }

        const calcFormText = {
            margin: '2%'
        }

        return (
            <div className='container'>
                <div style={calcForm}>
                    <h1 style={calcFormText}>{result}</h1>
                </div>
            </div>
        );
    }
}

export default CalcForm;