import React from 'react';
import { Col, Well, Grid } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import './components.css';

export const LinkItem = (props) => (
  <Well className='ListItem'>
    <LinkContainer to={props.to} className='ListItem-content'>
      <a>{props.children}</a>
    </LinkContainer>
  </Well>
);

export const CellLinkItem = (props) => (
  <Col lg={props.lg||2} md={props.md||3} sm={props.sm||4} >
    <LinkItem to={props.to}>{props.children}</LinkItem>
  </Col>
);

export const GridList = ({className, children}) => (
  <Grid className={`${className} GridList`}>
    {children}
  </Grid>
);

export const List2GridLinkItems = ({className, list, cast}) => (
  <GridList className={className}> {
    list
      .map(cast)
      .map(item => { return (
        <CellLinkItem key={item.key} id={item.id} to={item.to}>
          {item.data}
        </CellLinkItem>
      );})
  } </GridList>
);