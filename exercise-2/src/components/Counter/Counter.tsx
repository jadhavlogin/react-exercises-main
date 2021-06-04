import React, { Component } from 'react';
import { render } from 'react-dom';
import { inject, IWrappedComponent, observer } from 'mobx-react';
import { AppStore } from '../../Store';

import "../../index.css";

type StoreProps = {
  appStore: AppStore;
};

interface Props extends StoreProps {
  title: string;
}

@inject('appStore')
@observer
class Counter extends Component<Props> {
  static defaultProps = {} as StoreProps;
  
  render() {
    const { appStore } = this.props;

    return (
      <div className="counterContainer">
        <p>Clicks:{appStore.counter}</p>
        <button className="counterButton" onClick={() => appStore.increment()}>Increment</button>
        &nbsp;&nbsp;
        <button className="counterButton" onClick={() => appStore.decrement()}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
