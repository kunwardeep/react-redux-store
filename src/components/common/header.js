import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ()=>{
    return(
      <nav>
      <IndexLink to="/" activeClassName="active"> HOME</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">ACTIVE</Link>
      {" | "}
      <Link to="courses" activeClassName="active">COURSES</Link>
      {" | "}
      <Link to="practice" activeClassName="active">PRACTICE</Link>
      <LoadingDots interval={300} dots={10}/>
      </nav>
    );
};

export default Header;
