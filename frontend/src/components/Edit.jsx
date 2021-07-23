import axios from "axios"
import { Fragment, useState } from "react"

const Edit = ({desc, id}) => {
    const [description, setDescription] = useState(desc)

    const editTodo = () => {
        try {
            axios.put(`/todos/${id}`, {
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Edit
            </button>


            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={editTodo}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Edit