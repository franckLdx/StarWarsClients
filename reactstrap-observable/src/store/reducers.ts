import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import resources from "./resources/reducers";

export const history = createBrowserHistory();

export const reducer = connectRouter(history)(resources);
