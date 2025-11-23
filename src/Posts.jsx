import React from 'react'
import {useState,useEffect} from 'react'
function Posts() {

    const [posts,setPosts] =useState([]);

    useEffect(() =>{
        fetch("http://localhost:3000/posts")
        .then ((data) => data.json())
        .then((data => setPosts(data)))
        .catch(err => console.log(err))
    },[]);
  return (
    <div className='d-flex justify-content-center'>
        {
        posts.length >0 ? (
        <div>
            {posts.map((post) =>(
                <div className="my-3" key={post.id}>
                    <div className='d-flex '>
                        <img className="dp " src={post.user.profile_pic} alt="profile pic"/>
                        <h5>{post.user.username}</h5>
                    </div>
                    <img className='image' src={post.image} alt="post"/>
                    <div>
                        <i className="bi bi-heart-fill"></i>
                        <i className="bi bi-chat-fill"></i>
                        <i className="bi bi-send-fill"></i>
                    </div>
                    <div>
                        <b>{post.likes}</b>

                    </div>
                    <div>
                        <p>{post.caption}</p>
                    </div>
                </div>
                ))}

        </div>
        ):(
        <div>
            Loading Posts
        </div>)
        }
    </div>
  )
}

export default Posts