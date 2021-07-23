import { Fragment, useEffect, useState } from "react"
import Edit from "./Edit.jsx"
import axios from 'axios'

const List = () => {
    const [todos, setTodos] = useState([])

    const deleteTodo = async(id) => {
        try {
            axios.delete(`/todos/${id}`)
            .then(res => {
                console.log(res.data[0])
                window.location.reload()
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    const ListTodos = () => {
        try {
            axios.get("/todos")
            .then(res => {
                const jsonData = res.data
                setTodos(jsonData)
            })
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        ListTodos()
    }, [])

    return(
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><Edit desc={todo.description} id={todo.todo_id} /></td>
                            <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default List