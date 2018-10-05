import * as React from 'react';

import Tab, { TabProps } from '@material-ui/core/Tab';
import { RouteComponentProps, withRouter } from 'react-router';

interface ILinkTabProps extends TabProps, RouteComponentProps<any> {
  to: string;
}

export interface ILinkTabState {
  tabProps: Exclude<TabProps, 'onClick'>;
  to: string;
  onClick: React.EventHandler<any>;
}

class InternalTab extends React.PureComponent<ILinkTabProps, ILinkTabState> {

  public static getDerivedStateToProps(prevState: ILinkTabState, nextProps: ILinkTabProps): ILinkTabState {
    return InternalTab.getDerivedState(nextProps);
  }

  private static getDerivedState(props: ILinkTabProps): ILinkTabState {
    const { to, history,
      location,
      match,
      staticContext,
      ...tabProps
    } = props;
    const onClick: React.EventHandler<any> = () => props.history.push(to);
    return { to, tabProps, onClick };
  }

  constructor(props: ILinkTabProps) {
    super(props)
    this.state = InternalTab.getDerivedState(props);
  }

  public render() {
    return <Tab {...this.state.tabProps} onClick={this.state.onClick} />
  }

}

export const AppLinkTab = withRouter(InternalTab);