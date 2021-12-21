import React, { useEffect } from 'react'


const Profile = (currentuser) => {
// const [Profiles, setProfiles] = useState([])




    return(
        <div>
            <h1>this is your profile profile page</h1>
            <h2>{currentuser.currentuser.username}</h2>
            <h3>Your favorite animal is a {currentuser.currentuser.favoriteAnimal}</h3>
        </div>
    )
}

export default Profile