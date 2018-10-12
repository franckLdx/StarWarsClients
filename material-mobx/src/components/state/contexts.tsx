import * as React from 'react';

import { movieStore } from "./movies/State";

export default React.createContext(movieStore);