import React, { Component } from 'react';
// import './css/app.css';
import MovieRow from '../containers/MovieRow.js';
import $ from 'jquery';
import MovieBlock from '../containers/MovieBlock'
import Search  from '../containers/Search'


class Playing extends Component
{
    constructor( props )
    {
        super( props );
        this.state = { movies: []};
        this.Search( " " )
    }
    Search( searchTerm )
    {
        console.log( "Perform search using moviedb" );

        const urlString = "https://api.themoviedb.org/3/movie/now_playing?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=&language=en-US&page=1" + searchTerm ;

        $.ajax( {

            url: urlString,
            success: ( searchResults ) =>
            {
                console.log( "Fetched data successfully" );
                //  console.log(searchResults);
                const results = searchResults.results
                // console.log(results[0]);

                var movieRows = [];

                results.forEach( ( movie ) =>
                {
                    movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path;
                    // console.log(movie.poster_path);
                    const movieRow = <MovieRow key={movie.id} movie={movie} />
                    movieRows.push( movieRow );
                } )
                this.setState( { rows: movieRows } );
            },
            error: ( xhr, status, err ) =>
            {
                console.error( "Failed to fetch data" );
            }
        } )
    }
    searchChangeHandler( event )
    {
        console.log( event.target.value );
        const boundObject = this;
        const searchTerm = event.target.value;
        this.Search( searchTerm );
    }
    render()
    {
        return (
            <div className="nowplaying">
                <table className="titleBar">
                    <tbody>
                        <tr>
                            <td>
                                <img alt="app icon" width="50" src="movies_icon.jpg" />
                            </td>
                            <td>
                                <h1> Now Playing </h1>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <input style={{
                    fontSize: 24,
                    display: 'block',
                    width: "100%",
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 16

                }} onChange={this.searchChangeHandler.bind( this )} placeholder="Enter search term" />

                {this.state.rows}

                <input type='text' onKeyUp={e => this.search( e.target.value )} />
                <div>
                    {this.state.movies.map( movie => (
                        <MovieBlock movie={movie} key={movie.id} />
                    ) )}
                </div>
            </div>
            

        );
    }
}


export default Playing;
