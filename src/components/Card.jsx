import flagsMap from '../libs/flags'

export default function Card({ item }) {

    const { title, original_title, vote_average, original_language } = item

    return (
        <div>
            <figure>
                <img src={imgSrc} alt="" />
            </figure>
            <h3>{ title }</h3>
            <p>{ original_title }</p>
        </div>
    )
}