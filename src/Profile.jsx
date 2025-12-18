import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

function Profile() {

    const [profile, setProfile] = useState(null);

    const [followers,setFolowers] = useState([]);

    const [unfollowed , setUnfollowed] = useState(0);

    useEffect( () => {
        axios.get('http://localhost:3000/profile')
        .then(data => {setProfile(data.data); console.log(data)})
        .catch(err => console.log(err))

        axios.get("http://localhost:3000/followers")
        .then(data => setFolowers(data.data))
        .catch(err => console.log(err))
    },[unfollowed])

    function HandleOnChange(e){
        setProfile(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleUpdate = async () => {
        axios.put("http://localhost:3000/profile",profile)
        .then(console.log("updated"))
        .catch(err => console.log(err))
    }

    const handleUnfollow = async (id) =>{
        axios.delete(`http://localhost:3000/followers/${id}`)
        .then(setUnfollowed(!unfollowed))
        .then(alert("unfollowed"))
        .catch(err => console.log(err))
    }

  return (
    <div className='m-5'>
        {profile ? (
            <div>
                <img className="profile rounded-circle" src={profile.profile_pic} alt="Profile" />
                <h5>{profile.username}</h5>

                <input type="text"
                    value={profile.username}
                    name='username'
                    className='form-control my-4'
                    onChange={HandleOnChange}
                />

                <input type="text" 
                    name='profile_pic'
                    value={profile.profile_pic} 
                    className='form-control'
                    onChange={HandleOnChange}
                />

                <button className='btn btn-primary my-4' onClick={handleUpdate}>
                    Update
                </button>



            </div>
        )
        :
        (
            <div>Loading Profile...</div>
        )}
        <div>
            <h5>Followers</h5>
            {followers.length >0 ? (
                followers.map(follower => (
                    <div key={follower.id} className='d-flex my-2'>
                        {follower.username}
                        <button className='btn btn-secondary ms-auto' onClick={()=> {handleUnfollow(follower.id)}}>unfollow</button>
                    </div>
                ))
            )
            :
            (
                <div> Loading Followers</div>
            )}
        </div>
        
    </div>
  )
}

export default Profile