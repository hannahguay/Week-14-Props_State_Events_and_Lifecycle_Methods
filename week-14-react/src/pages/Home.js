import React, { useState } from 'react'
import Search from '../components/Search';
import MovieList from '../components/MovieList'
import axios from 'axios'
import Results from '../components/Results';
import Popup from '../components/Popup';

export default function Home() {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    });

    const apiurl = "http://www.omdbapi.com/?apikey=1401d471&";

    const search = (e) => {
        if (e.key === "Enter") {
            axios(apiurl + "&s=" + state.s).then(({ data }) => {
                let results = data.Search;

                setState(prevState => {
                    return {...prevState, results: results}
                })
            });
        }
    }

    const handleInput = (e) => {
        let s = e.target.value;
        setState(prevState => {
            return {...prevState, s: s}
        });
    }
    
    const openPopup = id => {
        axios(apiurl + "&i=" + id).then(({data}) => {
            let result = data;

            console.log(id)
            console.log(result);

            setState(prevState => {
                return{...prevState, selected: result}
            })
        })
    }

    const closePopup = () => {
        setState(prevState => {
            return {...prevState, selected: {}}
        })
    }

  return (
    <div>
        <header>
            <h1>Practice Movie Database</h1>
        </header>
        <main>
            <MovieList />
            {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> :false}
            <Search handleInput={handleInput} search={search} />
            <Results results={state.results} openPopup={openPopup}/>
        </main>
    </div>
  )
}
