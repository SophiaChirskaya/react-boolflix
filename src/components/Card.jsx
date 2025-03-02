import flagsMap from '../libs/flags'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

export default function Card({ item }) {

    const { title, original_title, vote_average, original_language, poster_path } = item
    const imgSrc = poster_path ? `https://image.tmdb.org/t/p/w342${poster_path}` : `https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png`
    const vote = Math.cell(vote_average / 2)
    const stars = new Array(5)

    for (let i = 0; i < stars.length; i++) {
        stars[i] = <FontAwesomeIcon key={i} icon={i < vote ? faStar : faStarRegular} />    
    }
    
    return (
        <div className='card'>
            <figure>
                <img src={imgSrc} alt={title} className='poster'/>
            </figure>
            <div className='card-content'>
                <h3 className='title'>{ title }</h3>
                <p className='original-title'>{ original_title }</p>
                <div className='language'>
                    {
                        flagsMap [original_language] ?
                        <img src={flagsMap[original_language]} height={20} alt="" /> :
                        <p>{ original_language }</p>
                    }
                </div>
                <p className='rating'>{ vote_average } : {vote}</p>
                <div className='stars'>
                    {stars}
                </div>
            </div>
        </div>
    )
}