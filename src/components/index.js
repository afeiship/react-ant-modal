import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Modal } from 'antd';

const CLASS_NAME = 'react-ant-modal';

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    onCancel: PropTypes.func,
    onChange: PropTypes.func
  };

  static defaultProps = {
    onCancel: noop,
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    const { value } = inProps;
    this.state = { value: value };
  }

  shouldComponentUpdate(inProps){
    const { value } = inProps;
    const _value = this.state.value;
    if (value !== _value) {
      this.change(value);
    }
    return true;
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

  onCancel = (inEvent) => {
    const { onCancel } = this.props;
    this.change(false, () => {
      onCancel(inEvent);
    });
  };

  render() {
    const { value, onCancel, ...props } = this.props;
    const _value = this.state.value;
    return <Modal onCancel={this.onCancel} visible={_value} {...props} />;
  }
}
