import React from 'react';
import './App.css';
import TodoContainer from "./component/TodoApp/TodoContainer";
import TodoForm from "./component/TodoApp/TodoForm";
import TodoCard from "./component/TodoApp/TodoCard";

class App extends React.Component {

    state = {
        todoID: 1,
        todoList: [],
        status: false,
        inputStatus: true,
        createTodo: '',
        newTodo:''
    };
    functions = {
        handleChangeInput: (event) => {
            const name = event.target.name;
            this.setState({
                ...this.state,
                [name]: event.target.value,
            });
        },
        increment: () => {
            this.setState({
                number: this.state.number + 1,
            });
        },
        decrement: () => {
            this.setState({
                number: this.state.number - 1,
            });
        },
        createData: () => {
            this.setState({
                desc: this.state.createTodo,
            })
        },
        onAddData: () => {
            if (this.state.createTodo !== '') {
                this.state.todoList.push({
                    id: 'To Do : ' + this.state.todoID,
                    description: this.state.createTodo
                });
                this.setState({
                    todoList: this.state.todoList,
                    status: true,
                    todoID: this.state.todoID + 1,
                    inputStatus: true,
                    createTodo: ''
                });
            } else {
                alert("What you really wanna do ?")
            }
        },

        onEditData: (index, inID, inDesc) => {
            let inEdit = this.state.todoList.splice(index, 1, {
                id: inID,
                description: inDesc
            });
            this.setState({...this.state.todoList, inEdit});
            alert("Data Succesfully Updated");
        },

        onDeleteData: (index) => {
            let delIndex = this.state.todoList.splice(index, 1);
            this.setState({delIndex});
        }
    }

    render() {
        console.log('createtodo', this.state.createTodo)
        const listTodo = this.state.todoList.map((todoList, index) => (
            <TodoCard
                todo={todoList}
                editAccess={this.functions}
                inputData={this.state.createTodo}
                index={index}
                newData = {this.state.newTodo}
            />
        ));
        return (
            <div className="App">
                <TodoContainer>
                    <TodoForm funcFromApp={this.functions} inputData={this.state.createTodo}/>
                    {this.state.status === false ? null : listTodo}
                </TodoContainer>
            </div>
        );
    }
}

export default App;
