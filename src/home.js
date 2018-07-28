import React, { Component } from 'react';
import Navbar from './navBar';

import Market from './products';

class Home extends Component{
render(){
    return (
        <div>
        <Navbar/>
        <Market/>
        
        </div>
    )
  }
}

export default Home
