import { useContext } from "react";
import GlobalContext from '../context/GlobalContext'

export default function Filters() {
    const { query, setQuery, fetchData } = useContext(GlobalContext)

    function onChange (e) {
        setQuery(e.target.value)
    }

    function onSubmit (e) {
        e.preventDefault()
        fetchData()
    }

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="query">Cerca</label>
            <input type="text" className="search-input" name="query" onChange={onChange} value={query} id="query" placeholder="Cerca..." />
            <button className="button">Cerca</button>
        </form>
    )
}