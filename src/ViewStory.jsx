import React from 'react'
import {useParams,Link} from 'react-router-dom'
import {useState,useEffect,useNavigate} from 'react'

function ViewStory() {

    const {id} =useParams();

    const [story,setStory] =useState(null);
   // const navigate =useNavigate();
    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`)

        .then((data) =>data.json())
        .then(data =>setStory(data))
        .catch((err) =>console.log(err))
    },[id])

    if(id>tot || id<=0) {
        Navigate('/');
    }
  return (
    <div> 
        {story ? (
            <div className="d-flex justify-content-center align-items-center">
                <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className='bi bi-arrow-left-circle-fill'></i></Link>
                <img className="eh-100" src={story.image} alt="story"/>
                 <Link to={`http://localhost:5173/story/${Number(id)+1}`}><i className='bi bi-arrow-right-circle-fill'></i></Link>
                <p>{story.user.username}</p>
            </div>
        ) : (
            <div>Loading..</div>)}
    </div>
  )
}

export default ViewStory