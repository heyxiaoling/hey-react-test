var React = require('react');
var ReactDOM = require('react-dom');

require('../css/b');
require('../css/a');

var Message = React.createClass({
	getInitialState:function(){
		console.log('getInitialState');
		return {
			count:0,
			message:'ssssss'
		}
	},
	render:function(){
		return (
			<div>
				<h1>计数：{this.state.count}</h1>
				
			</div>
		)
	}
});


var div = document.createElement('div');

document.body.appendChild(div);

ReactDOM.render(<Message />,div,function(){
	console.log('渲染完成了');
});

