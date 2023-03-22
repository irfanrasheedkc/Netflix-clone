import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    console.log(props.url)
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    }).catch((err) => {
      // alert('Network error...');
    })
  }, [])

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">

        {movies.map((obj)=>
          <img className={props.isSmall ? 'smallPoster':'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
        )}

      </div>
    </div>
  )
}

export default RowPost