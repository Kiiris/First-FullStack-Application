import React, { useState, useEffect } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001/api/getprofilebyid/';

const Profiles = (props) => {
  const [profiles, setProfiles] = useState({});
  useEffect(() => {
    const findProfiles = async () => {
      const response = await axios.get(`${BASE_URL}${props.match.params.id}`);
      setProfiles(response.data.profiles);
    };
    findProfiles();
  }, []);
  return (
    <div>
      <h1> {profiles.username} </h1>
      <p>{profiles.favoriteAnimal}</p>
      <div />
      <p>
        {profiles.email} {profiles.email}
      </p>
    </div>
  );
};

export default Profiles;
