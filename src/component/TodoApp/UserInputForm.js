import React, {Component} from 'react';

class UserInputForm extends Component {
    render() {
        const {onAddData,handleChangeInput } = this.props.funcFromApp;
        const {inputUserAddress,inputUserAges,inputUserEmail,inputUserName} = this.props
        return (
            <div>
                <div className="form-signin">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-label-group">
                                <input
                                    type="text"
                                    id="userName"
                                    name="userName"
                                    value={inputUserName}
                                    onChange={handleChangeInput}
                                    className="form-control"
                                    autoFocus
                                    required
                                />
                                <label htmlFor="userName">What is your name ?</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-label-group">
                                <input
                                    type="text"
                                    id="userAddress"
                                    name="userAddress"
                                    value={inputUserAddress}
                                    onChange={handleChangeInput}
                                    className="form-control"
                                    autoFocus
                                    required
                                />
                                <label htmlFor="userAddress">Where do you live ?</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-label-group">
                                <input
                                    type="number"
                                    id="userAges"
                                    name="userAges"
                                    value={inputUserAges}
                                    onChange={handleChangeInput}
                                    className="form-control"
                                    autoFocus
                                    required
                                />
                                <label htmlFor="userAges">How old are you</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-label-group">
                                <input
                                    type="email"
                                    id="userEmail"
                                    name="userEmail"
                                    value={inputUserEmail}
                                    onChange={handleChangeInput}
                                    className="form-control"
                                    autoFocus
                                    required
                                />
                                <label htmlFor="userEmail">Write your email here</label>
                            </div>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block text-uppercase"
                                type="submit" onClick={()=>onAddData()}>Submit
                        </button>
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
}

export default UserInputForm;