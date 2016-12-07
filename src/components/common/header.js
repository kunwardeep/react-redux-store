import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';

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
      </nav>
    );
};

export default Header;
