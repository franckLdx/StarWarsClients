import React from 'react';
import { STATE } from '../data/values';
import { Loading } from './loading';
import { ErrorComponent }  from './error';

export const contentSelector = (loadingState, componentCreator) => {
  switch (loadingState) {
    case STATE.LOADING:
    case STATE.UNDEFINED:
      return <Loading />;
    case STATE.LOADED:
      return componentCreator();
    case STATE.ERROR:
      return <ErrorComponent />
    default:
      return <Loading/>;
  }
};
