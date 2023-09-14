import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import axios from "axios";

const Collection = () => {
  const navigate = useNavigate();
  let [photoData, setPhotoData] = useState([]);

  const signOutHandler = () => {
    auth.signOut();
    navigate("/");
  };

  const authKey = process.env.REACT_APP_PEXELS_API_KEY;

  useEffect(() => {
    let resultId;
    if (!JSON.parse(localStorage.getItem("collection"))) {
      resultId = [];
    } else {
      resultId = JSON.parse(localStorage.getItem("collection"));
    }

    console.log(resultId);
    let output = [];
    const gallery = async () => {
      for (let i = 0; i < resultId.length; i++) {
        let url = `https://api.pexels.com/v1/photos/${resultId[i]}`;
        let result = await axios.get(url, {
          headers: { Authorization: authKey },
        });
        output.push(result);
      }
      console.log(output);
      setPhotoData(output);
    };
    gallery();
    console.log(photoData);
  }, []);

  return (
    <div className="Collection">
      <div className="profile">
        <img src={auth?.currentUser.photoURL} alt="thumbnail" />
        <p>user : {auth?.currentUser.displayName}</p>
        <p>email : {auth?.currentUser.email}</p>
        <button onClick={signOutHandler}>Sign Out</button>
      </div>

      <div className="photos">
        {photoData &&
          photoData.map((data) => {
            return (
              <div className="photos-result" key={data.data.id}>
                <h2>photographer : {data.data.photographer}</h2>
                <button>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={data.data.src.original}
                  >
                    Download
                  </a>
                </button>
                <div className="photo-container">
                  <img src={data.data.src.large} alt="data.src.large" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Collection;
