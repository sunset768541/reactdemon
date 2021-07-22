//使用 action 来描述“发生了什么”，和使用 reducers 来根据 action 更新 state 的用法。Store 就是把它们联系到一起的对象。Store 有以下职责：
// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。
//再次强调一下 Redux 应用只有一个单一的 store。当需要拆分数据处理逻辑时，你应该使用 reducer 组合 而不是创建多个 store。
import {createStore} from 'redux'
import todoApp from './reducers'
import { connect } from 'react-redux'

let store = createStore(todoApp)




