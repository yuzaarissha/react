import UserCard from './components/UserCard'
import Button from './components/Button'
import './App.css'

function App() {
  const users = [
    {name: "Alisher", email: "alisher@gmail.com"},
    {name: "Amir", email: "amir@gmail.com", role: "User"},
    {name: "Alizhan", email: "alizhan@gmail.com"}
  ]

const buttons = [
  {text: "Add"},
  {text: "Edit"},
  {text: "Delete"}
]

  return (
    <div className='app'>
      <div className='user-list'>
        {users.map(user => (<UserCard key ={user.email} name={user.name} email={user.email} />))}
      </div>
      <div className='buttons'>
        {buttons.map(button => (<Button key={button.text} text={button.text} />))}
      </div>
    </div>
  )
}

export default App
