var React = require('react');
var ReactDOM = require('react-dom');

var MessageBox = React.createClass({
	getInitialState: function(){
		return {
			isVisited: true,
			titleMessage: '你好，世界！',
			submess: [
				"我会",
				"我还会",
				"我花式会",
				"不说了，工头叫我搬砖",
			]
		}
	},
	render: function(){
		return (
			<div>
				<h1>{this.state.titleMessage}</h1>
				<div>
					<Submessage messages = {this.state.submess} />
				</div>
			</div>
		)
	}
});

var Submessage = React.createClass({
	render: function(){
		var msgs = [];
		this.props.messages.forEach(function(msg,index){
			msgs.push(
				<p>{msg}</p>
			);
		});
		return (<div>{msgs}</div>)
	}
});



ReactDOM.render(<MessageBox />,document.getElementById('example'),function(){
	console.log('渲染完成了');
});