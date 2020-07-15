import React, {Component} from 'react';

class TodoCard extends Component {
    render() {
        let {todo,index} = this.props;
        let {onEditData, onDeleteData} = this.props.editAccess
        const customBtn ={
            marginTop:15
        }

        let text = "edit";

        let handleChange = (event) => {
            todo.description = event.target.value;
        };

        let switchButton = (index) => {
            if (text === "edit") {
                document.getElementById(index).disabled = false;
                text = "save";
            } else {
                onEditData(index,todo.id,todo.description);
                text = "edit";
                document.getElementById(index).disabled = true;
            }
            console.log(text)
        };

        return (
            <div className="card customCard" style={{width: 15 + 'rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{todo.id}</h5>
                    <textarea
                        className="form-control customTextArea"
                        disabled={true}
                        id={index}
                        name="description"
                        onChange={handleChange}
                    >{todo.description}</textarea>
                    <div className="row" style={customBtn}>
                        <div className="col">
                            <button className="btn btn-outline-primary btn-sm btn-block" onClick={() => {switchButton(index)}}>{text}</button>
                        </div>
                        <div className="col">
                            <button className="btn btn-outline-danger btn-sm btn-block" onClick={() => onDeleteData(index)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoCard;