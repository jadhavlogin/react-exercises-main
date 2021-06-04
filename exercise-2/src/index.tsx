import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'mobx-react';
import store from './Store';

import App from "./App";

ReactDOM.render(
<Provider appStore={store}><App /></Provider>
, document.getElementById("root"));
