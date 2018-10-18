import * as React from 'react';

import Tab, { TabProps } from '@material-ui/core/Tab';
import { RouteComponentProps, withRouter } from 'react-router';


interface ILinkTabProps extends TabProps, RouteComponentProps<any> {
  href: string;
}

interface ILinkTabState {
  tabProps: Exclude<TabProps, 'onClick'>;
  href: string;
  onClick: React.EventHandler<any>;
}

class LinkTab extends React.PureComponent<ILinkTabProps, ILinkTabState> {

  public static getDerivedStateToProps(prevState: ILinkTabState, nextProps: ILinkTabProps): ILinkTabState {
    return LinkTab.getDerivedState(nextProps);
  }

  private static getDerivedState(props: ILinkTabProps): ILinkTabState {
    const { href, history,
      location,
      match,
      staticContext,
      ...tabProps
    } = props;
    const onClick: React.EventHandler<any> = () => props.history.push(href);
    return { href, tabProps, onClick };
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
