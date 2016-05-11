var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
	render:function(){
		return (
			<h1>Hello heyxiaoling</h1>
		)
	}
});

var div1 = document.createElement('div');

document.body.appendChild(div1);

ReactDOM.render(<Hello />,div1);