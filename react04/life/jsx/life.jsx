var React = require('react');
var ReactDOM = require('react-dom');

require('../css/index');

var Message = React.createClass({
	getInitialState:function(){
		console.log('getInitialState');
		return {
			count:0,
			message:'ssssss'
		}
	},
	getDefaultProps:function(){
		console.log('getDefaultProps');
	},
	// componentWillMount:function(){
	// 	console.log('componentWillMount');
	// 	var self = this;

	// 	this.timer=setInterval(function(){
	// 		self.setState({
	// 			count: self.state.count + 1
	// 		});
	// 	},1000)
		
	// },
	// componentDidMount:function(){
	// 	console.log('componentDidMountDidMount');
	// 	console.log( ReactDOM.findDOMNode(this) );
	// },
	// componentWillUnmount:function(){
	// 	console.log('componentWillUnmount');
	// 	clearInterval(this.timer);
	// },
	shouldComponentUpdate:function(nextProps, nextState){
		console.log('shouldComponentUpdate1');
		if(nextState.count > 3) return false;
		return true;
	},
	componentWillUpdate :function(){
		console.log('componentWillUpdate ');
	},
	componentDidUpdate :function(nextProp,nextState){
		console.log('componentDidUpdate');	
	},
	killMySelf:function(){
		ReactDOM.unmountComponentAtNode(div); 
	},
	updateMySelf:function(){
		this.setState({
			count: this.state.count + 1
		});
	},
	render:function(){
		return (
			<div>
				<h1>计数：{this.state.count}</h1>
				<button onClick={this.killMySelf}>删除组件</button>
				<button onClick={this.updateMySelf}>手动更新下组件</button>
				<ul>
					<MessageList count={"当前计数："+this.state.count}/>
				</ul>
			</div>
		)
	}
});

var MessageList = React.createClass({
	componentWillReceiveProps: function(nextProps) {
	  console.log(nextProps);
	  console.log('componentWillReceiveProps');
	},
	shouldComponentUpdate:function(nextProps, nextState){
		console.log('shouldComponentUpdate2');
		if(nextProps.count > 5)  return false;
		return true;
	},
	render:function(){
		return (
			<li>{this.props.count}</li>
		)
	}
})
var div = document.createElement('div');

document.body.appendChild(div);

ReactDOM.render(<Message />,div,function(){
	console.log('渲染完成了');
});

