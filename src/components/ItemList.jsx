import Card from './Card';

export default function ItemList({ items = [], title }) {

    return(
        <section className='main-container'>
            <div className='slider'>
                <h2>{ title }</h2>
            </div>
            <div className='container'>
                <ul className='row'>
                    {items.map((item) => (
                        <li key={item.id}>
                            <Card item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}