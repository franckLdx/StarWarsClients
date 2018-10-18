import * as React from 'react';

import { IconButton } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { RouteComponentProps, withRouter } from 'react-router';

interface ILinkIconButtonOwnProps {
  href: string;
}
type LinkIconButtonProps = ILinkIconButtonOwnProps & IconButtonProps & RouteComponentProps;

class LinkIconButton extends React.PureComponent<LinkIconButtonProps, {}> {
  public render() {
    return (
      <IconButton onClick={this.onClick}>
        {this.props.children}
      </IconButton >
    );
  }

  private onClick: React.EventHandler<any> = () => {
    const { history, href } = this.props;
    history.push(href);
  }

}

export default withRouter(LinkIconButton);
