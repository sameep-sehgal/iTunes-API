import React from 'react';
import {HashRouter,Route} from 'react-router-dom';
import 'antd/dist/antd.css';

import Searchbar from './Searchbar';
import SongList from './songs/SongList';

const App = () => {
    return (
        <HashRouter>
            <Route path='' component={Searchbar}/>
            <Route path='' exact>
                <h3 style={{textAlign:'center'}}><strong>Search for songs on iTunes.</strong></h3>
            </Route>
            <Route path='/search' exact component={SongList}/>
        </HashRouter>
    )
}

export default App;