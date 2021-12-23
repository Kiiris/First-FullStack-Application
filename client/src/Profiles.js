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
      <img src="https://cdnb.artstation.com/p/marketplace/presentation_assets/000/531/745/large/file.jpg?1601392062" />
      <h1 id="niceheader"> This is {profiles.username}'s profile </h1>
      <p className="psections">
        Their favorite animal is a {profiles.favoriteAnimal}
      </p>
      <div />
      <h1>Some things about them...</h1>
      <p className="psections">{profiles.description}</p>
      <p id="allneeded">Contact @ {profiles.email}</p>
    </div>
  );
};

export default Profiles;
