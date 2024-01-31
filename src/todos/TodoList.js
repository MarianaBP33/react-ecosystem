import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from './actions';
import TodoListItem from './TodoListItem';
import NewTodoForm from './NewTodoForm';
import { displayAlert } from './thunks';
import styled from 'styled-components';

const ListWrapper= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 100%;
`;
const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <ListWrapper>
        <NewTodoForm/>
        {todos.map(todo => <TodoListItem todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed} />)}
    </ListWrapper>
)

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
