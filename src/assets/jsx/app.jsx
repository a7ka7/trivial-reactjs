import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import ProgressBar from './components/ProgressBar';
import Button from './components/Button';
import InputRadio from './components/InputRadio';


var App = React.createClass({

    timer : undefined,

    getInitialState : function() {
      return {
        elapsed: 0.0
      }
    },

    componentDidMount: function() {
      this.timer = setInterval(this.tick, 100);
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
    },

    tick: function(){
        let currentElapsed = this.state.elapsed;
        let newElapsed = (currentElapsed >= 30) ? 0 : currentElapsed+0.1;
        this.setState({elapsed: newElapsed });
    },

    testClick: function(event) {
      console.log('clicked');
    },

    render : function() {

        let percent = (100*this.state.elapsed)/30;

        return (
          <div className="app-component">
            <Header subtitle="of numbers"/>
            <br/>
            <ProgressBar percent={percent} />
            <br/>
            <InputRadio
              id="answer-option-1"
              name="answer-option"
              label="This is the label 1"
              value="1" />
            <br/>
            <InputRadio
              id="answer-option-2"
              name="answer-option"
              label="This is the label 2"
              value="2" />
            <br/>
            <p><Button text="Start" onClick={this.testClick} /></p>
            <br/>
            <p><Button text="End" /></p>
          </div>
        );
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
