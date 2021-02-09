import React from 'react';
import {MyContext} from "../context";
import {useHistory, useLocation} from 'react-router-dom'

const EditUser = () => {
      let  location = useLocation()
     const {id, name, email} = location.state.data
    console.log('location',location)
    const {onEdit} = React.useContext(MyContext)
    const [formData, setFormData] = React.useState({id,name,email})
    let history = useHistory()

    const submit = (e) => {
        e.preventDefault()
        if (formData.name === '' || formData.email === '') {
            alert('This fields are mandatory')
            return
        }

        onEdit(formData)
        setFormData({name: '', email: '',id:''})
        history.push('/')
    }
    const changeValue = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <h2>Edit user</h2>
            <form onSubmit={submit}>
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
                <button className='btn btn-success'>Edit</button>
            </form>
        </div>
    );
};

export default EditUser;