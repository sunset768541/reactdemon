import { connect } from 'react-redux'
import { toggleTodo } from './actions'  //action
import TodoList from './TodoList' //显示组件

//Redux 应用中数据的生命周期遵循下面 4 个步骤：
//1、调用 store.dispatch(action)。Action 就是一个描述“发生了什么”的普通对象。比如：    { type: 'LIKE_ARTICLE', articleId: 42 }你可以在任何地方调用 store.dispatch(action)，包括组件中、XHR 回调中、甚至定时器中。
//2、Redux store 调用传入的 reducer 函数。Store 会把两个参数传入 reducer： 当前的 state 树和 action。注意 reducer 是纯函数。它仅仅用于计算下一个 state。它应该是完全可预测的：多次传入相同的输入必须产生相同的输出。它不应做有副作用的操作，如 API 调用或路由跳转。这些应该在 dispatch action 前发生。
//3、根 reducer 应该把多个子 reducer 输出合并成一个单一的 state 树。
//4、Redux store 保存了根 reducer 返回的完整 state 树。这个新的树就是应用的下一个 state！所有订阅 store.subscribe(listener) 的监听器都将被调用；监听器里可以调用 store.getState() 获得当前 state。
//现在，可以应用新的 state 来更新 UI。如果你使用了 React Redux 这类的绑定库，这时就应该调用 component.setState(newState) 来更新。


//容器组件（Smart/Container Components）和展示组件（Dumb/Presentational Components）
//Redux 的 React 绑定库是基于 容器组件和展示组件相分离 的开发思想。所以建议先读完这篇文章再回来继续学习。这个思想非常重要。
//                     展示组件	                容器组件
//作用	        描述如何展现（骨架、样式）	描述如何运行（数据获取、状态更新）/
//直接使用Redux	        否	                      是
//数据来源	           props	           监听 Redux state
//数据修改	    从 props 调用回调函数	       向 Redux 派发 actions
//调用方式	            手动	             通常由 React Redux 生成

//大部分的组件都应该是展示型的，但一般需要少数的几个容器组件把它们和 Redux store 连接起来。
//技术上讲你可以直接使用 store.subscribe() 来编写容器组件。但不建议这么做的原因是无法使用 React Redux 带来的性能优化。
// 也因此，不要手写容器组件，而使用 React Redux 的 connect() 方法来生成，后面会详细介绍。


//实现容器组件
//现在来创建一些容器组件把这些展示组件和 Redux 关联起来
//技术上讲，容器组件就是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。
// 你可以手工来开发容器组件，但建议使用 React Redux 库的 connect() 方法来生成，这个方法做了性能优化来避免很多不必要的重复渲染

//使用 connect() 前，需要先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中
//filter = state.visibilityFilter
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
    }
}
//import todoApp from './reducers'
// import App from './components/App'
//
// let store = createStore(todoApp)
//<Provider store={store}>将reduce注入到所有的容器组件中

//示型的 TodoList 组件需要一个类似 VisibleTodoList 的容器来监听 Redux store 变化并处理如何过滤出要显示的数据
//监听 Redux state  reducer中的todos  visibilityFilter
const mapStateToProps = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)//state.visibilityFilter是reducer   state.todos是reducer
    }
}
////除了读取 state，容器组件还能分发 action。类似的方式，可以定义 mapDispatchToProps() 方法接收 dispatch()
// // 方法并返回期望注入到展示组件的 props 中的回调方法。例如，我们希望 VisibleTodoList 向 TodoList 组件中注入一个叫 onTodoClick 的 props ，
// // 还希望 onTodoClick 能分发 TOGGLE_TODO 这个 action：
//向 Redux 派发 actions
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))//容器组件分发事件或者ADD_TODO
        }
    }
}
//生成容器组件 connect //最后，使用 connect() 创建 VisibleTodoList，并传入这两个函数。
//有map函数，先将dispatch和state传入到map函数处理，没有map的话则直接将state和dispatch传给显示组件
const VisibleTodoList = connect(
    mapStateToProps,//传递给展示组件
    mapDispatchToProps//传递给展示组件
)(TodoList)//TodoList是展示组件



//传入 Store所有容器组件都可以访问 Redux store，所以可以手动监听它。一种方式是把它以 props 的形式传入到所有容器组件中。但这太麻烦了，因为必须要用 store 把展示组件包裹一层，仅仅是因为恰好在组件树中渲染了一个容器组件。
//
// 建议的方式是使用指定的 React Redux 组件 <Provider> 来 魔法般的 让所有容器组件都可以访问 store，而不必显式地传递它。只需要在渲染根组件时使用即可。

export default VisibleTodoList