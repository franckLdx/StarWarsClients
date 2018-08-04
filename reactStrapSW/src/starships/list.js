import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CellLinkItem } from '../components/listItem';
import { contentSelector } from '../components/content-selector';
import { fetchStarships } from "../data/actions";

const Starships = ({starship}) => (
  <CellLinkItem to={`starships/${starship.id}`}>
    {starship.name}
  </CellLinkItem>
);

class StarshipsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchStarships());
  }

  render() {
    return contentSelector(this.props.state, this.getPanel);
  }

  getPanel = () => {
    return (
      this.props.starships.map(starship => <Starships key={starship.name} starship={starship}/>)
    );
  }
}

const mapStateToProps = ({starships}) => {
  return {
    state: starships.state,
    starships: starships.data
  }
}

export default connect(mapStateToProps)(StarshipsList);