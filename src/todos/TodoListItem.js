import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
    background-color: white;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    display: block;
    width: 100%;`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: right;
    margin-top: 10px;
    margin-bottom: 10px;`;
const CompletedButton = styled.button`
    background-color: #21ba45;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 1rem;
    `;	

const RemoveButton = styled.button`
 background-color: #f44336;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 1rem;
    `;
const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <TodoItemContainer>
        <h3>{todo.text}</h3>
        <ButtonsContainer>
            {todo.isCompleted ? null :
                <CompletedButton
                    className="completed-button"
                    onClick={() => onCompletedPressed(todo.text)}>
                    Mark as completed</CompletedButton>}
        <RemoveButton className="remove-button" onClick={()=> onRemovePressed(todo.text)}>Delete</RemoveButton>
       </ButtonsContainer>
    </TodoItemContainer>
)

export default TodoListItem;
