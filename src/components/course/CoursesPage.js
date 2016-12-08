import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './courseList';
import {browserHistory} from 'react-router';


class CoursesPage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  courseRow(course,index){
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage(){
    browserHistory.push('/course');
  }

  render(){
    const {courses} = this.props;
    return (
      <div>
      <h1>Courses Page</h1>
      <input
        type="submit"
        value="Add Course"
        className= "btn btn-primary"
        onClick={this.redirectToAddCoursePage}/>
      <CourseList courses={courses}/>
      </div>
    );
  }
}

CoursesPage.propTypes = {
  courses:  React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
  //this comes from root reducer alias
  return{courses: state.courses};
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
