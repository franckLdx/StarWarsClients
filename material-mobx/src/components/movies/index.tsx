import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import List from './List'

type RouterRenderer = (props: RouteComponentProps<any>) => React.ReactNode;

const router: RouterRenderer = () => <List />

export default router;