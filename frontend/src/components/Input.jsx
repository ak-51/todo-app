import { Fragment, useState } from "react"
import axios from 'axios'

const Input = () => {
    const [description, setdescription] = useState('')

    const submitForm = async(e) => {
        e.preventDefault()
        try {
            axios.post("/todos", {
                description: description
            })
            .then(res => {
                console.log(res)
                window.location.reload()
            })
        } catch (err) {
            console.error(err.message)
        }
        
    }

    return(
        <Fragment>
            <h1 className="text-center mt-5">To-Do App</h1>
            <form className="d-flex mt-5" onSubmit={submitForm}>
                <input type="text" className="form-control" value={description} onChange={e => setdescription(e.target.value)} />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    )
}

export default Input