import * as React from 'react';

export const makeRenderPageComponent = (Component: React.ComponentType<{}>) => {
  return (params: any) => {
    return <Component />;
  }
}