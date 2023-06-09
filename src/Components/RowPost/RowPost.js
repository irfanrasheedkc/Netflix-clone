import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')

  useEffect(() => {
    console.log(props.url)
    axios.get(props.url).then((response) => {
      console.log(response.data.results[0])
      setMovies(response.data.results)
    }).catch((err) => {
      // alert('Network error...');
    })
  }, [])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleMovie = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response => {
      console.log(response);
      if (response.data.results.length != 0) {
        setUrlId(response.data.results[0].key)
      } else {
        console.log("Array empty");
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <img key={obj.id} onClick={() => handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
        )}
      </div>
      {urlId && <YouTube videoId={urlId} opts={opts} />}
    </div>
  )
}

export default RowPost
