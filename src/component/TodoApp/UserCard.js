import React, {Component} from 'react';

class UserCard extends Component {
    render() {

        let {userDetail} = this.props;
        return (
            <div className="card customCard">
                <div className="card-body">
                    <h5 className="card-title" style={{textAlign:'center'}}>{userDetail.userName}</h5>
                    <hr/>
                    <div className='container' style={{textAlign:'center'}}>
                            <div><h6>Address</h6></div>
                            <div>{userDetail.userAddress}</div>
                        <hr/>
                            <div><h6>Age</h6></div>
                            <div>{userDetail.userAges}</div>
                        <hr/>

                    <div><h6>Email</h6></div>
                            <div>{userDetail.userEmail}</div>

                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;