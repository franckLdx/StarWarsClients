import * as React from 'react';

import { movieStore } from "./MoviesStore";

export default React.createContext(movieStore);