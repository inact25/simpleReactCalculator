import React, {Component} from 'react';

class TodoForm extends Component {
    render() {
        const {onAddData,handleChangeInput } = this.props.funcFromApp;
        const {inputData} = this.props
        return (
            <div>
                <div className="form-signin">
                    <div className="row">
                        <div className="col-8">
                            <div className="form-label-group">
                                <input
                                    type="text"
                                    id="inputUserame"
                                    name="createTodo"
                                    value={inputData}
                                    onChange={handleChangeInput}
                                    className="form-control"
                                    placeholder="Username"
                                    autoFocus
                                />
                                <label htmlFor="inputUserame">What you wanna do ?</label>
                            </div>
                        </div>
                        <div className="col-4">
                            <button className="btn btn-lg btn-primary btn-block text-uppercase"
                                    type="submit" onClick={()=>onAddData()}>Plan it
                            </button>
                        </div>
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default TodoForm;