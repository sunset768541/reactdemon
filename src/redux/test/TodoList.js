import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

//todos 和onTodoClick是从容器组件中传入的参数
//todos 和onTodoClick的以props传过来的,容器组件传递什么就展示什么
const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map((todo, index) => (
            <Todo key={index} {...todo} onClick={() => onTodoClick(index)}/>
        ))}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default TodoList