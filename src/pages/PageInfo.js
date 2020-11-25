import React from 'react'
import Contact from "./Contact"
import {Switch, Route} from "react-router-dom"
import MovieSearch from './MovieSearch'
import Tvsearch from './Tvsearch'
import Topratedmovies from './Topratedmovies'
import Popularmovies from './Popularmovies'
import Home from './Home'

function PageInfo() {
    return (
        <div>
            <Switch>

          <Route path="/tvsearch">
            < Tvsearch/>
          </Route>

          <Route path="/topratedmovies">
            <Topratedmovies />
          </Route>

          <Route path="/popularmovies">
            < Popularmovies/>
          </Route>


          <Route path="/contact">
            <Contact/>
          </Route>

          <Route path="/moviesearch">
            < MovieSearch/>
          </Route>
         
          <Route path="/">
            < Home/>
          </Route>
        </Switch>

        </div>
    )
}

export default PageInfo