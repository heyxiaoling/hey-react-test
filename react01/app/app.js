import React from 'react';
import { render } from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
        <div>Hello World</div>
        );
  }
}

render(<HelloWorld />, $('#content')[0],function(){
	console.log('渲染完成了');
});