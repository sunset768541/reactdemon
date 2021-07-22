import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'
//有时很难分清到底该使用容器组件还是展示组件。例如，有时表单和函数严重耦合在一起，如这个小的组件：
let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    dispatch(addTodo(input.value))
                    input.value = ''
                }}
            >
                <input
                    ref={node => {
                        input = node
                    }}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo