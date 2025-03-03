import { useState, useEffect } from 'react'
import GlobalContext from './context/GlobalContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Header'
import axios from 'axios';
import DefaultLayout from './layouts/DefaultLayout'
import HomePage from './pages/HomePage'

const API_KEY = 'ac6df0f6c1925ad4a10b84fbfeb6f641'

function App() {
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const [query, setQuery] = useState('Tesoro')

    function fetchData() {
        axios.get('https://api.themoviedb.org/3/search/movie',{
            params: {
                api_key: API_KEY,
                query
            }
        }).then(res => {
            console.log(res.data)
            setMovies(res.data.results)
        }).catch(err => {
            console.error(err)
            setMovies([])
        })

        axios.get('https://api.themoviedb.org/3/search/tv',{
            params: {
                api_key: API_KEY,
                query
            }
        }).then(res => {
            console.log(res.data)
            const mappedSeries = res.data.results.map(item => {
                return{
                    ...item,
                    title: item.name,
                    original_title: item.original_name
                }
            })
            setSeries(mappedSeries)
        }).catch(err => {
            console.error(err)
            setSeries([])
        })


    }

    return (
        <GlobalContext.Provider value={{ movies, query, setQuery, fetchData}}>
            <Router>
                <Routes>
                    <Route element={<DefaultLayout />}>
                    <Route path="/" elementt={<HomePage />}/>
                    </Route>
                </Routes>
            </Router>    
        </GlobalContext.Provider>
    )
}

export default App
