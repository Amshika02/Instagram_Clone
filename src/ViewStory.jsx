import React, { useEffect } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';

function ViewStory() {

    const {id,total} =useParams();

    const [story,setStory] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:3000/story/${id}`)
        .then(data => data.json())
        .then(data => setStory(data))
        .catch(err=> console.log(err))
    },[id]);

    if(id > total || id<=0){
        navigate('/');
    }
  return (
    <div>
        {story ? (
            <div className='d-flex justify-content-center align-items-center'>
                <Link to={`/story/${Number(id)-1}/${total}`}><i className="bi bi-caret-left-fill"></i></Link>
                <img
                    className="vh-100"
                    src={story.image && (story.image.startsWith('http') || story.image.startsWith('/')) ? story.image : `/${story.image}`}
                    alt="Story"
                />
                <Link to={`/story/${Number(id)+1}/${total}`}><i className="bi bi-caret-right-fill"></i></Link>
            </div> 
        ) : <div>Loading...</div>}
    </div>
    
  )
}

export default ViewStory