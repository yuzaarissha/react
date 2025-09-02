import avatar from '../assets/unnamed.jpg'

type ProfileCardProps = {
    name: string
    email: string
}

const ProfileCard = ({name, email}: ProfileCardProps) => {
    return (
        <div className="profile-card">
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default ProfileCard;