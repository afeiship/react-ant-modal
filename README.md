# react-ant-modal
> Modal wrap for antd.

## install
```shell
npm install -S afeiship/react-ant-modal
```

## usage
1. import css
  ```scss
  @import "~react-ant-modal/style.scss";

  // customize your styles:
  $react-ant-modal-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntModal from 'react-ant-modal';
  
  // your app:
  class App extends React.Component{
    render(){
      return (
        <ReactAntModal />
      )
    }
  }

  // render to dom:
  ReactDOM.render(<App/>, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-ant-modal/
