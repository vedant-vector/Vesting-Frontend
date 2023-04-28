import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import tokenAddressReducer from "./features/takeTokenAddress";
import benificiaryAddressReducer from "./features/takeBenificiary";
import startdateReducer from "./features/startdate";
import enddateReducer from "./features/enddate";
import starttimeReducer from "./features/starttime";
import endtimeReducer from "./features/endtime";
import sliceTimeReducer from "./features/slicetime";
import cliffReducer from "./features/takecliff";
import tokenamountReducer from "./features/tokenAmount";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    tokenField: tokenAddressReducer,
    benificiaryField: benificiaryAddressReducer,
    startdateField: startdateReducer,
    enddateField: enddateReducer,
    starttimeField: starttimeReducer,
    endtimeField: endtimeReducer,
    slicetimeField: sliceTimeReducer,
    cliffField: cliffReducer,
    tokenAmountField: tokenamountReducer,
  },
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
