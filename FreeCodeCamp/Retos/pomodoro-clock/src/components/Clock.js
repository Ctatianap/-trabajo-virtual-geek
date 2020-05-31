import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeCountDown } from '../store/actionCreators';

const secondsToClock = (value) => {
  const minutes = ("0" + parseInt(value / 60)).slice(-2);
  const seconds = ("0" + value % 60).slice(-2)
  return `${minutes}:${seconds}`;
}

const Clock = ({ title, value, changeValue }) => {
  useEffect(() => {
    setInterval(changeValue, 1000)
  }, [changeValue]);
  return (<>
    <div className="clock"> 
      <span>{title}</span><br />
      <span className="clockNumbers">{secondsToClock(value)}</span>
    </div>
  </>);
}
 

const mapStateToProps = (state) => ({
  title: state.countDownType,
  value: state.countDown,
});
const mapDispatchToProps = { changeValue: changeCountDown }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock)
