import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CellLinkItem } from '../components/listItem';
import { contentSelector } from '../components/content-selector';
import { fetchPeople } from "../data/actions";

const People = ({people}) => (
  <CellLinkItem to={`/people/${people.id}`}>
    {people.name}
  </CellLinkItem>
);

class PeopleList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchPeople());
  }

  render() {
    return contentSelector(this.props.state, this.getList);
  }

  getList = () => {
    return (
      this.props.people.map(people => <People key={people.name} people={people}/>)
    );
  }
}

const mapStateToProps = ({people}) => {
  return {
    state: people.state,
    people: people.data
  }
}

export default connect(mapStateToProps)(PeopleList);