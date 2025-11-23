import React from 'react'
import { useNavigate } from 'react-router-dom'

function Sidebar() {

  const navigate = useNavigate();
  return (
    <div className="m-3 position-fixed">
    <div className='d-flex flex-column gap-3'>
        <img className="logo" src="src\assets\text.jpeg" alt ="text"/>
        <div className="div"><i className="bi bi-house-door-fill"></i>Home</div>
        <div className="div"><i className="bi bi-search-heart"></i>Search</div>
        <div className="div"><i className="bi bi-compass-fill"></i>Explore</div>
        <div className="div"><i className="bi bi-play-btn-fill"></i>Reels</div>
        <div className="div"><i className="bi bi-chat-dots-fill"></i>Messages</div>
        <div className="div"><i className="bi bi-suit-heart-fill"></i>Notifications</div>
        <div className="div"><i className="bi bi-plus-square-fill"></i>Create</div>
        <div className="div" onClick={()=>{navigate('/Profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>

    <div className=' position-fixed bottom-0 d-flex flex-column gap-3 mb-3'>
        <div><i className="bi bi-threads-fill"></i>Threads</div>
        <div><i className="bi bi-text-paragraph"></i>More</div>
    </div>
    </div>
  )
}

export default Sidebar