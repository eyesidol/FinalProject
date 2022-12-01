import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

// make env for auth0

const domain = window.__RUNTIME_CONFIG__.REACT_APP_AUTH0_DOMAIN;
const clientId = window.__RUNTIME_CONFIG__.REACT_APP_AUTH0_CLIENT_ID;

console.log(window.__RUNTIME_CONFIG__);
console.log(domain);
console.log(clientId);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
