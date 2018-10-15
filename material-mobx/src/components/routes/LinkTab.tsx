import * as React from 'react';

import Tab, { TabProps } from '@material-ui/core/Tab';
import { RouteComponentProps, withRouter } from 'react-router';


interface ILinkTabProps extends TabProps, RouteComponentProps<any> {
  to: string;
}

interface ILinkTabState {
  tabProps: Exclude<TabProps, 'onClick'>;
  to: string;
  onClick: React.EventHandler<any>;
}

class LinkTab extends React.PureComponent<ILinkTabProps, ILinkTabState> {

  public static getDerivedStateToProps(prevState: ILinkTabState, nextProps: ILinkTabProps): ILinkTabState {
    return LinkTab.getDerivedState(nextProps);
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
    this.state = LinkTab.getDerivedState(props);
  }

  public render() {
    return <Tab {...this.state.tabProps} onClick={this.state.onClick} />
  }

}

export default withRouter(LinkTab);
