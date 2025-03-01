import { useState } from 'react';
import axios from 'axios';
import GlobalContext from '../context/GlobalContext';

const API_KEY = 'ac6df0f6c1925ad4a10b84fbfeb6f641'
const initialData = {
    title: ""

};

function Card() {
    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState('Tesoro')

    function fetchData() {
        axios.get('https://api.themoviedb.org/3/search/movie',{
            params: {
                api_key: API_KEY,
                query
            }
        }).tnen(res => {
            console.log(res.data)
            setMovies(res.data.results)
        }).catch(err => {
            console.error(err)
            setMovies([])
        })

        return (
            <div>
                <h3>{title}</h3>
            </div>


        )


    }
}