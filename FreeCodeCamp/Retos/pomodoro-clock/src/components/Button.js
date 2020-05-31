import React from 'react';
         
const Button = ({ icon, onClick }) => <button className="btn" onClick={onClick}>
  <i className={icon}></i>
</button>;
 
export default Button;