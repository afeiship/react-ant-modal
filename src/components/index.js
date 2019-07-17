import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Modal } from 'antd';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    onCancel: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onCancel: noop,
    onChange: noop
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = { value: value };
  }

  componentWillReceiveProps(inProps) {
    const { value } = inProps;
    const _value = this.state.value;
    if (value !== _value) {
      this.change(value);
    }
  }

  change(inValue, inCallback) {
    const { onChange } = this.props;
    const callback = inCallback || noop;
    const target = { value: inValue };
    this.setState(target, () => {
      onChange({ target });
      callback(inValue);
    });
  }

  _onCancel = (inEvent) => {
    const { onCancel } = this.props;
    this.change(false, () => {
      onCancel(inEvent);
    });
  };

  render() {
    const { value, onCancel, ...props } = this.props;
    const _value = this.state.value;
    return <Modal onCancel={this._onCancel} visible={_value} {...props} />;
  }
}
