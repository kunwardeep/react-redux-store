import React from 'react';
import * as courseActions from '../../actions/courseActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class PracticePage extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state = {numbers:{firstNum:0, secondNum:0}};
    this.onFirstNumberChange = this.onFirstNumberChange.bind(this);
    this.onSecondNumberChange = this.onSecondNumberChange.bind(this);
    this.onClickAdd = this.onClickAdd.bind(this);
  }

  onFirstNumberChange(event){
      const numbers = this.state.numbers;
      numbers.firstNum = event.target.value;
      this.setState({numbers});
  }

  onSecondNumberChange(event){
      const numbers = this.state.numbers;
      numbers.secondNum = event.target.value;
      this.setState({numbers});
  }

  onClickAdd(){
    this.props.actions.addNumbers(this.state.numbers);
  }

  numberRow(numberRow,index){
     const sum = +numberRow.firstNum + +numberRow.secondNum;
      return <div key={index}>{sum}</div>;
  }

  render(){
    return (
      <div>
      <h1>Practice</h1>
      <p>This application uses react</p>
      {this.props.numbers.map(this.numberRow)}
      <br/>
      firstNum :
      <input
        type="number"
        min="0"
        onChange={this.onFirstNumberChange}
        value={this.state.numbers.firstNum}/>
       secondNum :
      <input
        type="number"
        min="0"
        onChange={this.onSecondNumberChange}
        value={this.state.numbers.secondNum}/>
      <input
        type="submit"
        value="Save"
        onClick={this.onClickAdd} />
      </div>
    );
  }
}

PracticePage.propTypes = {
  numbers: React.PropTypes.array.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state,ownProps){
  //this comes from root reducer alias
  return{numbers: state.numbers};
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(PracticePage);
