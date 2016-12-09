import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading})=>{
    return(
      <nav>
      <IndexLink to="/" activeClassName="active"> HOME</IndexLink>
      {" | "}
      <Link to="about" activeClassName="active">ACTIVE</Link>
      {" | "}
      <Link to="courses" activeClassName="active">COURSES</Link>
      {" | "}
      <Link to="practice" activeClassName="active">PRACTICE</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
      </nav>
    );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
