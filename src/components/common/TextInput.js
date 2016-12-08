import React, { PropTypes } from 'react';

const TextInput  = ({name,label,value,onChange,error,placeHolder}) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0){
    wrapperClass+= " " + 'has-error';
  }
  return (
    <div className={wrapperClass}>
      <lebel htmlFor={name}>{label}</lebel>
      <div>
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          />
      </div>
    </div>
  );
};

TextInput.propTypes  = {
  name : PropTypes.string.isRequired,
  label : PropTypes.string.isRequired,
  onChange : PropTypes.func.isRequired,
  placeHolder : PropTypes.string,
  value : PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
