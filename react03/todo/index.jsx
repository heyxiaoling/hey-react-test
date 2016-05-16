import React from 'react';
import ReactDOM from 'react-dom';
import app from './app';
import Item from './item';
require('./css/base');
require('./css/index');

class Main extends React.Component{
	render(){
		var dataArr = this.props.dataArr;
		var content,footer,num=0;

		dataArr.reduce((n,item)=>{
			num = item.compile ? num : num+1;
		},0);


		if(dataArr.length !== 0){
			content = <section className="main">
			                <input className="toggle-all" type="checkbox" checked={num === 0} onChange={this.toggleAll} />
			                <ul className="todo-list">
			                    {
			                    	dataArr.map(function(item,index){
			                    		return <Item key={index} {...item} toggle={app.toggle.bind(this,item.id)} />
			                    	}.bind(this))
			                    }
			                </ul>
			            </section>;
            footer = <footer className="footer">
			            <span className="todo-count">
			            	<strong>0</strong>
			            	<span>条未选中</span>
			            </span>
		            </footer>
		}
		
		return (
			<div>
				<header className="header" >
	                <h1>todos</h1>
	                <input
	                	onKeyDown={this.handleKeyDown} 
	                	className="new-todo" 
	                	placeholder="请输入内容" 
	                	defaultValue="" />
	            </header>
	            {content}
	            {footer}
			</div>
		)
	}
	handleKeyDown(ev){
		if(ev.keyCode === 13){
			app.addItem(ev.target.value);
			ev.target.value = "";
		}
	}
	toggleAll(ev){
		app.toggleAll(ev.target.checked);
	}




}





var section = document.createElement('section');
section.className = "todoapp";


document.body.appendChild(section);



function render(dataArr){
	ReactDOM.render(<Main dataArr={dataArr} />,section);
}

render(app.dataArr);

app.render = render;






