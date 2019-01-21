// import React, { Component } from 'react'
// import { getPopular } from '../services/movies.service'
// import MovieBlock from '../containers/MovieBlock'
// import { getSearch } from '../services/movies.service'


// class Popular extends Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       movies: []
//     }
//   }

//   componentWillMount () {
//     getPopular().then(res => this.setState({ movies: res }))
//   }
//   search( query )
//   {
//     getSearch( query ).then( res => this.setState( { movies: res } ) )
//   }
//   render () {
//     let movies = this.state.movies.map(movie => (
//       <MovieBlock movie={movie} key={movie.id} />
//     ))

//     return (
//       <div className='Popular'>
//         <h2>Popular Movies</h2>
//         {movies}
//       </div>
//     )
//   }
// }

// export default Popular

import React, { Component } from 'react';

import MovieRow from '../containers/MovieRow.js';
import $ from 'jquery';

class Popular extends Component
{
  constructor( props )
  {
    super( props );
    this.state = {};
    this.performSearch( " " )
  }
  performSearch( searchTerm )
  {
    console.log( "Perform search using moviedb" );

    const urlString = "http://api.themoviedb.org/3/movie/popular?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm;


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
    this.performSearch( searchTerm );
  }
  render()
  {
    return (
      <div className="Popular">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="movies_icon.jpg" />
              </td>
              <td>
                <h1> Most Popular </h1>
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
      </div>

    );
  }
}


export default Popular;
