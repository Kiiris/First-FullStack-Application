import React,{useState, useEffect} from 'react'
import axios from 'axios'
import ProfileList from './ProfileList';
const BASE_URL = 'http://localhost:3001/api';

const AllProfiles = (props) => {

  const [allProfiles, setallProfiles] = useState([]);

  useEffect(() => {
    getProfiles();
  }, []);
  const getProfiles = async () => {
    const res = await axios.get(`${BASE_URL}/getallprofiles`);
    setallProfiles(res.data.profiles);
    console.log(res.data.profiles);
  };
    return(
        <div>
             <h1>See all our chefs!</h1>
      <section>
        {allProfiles.map((e) => (
          <ProfileList
            name={e.username}
            email={e.email}
            image={e.image}
            {...e}
            onClick={() => props.history.push(`/profile/${e._id}`)}
          />
        ))}
      </section>
        </div>
    )
}

export default AllProfiles