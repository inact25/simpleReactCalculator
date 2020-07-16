import React from 'react';
import './App.css';
import UserContainer from "./component/TodoApp/UserContainer";
import UserInputForm from "./component/TodoApp/UserInputForm";
import UserCard from "./component/TodoApp/UserCard";

class App extends React.Component {

    state = {
        userDetail: [],
        userEmail:'',
        userAges:'',
        userAddress:'',
        userName:'',
        status: false
    };

    functions = {
        handleChangeInput: (event) => {
            const name = event.target.name;
            this.setState({
                ...this.state,
                [name]: event.target.value,
            });
        },
        onAddData: () => {
            if (this.state.userAddress !== '' && this.state.userAges !== '' &&  this.state.userName !== '' &&  this.state.userEmail !== '') {
                this.state.userDetail.push({
                    userName: this.state.userName,
                    userAddress: this.state.userAddress,
                    userEmail: this.state.userEmail,
                    userAges: this.state.userAges,
                });
                this.setState({
                    userDetail: this.state.userDetail,
                    userName: '',
                    userAddress: '',
                    userEmail: '',
                    userAges:'',
                    status: true
                });
            } else {
                alert("Please ensure your input is not empty")
            }
        },
    }

    render() {
        const userDetail = this.state.userDetail.map((userDetail) => (
            <UserCard
                userDetail={userDetail}
                inputUserName={this.state.userName}
                inputUserAddress={this.state.userAddress}
                inputUserAges={this.state.userAges}
                inputUserEmail={this.state.userEmail}
            />
        ));
        return (
            <div className="App">
                <UserContainer>
                    <UserInputForm
                        funcFromApp={this.functions}
                        inputUserName={this.state.userName}
                        inputUserAddress={this.state.userAddress}
                        inputUserAges={this.state.userAges}
                        inputUserEmail={this.state.userEmail}
                    />
                    {this.state.status === false ? null : userDetail}
                </UserContainer>
            </div>
        );
    }
}

export default App;
