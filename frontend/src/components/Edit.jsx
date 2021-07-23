import axios from "axios"
import { Fragment, useState } from "react"

const Edit = ({todo}) => {
    console.log(todo)
    const [description, setDescription] = useState(todo.description)

    const editTodo = () => {
        try {
            axios.put(`/todos/${todo.todo_id}`, {
                description: description
            })
            .then(res => {
                console.log(res.data[0])
                window.location.reload()
            })
        } catch (err) {
            console.error(err.message)
        }
    }
    return(
        <Fragment>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
                Edit
            </button>


            <div className="modal fade" id={`id${todo.todo_id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Todo</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={editTodo}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Edit