import './UserCard.css'

function UserCard({name, email}) {
    return (
        <div className='user_card'>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default UserCard