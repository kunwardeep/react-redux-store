import React  from 'react';
import expect from 'expect';
import {mount,shallow} from 'enzyme';
import {ManageCoursePage} from './ManageCoursePage';

describe('Manage Course Page',()=>{
  it('set error message when trying to save empty title',()=>{
    //const wrapper = mount(<Provider strore={store}<ManageCoursePage/></Provider>);
    const props ={
      authors:[],
      actions:{saveCourse:() => { return Promise.resolve(); }},
      initialCourse: { id:'', watchHref: '', title:'',authorId:'',length:'',category:''}
    };
    const wrapper = mount(<ManageCoursePage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.title).toBe('Title must be atleast 5 characters');
  });
});
