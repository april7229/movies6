import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="main-menu">
            <ul>
                <li><Link to="/search"><span className="fa fa-search"></span> Search</Link></li>
                <li><Link to="/"><span className="fa fa-star"></span> Popular</Link></li>
                <li><Link to="/watchlist"><span className="fa fa-eye"></span> Watchlist</Link></li>                
                <li><Link to="/getRated"><span className="fa fa-heart"></span>Get Rated</Link></li>
                <li><Link to="/nowplaying"><span className="fa fa-ticket"></span>Now Playing</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;
