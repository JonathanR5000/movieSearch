import React from 'react'
import Watchlist from "./Watchlist"
import {Switch, Route} from "react-router-dom"
import MovieSearch from './MovieSearch'
import Tvsearch from './Tvsearch'
import Topratedmovies from './Topratedmovies'
import Popularmovies from './Popularmovies'
import Home from './Home'
import MovieSearching from './MovieSearching'
import TvSearching from './TvSearching'
function PageInfo() {
    return (
        <div >
          <Switch>
          {/* <Route path="/tvsearch"> < Tvsearch/> </Route>*/}
            <Route path="/tvsearch"> < TvSearching/> </Route>
            <Route path="/topratedmovies"> <Topratedmovies /> </Route>
            <Route path="/popularmovies"> < Popularmovies/> </Route>
            <Route path="/watchlist"> <Watchlist/> </Route>
            {/*<Route path="/moviesearch"> < MovieSearch/> </Route>*/}
            <Route path="/moviesearch"> < MovieSearching/> </Route>
            <Route path="/"> < Home/> </Route>
          </Switch>
        </div>
    )
}

export default PageInfo