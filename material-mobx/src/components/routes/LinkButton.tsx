import * as React from 'react';

import { Button, IconButton } from '@material-ui/core';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { RouteComponentProps, withRouter } from 'react-router';

interface ILinkButtonOwnProps {
  className?: string;
  href: string;
}

type LinkButtonProps = ILinkButtonOwnProps & RouteComponentProps;

class LinkButtonRaw extends React.PureComponent<LinkButtonProps, {}> {
  public render() {
    return (
      <Button className={this.props.className} onClick={this.onClick}>
        {this.props.children}
      </Button >
    );
  }

  private onClick: React.EventHandler<any> = () => {
    const { history, href } = this.props;
    history.push(href);
  }

}

export const LinkButton = withRouter(LinkButtonRaw);

type LinkIconButtonProps = ILinkButtonOwnProps & IconButtonProps & RouteComponentProps;

// tslint:disable-next-line:max-classes-per-file
class LinkIconButtonRaw extends React.PureComponent<LinkIconButtonProps, {}> {
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

export const LinkIconButton = withRouter(LinkIconButtonRaw);
