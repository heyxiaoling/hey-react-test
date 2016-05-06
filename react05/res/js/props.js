webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(33);

	var MessageBox = React.createClass({displayName: "MessageBox",
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
				React.createElement("div", null, 
					React.createElement("h1", null, this.state.titleMessage), 
					React.createElement("div", null, 
						React.createElement(Submessage, {messages: this.state.submess})
					)
				)
			)
		}
	});

	var Submessage = React.createClass({displayName: "Submessage",
		render: function(){
			var msgs = [];
			this.props.messages.forEach(function(msg,index){
				msgs.push(
					React.createElement("p", null, msg)
				);
			});
			return (React.createElement("div", null, msgs))
		}
	});



	ReactDOM.render(React.createElement(MessageBox, null),document.getElementById('example'),function(){
		console.log('渲染完成了');
	});

/***/ }
]);