import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CellLinkItem } from '../components/listItem';
import { contentSelector } from '../components/content-selector';
import { fetchSpecies } from "../data/actions";

const Species = ({specie}) => (
  <CellLinkItem to={`species/${specie.id}`}>
    {specie.name}
  </CellLinkItem>
);

class SpeciesList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSpecies());
  }

  render() {
    return contentSelector(this.props.state, this.getList);
  }

  getList = () => {
    return (
      this.props.species.map(specie => <Species key={specie.name} specie={specie}/>)
    );
  }
}

const mapStateToProps = ({species}) => {
  return {
    state: species.state,
    species: species.data
  }
}

export default connect(mapStateToProps)(SpeciesList);