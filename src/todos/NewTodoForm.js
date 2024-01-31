import React, { useState } from "react";
import {connect} from 'react-redux';
import {createTodo} from './actions';
import styled from "styled-components";

const NewTodoFormDiv = styled.div`
background-color: white;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    width: 100%;
    `;

const NewTodoInput = styled.input`
  font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 70%;    
    `;

const NewTodoButton = styled.button`
font-size: 16px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width: 30%;
    background-color: #21ba45;
    color: white;
    cursor: pointer;
    `;
const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <NewTodoFormDiv>
            <NewTodoInput
                type="text"
                placeholder="Type your new todo here"
                className="new-todo-input"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <NewTodoButton
                onClick={() => {
                    const isDuplicateText = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText) {
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}
                >
                Create Todo
            </NewTodoButton>
        </NewTodoFormDiv>
        )
    }
    
const mapStateToProps = state => ({
    todos: state.todos
});
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);