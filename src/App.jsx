
import { useState } from 'react'
import './App.css'
import {increaseCount,decreaseCount,addTodo, deleteTodo} from './redux/actions'
import {store} from './redux/store'
import {connect, useDispatch, useSelector} from 'react-redux'

function App(props) {
  console.log (
    'props',props
  )
  const todos = useSelector((state) => state.todos.todos)
  const dispatch =useDispatch()
  const [name,setName]=useState()
  const handleIncrease = () => {
      props.increaseCount(5)
  }

  const handleDecrease = () => {
    props.decreaseCount(2)

  }

  const handleOnchange = (e) => {
    setName(e.target.value)
  }

  const handleAdd= () => {
    dispatch(addTodo({
      name,
      id: Math.random()
    }))
    setName('')
  }
  const handleDelete = (id) => {
    dispatch(deleteTodo(id))
  }
  return (
    <>
      <div>
        <h1>
          Redux tutorial
        </h1>
        <h3>
          {store.getState().count.count}
        </h3>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <div>
          <input value={name} onChange={handleOnchange}/>
          <button onClick={handleAdd}>Add+</button>
        </div>
        {todos.map((todo,index) => {
          return (
              <div key={todo.id}>
                {index} - {todo.name}
                <span onClick={() => handleDelete(todo.id)}>   X</span>
              </div>
          )
        })}
      </div>
    </>
  )
}

export function mapStatetoProps(state){
  return {
    count: store.getState().count.count,
    todos: state.todos.todos
  }
}

export function mapDispatchtoProps(dispatch){
  return {
    increaseCount:(data) => store.dispatch(increaseCount(data)),
    decreaseCount:(data) => store.dispatch(decreaseCount(data)),
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App)
