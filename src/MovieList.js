import movies from "./movies"
import MovieCard from "./MovieCard"
import { useState } from "react"

const MovieList = () => {
    const [filtered, setfiltered] = useState(movies)
    const handleSearch = (event)=>{
        const { value } = event.target
        const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(value.toLowerCase()))
        setfiltered(filteredMovies)
    }
    const handleRateFilter = (event)=>{
        const { value } = event.target
        const filteredMovies = movies.filter(movie => movie.rating >= parseInt(value))
        setfiltered(filteredMovies)
    }
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 mt-10 mx-auto max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300 gap-3">
                <input onChange={handleSearch} type="text" placeholder="Search anything" className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0" name="topic" />
                <button className="flex flex-row items-center justify-center min-w-[130px] px-4 rounded-full font-medium tracking-wide border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base bg-black text-white font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3" >
                    Search
                </button>
                <select onChange={handleRateFilter}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>
            </div>
            {filtered.map(movie => <MovieCard {...movie} />)}
        </div>
    )
}

export default MovieList