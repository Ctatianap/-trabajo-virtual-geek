import React from 'react';
import Button from './Button';
         
const Option = ({id, title, value, changeValue }) => {
  return (<>
  <span id={id}> {title} </span>
  <div className="arrows">
    <Button icon="fa fa-arrow-down" onClick={() => changeValue(-1)} />
    <span>{value}</span>
    <Button icon="fa fa-arrow-up" onClick={() => changeValue(1)} />
  </div>
  </>);
}
 
export default Option;