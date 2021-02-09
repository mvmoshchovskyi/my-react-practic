import React, {useState, useRef} from 'react';

const Forms = () => {

    const [email, setEmail] = useState('')
    const [formData, setFormData] = useState({
        email: '',
        text: '',
        select: '',
        select2: [],
        checkbox: false,
        radio: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(ref1.current.value)
    }

    const changeForm = (e) => {
        let {type, selectedOptions, name, value, checked} = e.target
        if (type === 'select-multiple') {
            value = [...selectedOptions].map(o => o.value)
        }
        if (type === 'checkbox') {
            value = checked
        }
        if (type === 'radio') {
            value = checked
        }
        setFormData({[name]: value})
    }

    const ref1 = useRef()
    return (
        <div>
            <form className='form-control' onSubmit={submitHandler}>
                <div className="mb-3">
                    <div>
                        <input ref={ref1} defaultValue='barany'/>
                    </div>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        onChange={changeForm}
                        name='email'
                        value={formData.email}/>

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        onChange={changeForm}
                        name='text'
                        value={formData.text}>
            </textarea>
                    <select name="select" value={formData.select} onChange={changeForm}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <select name="select2" multiple={true} value={formData.select2} onChange={changeForm}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <input type="checkbox" onChange={changeForm} checked={formData.checkbox} name='checkbox'/>
                    <input type="radio" onChange={changeForm} name='radio' value='1' checked={formData.radio === '1'}/>
                    <input type="radio" onChange={changeForm} name='radio' value='2' checked={formData.radio === '2'}/>
                    <button
                        type='submit'
                        className='btn btn-primary'

                    >SUBMIT
                    </button>
                </div>
            </form>
            <div>{formData.email}</div>
            <div>{formData.text}</div>
        </div>
    );
};

export default Forms;