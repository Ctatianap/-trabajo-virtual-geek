import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Option from './components/Option';
import Clock from './components/Clock';
import Button from './components/Button';
import { connect } from 'react-redux';
import { increment, pause, play, reset, changeCountDown } from './store/actionCreators';

const App = ({ breakValue, countDownState, increment, pause, play, reset, sessionValue }) => {
  const incrementBreak = (factor) => {
    increment({ option: 'break', factor })
  }
  const incrementSession = (factor) => {
    increment({ option: 'session', factor })
  }
  return (<>
  <div className="App">
      <h1>Pomodoro Clock</h1>
      <div className="row">
        <div className="col-6">
          <Option id="break-label" title="Break Length" changeValue={incrementBreak} value={breakValue}/>
        </div>
        <div className="col-6">
          <Option id="session-label" title="Session Length" changeValue={incrementSession} value={sessionValue}/>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
        <Clock />
        </div>
      </div>
      <div>
        <Button onClick={play} icon="fa fa-play"/>
        <Button onClick={pause} icon="fa fa-pause"/>
        <Button onClick={reset} icon="fa fa-sync"/>
      </div>
    </div>  
  </>
  );
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = { increment, play, pause, reset, changeCountDown}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
