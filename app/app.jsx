const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
//App CSS
require('style-loader!css-loader!sass-loader!applicationStyles')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer} />
    </Route>
  </Router>,
  document.getElementById('app')
);
