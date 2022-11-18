import { useState } from 'react'
import NavBar from './components/navbar'
import './App.css'
import './styles/style.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar/>
      <Card
      prof_img='src\assets\media.jpeg'
      chat_name ='Gene'
      chat_time= "2:00pm"
      chat_content=" what time will you be around?"
      chat_number= "8"
      />
       <Card
      prof_img='src\assets\texting.jpeg'
      chat_name ='Femi'
      chat_time= "1:30pm"
      chat_content=" Party Tonight!"
      chat_number= "15"
      />
      <Card
      prof_img='src\assets\twopuzzle.jpeg'
      chat_name ='Jessicah'
      chat_time= "1:00pm"
      chat_content=" Hey Siz! Dropping into town tonight, will you pick me up?"
      chat_number= "20"
      />
      <Card
      prof_img='src\assets\pic.webp'
      chat_name ='Lucy'
      chat_time= "7:00am"
      chat_content=" Hey Siz! Jessie is in town tonight"
      chat_number= "10"
      />
    </div>
  )
}

export default App
