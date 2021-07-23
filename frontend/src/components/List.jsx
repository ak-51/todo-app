import { Fragment, useEffect, useState } from "react"
import axios from 'axios'

const List = () => {
    const [todos, setTodos] = useState([])

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
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default List