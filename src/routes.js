/**
 * Created by Cristian on 4/16/2017.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import ToDoPage from './components/toDos/ToDoPage';
import ManageToDoPage from './components/toDos/ManageToDoPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="items" component={ToDoPage}/>
        <Route path="item" component={ManageToDoPage}/>
        <Route path="item/:id" component={ManageToDoPage}/>
    </Route>
);
