import React, {Component} from 'react';

class UserContainer extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-xl-9 mx-auto">
                        <div className="card card-signin flex-row my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">User Data App</h5>
                                {this.props.children[0]}
                                <div className='userData'>
                                    <div className="card-columns customColumn-card">
                                    {this.props.children[1]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserContainer;