import React, { useState, useEffect } from "react";
import axios from "axios";

const Homepage = () => {
  let [data, setData] = useState([]);
  let [input, setInput] = useState("");
  let [page, setPage] = useState(1);
  let [collected, setCollected] = useState([]);
  //when click more, avoid keyword change before click search
  let [searchMore, setSearchMore] = useState("");

  const auth = process.env.REACT_APP_PEXELS_API_KEY;
  const defaultURL = "https://api.pexels.com/v1/curated";
  const searchURL = `https://api.pexels.com/v1/search?query=${input}`;

  const search = async (url) => {
    if (input === "") {
      url = defaultURL;
    }
    let result = await axios.get(url, { headers: { Authorization: auth } });
    setData(result.data.photos);
    setSearchMore(input);
  };

  const checkLocalStorage = () => {
    if (!JSON.parse(localStorage.getItem("collection"))) {
      setCollected([]);
    } else {
      setCollected(JSON.parse(localStorage.getItem("collection")));
    }
  };

  const morePhotos = async () => {
    let moreURL;
    setPage(page + 1);
    if (input === "") {
      moreURL = `https://api.pexels.com/v1/curated?page=${page + 1}`;
    } else {
      moreURL = `https://api.pexels.com/v1/search?query=${searchMore}&page=${
        page + 1
      }`;
    }
    let result = await axios.get(moreURL, { headers: { Authorization: auth } });
    setData(data.concat(result.data.photos));
  };

  const collectPhotoHandler = (e) => {
    collected.push(e.target.id);
    console.log(collected);
    localStorage.setItem("collection", JSON.stringify(collected));
    window.alert("Photo id is " + e.target.id);
  };

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    checkLocalStorage();
    search(defaultURL);
  }, []);

  return (
    <div className="Homepage">
      <div className="search">
        <input onChange={inputHandler} type="text" />
        <button
          onClick={() => {
            search(searchURL);
          }}
        >
          Search
        </button>
      </div>

      <div className="photos">
        {data &&
          data.map((data) => {
            return (
              <div className="photos-result" key={data.id}>
                <h2>photographer : {data.photographer}</h2>
                <button>
                  <a target="_blank" rel="noreferrer" href={data.src.original}>
                    Download
                  </a>
                </button>
                <button id={data.id} onClick={collectPhotoHandler}>
                  Collect
                </button>
                <div className="photo-container">
                  <img src={data.src.large} alt="data.src.large" />
                </div>
              </div>
            );
          })}
      </div>

      <div className="more-photos">
        <button onClick={morePhotos}>More</button>
      </div>
    </div>
  );
};

export default Homepage;
