import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Vote from '../../components/Vote/Vote';
import VoteGuide from '../../components/VoteGuide/VoteGuide';
import Settings from '../../components/Settings/Settings';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import Dashboard from '../../components/Dashboard/Dashboard';

export default function Main() {
  return (
    <div className='main flex flex-row'>
      <Sidebar />
      <div className='content w-full flex flex-col'>
        <SearchBar />
        <hr />
        <Switch>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/vote'>
            <Vote />
          </Route>
          <Route exact path='/voters-guidelines'>
            <VoteGuide />
          </Route>
          <Route exact path='/settings'>
            <Settings />
          </Route>
          <Route component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}
