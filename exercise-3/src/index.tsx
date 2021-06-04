import React from "react";
import ReactDOM from "react-dom";
import {ApolloClient, InMemoryCache} from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
  });

import App from "./App";

ReactDOM.render(<ApolloProvider client={client}><App /></ApolloProvider>, document.getElementById("root"));
