import React, {useState, useEffect,} from 'react'
import axios from "axios";
import ArticleList from "./conponents/ArticleList";
import {MyContext} from "./context";
import Header from "./conponents/Header";
import Footer from "./conponents/Footer";
import Forms from "./conponents/Forms";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NotFoundPage from "./conponents/NotFoundPage";
import Counter from "./conponents/Counter";
import uuid from 'react-uuid'
import AddUser from "./conponents/AddUser";
import EditUser from "./conponents/EditUser";
import PostDetail from "./conponents/PostDetail";

function App() {

    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            let data = await response.data
            setPosts(data)

        } catch (er) {
            console.log(er)
        }
    }
    useEffect(() => {
        fetchPosts()
    }, [])

    const onAdd = async (name) => {
        // console.log('name',name)
        const request = {
            id: uuid(),
            ...name
        }
        console.log('request', request)
        const response = await axios.post(`https://jsonplaceholder.typicode.com/users`, request)
        console.log('response', response.data)
        setPosts([...posts, response.data])
    }
    const onEdit = async (post) => {
        const request = {
            ...post
        }
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${post.id}`, request)
        setPosts(posts.map(post=>{
            return post.id === response.data.id ? {...response.data}: post
        }))
    }
    const onDelete = async (id) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        const newPost = posts.filter((post) => post.id !== id)
        setPosts(newPost)
    }

    return (
        <MyContext.Provider value={{posts, onDelete, onEdit, onAdd}}>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path='/'> <ArticleList/></Route>
                    <Route exact path='/forms'> <Forms/></Route>
                    <Route exact path='/counter'><Counter/></Route>
                    <Route exact path='/post/:id'><PostDetail/></Route>
                    <Route exact path='/add'><AddUser/></Route>
                    {/*<Route exact path='/edit'><EditUser/></Route>*/}
                    <Route path="/edit" render={(props) => (<EditUser {...props} posts={posts}/>)}/>
                    <Route path='*'><NotFoundPage/></Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </MyContext.Provider>
    );
}

export default App;
