import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

export const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apiData, setapiData] = useState({
    name: '',
    key: '',
    published_at: '',
    typeof: ''
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhM2I2OGMzY2QwYTA2ZGFkNjEyMTZkNzI2ZTQ5M2YyYiIsIm5iZiI6MTc0MTQxNjQwMC4wMDMsInN1YiI6IjY3Y2JlN2NmN2M5NjdlMDRkNTViYTBmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tMLoB8cKQqzoa9T3D-VzARrXZdbOrOLDYEs2BAkkwYM'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])

  return (
    <div className='player'>
        <img src={back_arrow_icon} alt="back_arrow_icon"  onClick={() => {navigate(-2)}}/>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`} title='Trailer' allowFullScreen frameborder="0" width= '90%' height= '90%'>
          
        </iframe>
        <div className="player-info">
            <p>{apiData.published_at.slice(0, 10)}</p>
            <p>{apiData.name}</p>
            <p>{apiData.typeof}</p>
          </div>
    </div>
  )
}

export default Player