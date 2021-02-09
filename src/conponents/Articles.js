import React, {useContext} from 'react';
import {MyContext} from '../context'
import {Link} from "react-router-dom";
import uuid from 'react-uuid'

const Articles = () => {
    const {posts, onDelete, onEdit} = useContext(MyContext)

    return (
        <>

            <div className='card-body'>
                {!posts ? <h2>loading ...</h2> :

                    posts.map((post) => {
                        const {id, name, email} = post
                        return (

                            <div className='section' key={uuid()}>

                                <h2 className='underline'>name: {name}</h2>

                                <h2>email: {email}</h2>
                                < br/>
                                <Link to={{pathname: `/edit/`, state: {data:post}}} className='btn btn-primary'>
                                    Edit
                                </Link>
                                <button className='btn btn-danger' onClick={() => onDelete(id)}>Del</button>
                            </div>
                        )
                    })

                    }
                    <div>
                    <Link to={{pathname: `/add`}} className='btn btn-primary'>ADD new User</Link>
                    </div>
                    </div>
                    </>
                    );
                };

                export default Articles;