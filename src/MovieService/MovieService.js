import Logo from "../components/Logo";
import { options } from "../config/config";

class MovieService {
    async GetMovieOnSearch(query){
        try {
            const res = await fetch(`https://api.themoviedb.org/3/search/multi?query=${query}`, options);
            const data = await res.json();
            const Movies = data.results;
            // optionally filter only movies
            const onlyMovies = Movies.filter(item => item.media_type!=="person" && item.poster_path);
            return onlyMovies
        } catch (err) {
            console.error(err);
        }
    }


    async GetTrendingForPoster(category='all'){
        try {
            const res = await fetch(`https://api.themoviedb.org/3/trending/${category}/day`, options);
            const data = await res.json();
            const Movies = data.results;
            // optionally filter only movies
            const onlyMovies = Movies.filter(item => item.media_type!=="person" && item.poster_path);
            return onlyMovies
        } catch (err) {
            console.error(err);
        }
    } 

    
    async GettingMovies(){
        try {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie`, options);
            const data = await res.json();
            console.log(data);
            
            const Movies = data.results;
            // console.log(Movies);
            return Movies
            
        } catch (err) {
            console.error(err);
        }
    } 

    async GettingTvShows(){
        try {
            const res = await fetch(`https://api.themoviedb.org/3/discover/tv`, options);
            const data = await res.json();
            console.log(data);
            
            const Movies = data.results;
            // console.log(Movies);
            return Movies
            
        } catch (err) {
            console.error(err);
        }
    } 

    async GettingPopular(category){
        
        try {
            if (category==="all") {
                
                let movies=await fetch(`https://api.themoviedb.org/3/movie/popular`, options);
                movies= await movies.json()
                movies=movies.results

                let tv=await fetch(`https://api.themoviedb.org/3/tv/popular`, options);
                tv= await tv.json()
                tv=tv.results
                
                const Movies=[...movies,...tv]
                
                return Movies

            }else{
                const res = await fetch(`https://api.themoviedb.org/3/${category}/popular`, options);
                const data = await res.json();
                const Movies = data.results;
                return Movies
            
            }
            
        } catch (err) {
            console.error(err);
        }
    } 



}

const movieService=new MovieService()

export default movieService