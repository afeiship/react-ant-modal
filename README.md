# react-ant-modal
> Modal wrap for antd.

## installation
```shell
npm install -S @feizheng/react-ant-modal
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
  import ReactAntModal from '../src/main';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import { Button } from 'antd';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: false
    };

    _onChange = (e) => {
      const { value } = e.target;
      console.log('value:->', value);
    };

    _onClick = (e) => {
      this.setState({ value: true });
    };

    render() {
      const { value } = this.state;
      return (
        <div className="app-container">
          <Button onClick={this._onClick}>ShowModal</Button>
          <ReactAntModal onChange={this._onChange} value={value} />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
  ```

## documentation
- https://afeiship.github.io/react-ant-modal/
