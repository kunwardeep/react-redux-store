import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

export class ManageCoursePage extends React.Component{
  constructor(props,context){
    super(props,context);

    this.state={
      course: Object.assign({}, props.initialCourse),
      errors:{},
      saving:false
    };
    this.updateCourseState= this.updateCourseState.bind(this);
    this.saveCourse= this.saveCourse.bind(this);
    //this.courseFormValid = this.courseFormValid.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.initialCourse.id != nextProps.initialCourse.id){
      this.setState({course : Object.assign({},nextProps.initialCourse)});
    }
  }

  updateCourseState(event){
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course:course});
  }

  courseFormValid(){
    let formIsValid = true;
    let errors = {};
    if(this.state.course.title.length < 5){
      errors.title= "Title must be atleast 5 characters";
      formIsValid = false;
    }
    this.setState({errors:errors});
    return formIsValid;
  }

  saveCourse(event){
    event.preventDefault();
    if(!this.courseFormValid()){
      return;
    }

    this.setState({saving:true });
    this.props.actions.saveCourse(this.state.course).then(()=>{
      this.setState({saving:false });
      toastr.success('CourseSaved');
      this.context.router.push('/courses');
    }).catch(error => {
      toastr.error(error);
      this.setState({saving:false });
    });
  }

  render(){
    return(
      <CourseForm
        allAuthors={this.props.authors}
        onChange={this.updateCourseState}
        onSave={this.saveCourse}
        course={this.state.course}
        errors={this.state.errors}
        saving={this.state.saving}

      />
    );
  }
}
function getCourseById(courses,id){
  const course = courses.filter(course => course.id === id);
  if(course.length > 0) {
    return course[0];
  }
  return null;
}

ManageCoursePage.propTypes = {
  initialCourse: PropTypes.object.isRequired,
  authors:PropTypes.array.isRequired,
  actions:PropTypes.object.isRequired
};

ManageCoursePage.contextTypes ={
  router:PropTypes.object
};

function mapStateToProps(state, ownProps){
  const courseId = ownProps.params.id;
  let course={id:'', watchHref:'', title:'',authorId:'',length:'',category:''};
  if(courseId && state.courses.length > 0){
    course = getCourseById(state.courses, courseId);
  }
  const authorsFormattedForDropDown = state.authors.map(author => {
    return{
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    initialCourse: course ,
    authors: authorsFormattedForDropDown
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
