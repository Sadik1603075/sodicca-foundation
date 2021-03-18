import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ArticleList from './containers/ArticleListView';
import ArticleDetailView from './containers/ArticleDetailView';

const Baseroute =(props)=>(
    <div>
        <Router>
            <Route exact path ='/post' component = {ArticleList}/>
            <Route exact path ='/:articleID' component = {ArticleDetailView}/>
        </Router>
    </div>
);

export default Baseroute;