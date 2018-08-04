import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CellLinkItem } from '../components/listItem';
import { contentSelector } from '../components/content-selector';
import { fetchVehicles } from "../data/actions";

const Vehicles = ({vehicle}) => (
  <CellLinkItem to={`vehicles/${vehicle.id}`}>
    {vehicle.name}
  </CellLinkItem>
);

class List extends Component {
  componentDidMount() {
    this.props.dispatch(fetchVehicles());
  }

  render() {
    return contentSelector(this.props.state, this.getList);
  }

  getList = () => {
    return (
      this.props.vehicles.map(vehicle => <Vehicles key={vehicle.name} vehicle={vehicle}/>)
    );
  }
}

const mapStateToProps = ({vehicles}) => {
  return {
    state: vehicles.state,
    vehicles: vehicles.data
  }
}

export default connect(mapStateToProps)(List);