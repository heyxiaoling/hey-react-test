requirejs.config({
  baseUrl: './res/js/',
  urlArgs: "v=" +  (new Date()).getTime(),
  //urlArgs: 'v=201603081',
  paths:{
    
  },
  map: {
      '*': {
          'css': 'lib/css'
      }
  },
  shim : {
      'lib/msg': ['css!../../css/msg.css'],
  }
})

requirejs(['lib/msg'],function(msg){
   $.msg({title: '提示', text: "港口不能为空", type: 'alert'});
});
