import '../styles/style.css'
import React from 'react'


function Card(props) {
  return (
<div className='container'>

    <div className='profileimage'>
<img id ='profile-pic' src={props.prof_img} alt='puzzle' />
    </div>

    <div className='content'>
    <div className='top-content'>
        <h5>{props.chat_name}</h5>
        <h6 id= "chat_time">{props.chat_time}</h6>
    </div>

    <div className='bottom-content'>
    <p id="chat_content">{props.chat_content}</p>
    <h6 id='chat-number'>{props.chat_number}</h6>
    </div>
    </div>

</div>
 )
}
export default Card