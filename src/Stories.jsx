import React from 'react'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Stories() {

  const [stories,setStories]= useState([]);

  const navigate =useNavigate();

  let tot =0;

  useEffect(() =>{
    fetch('http://localhost:3000/story')
    .then((data) =>data.json())
    .then(data =>setStories(data))
    .catch((err) =>console.log(err))
  },[]);

  return (
    <div className='story d-flex'>
     
      {stories.length >0 ? (
        stories.map((story) =>(
        <div key={story.id} className="mx-1" onClick={() =>{navigate(`/story/${story.id}/${tot}`)} }>
          <div className='gradiant-border'>
          <img className="story-dp  "src={story.user.profile_pic} alt="pp"/>
          </div>
          <div>
          <p className='text-truncate' style={{width:"50px"}}>
            {story.user.username}
          </p>
          </div>
        </div>
    ))
      ):(
        <p>Loading..</p>
      )}
    </div>
  )
}

export default Stories