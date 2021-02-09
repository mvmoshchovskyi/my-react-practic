import React from 'react';
import {MyContext} from "../context";
import {useHistory} from 'react-router-dom'

const AddUser = () => {
    const {onAdd} = React.useContext(MyContext)
    const [formData, setFormData] = React.useState({name: "", email: ''})
    let history = useHistory()

    const add = (e) => {
        e.preventDefault()
        if (formData.name === '' || formData.email === '') {
            alert('This fields are mandatory')
            return
        }

        onAdd(formData)

        setFormData({name: '', email: ''})
        history.push('/')
    }
    const changeValue = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h2>Add user</h2>
            <form onSubmit={add}>
                <div>
                    <label>Name</label>
                    <input type="text"
                           name='name'
                           placeholder='user'
                           value={formData.name}
                           onChange={changeValue}
                    />
                    <label>Email</label>
                    <input type="email"
                           name='email'
                           placeholder='email'
                           value={formData.email}
                           onChange={changeValue}
                    />
                </div>
                <button className='btn btn-success'>ADD</button>
            </form>
        </div>
    );
};

export default AddUser;