import React, { Component } from 'react';
import { Panel, Tabs, Tab } from 'react-bootstrap'
import { fetchSpecies } from "../data/actions";
import { FilmsList, PeopleList } from '../components/detail-containres';
import { contentSelector } from '../components/content-selector';
import { connect } from 'react-redux';

export class Item extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSpecies());
  }

  render() {
    return contentSelector(this.props.state, this.getPanel);
  }

  getPanel = () => {
    return (
      <Panel key={this.props.specie.id} header={this.props.specie.name} >
        <ul>
          <li>Classification: {this.props.specie.classification}</li>
          <li>Designation: {this.props.specie.designation}</li>
          <li>Average height: {this.props.specie.average_height}</li>
          <li>Average lifespan: {this.props.specie.average_lifespan}</li>
          <li>Language: {this.props.specie.language}</li>
        </ul>
        <Tabs id='specieTabs' className='DetailsContainer' defaultActiveKey={1}>
          {<Tab eventKey={1} title="Films">{this.getFilms()}</Tab>}
          {<Tab eventKey={2} title="People">{this.getPeople()}</Tab>}
        </Tabs>
      </Panel>
    );
  }

  getFilms() {
    return <FilmsList
      className = 'Specie-GridList'
      list = { this.props.specie.films }
    />;
  }

  getPeople() {
    return <PeopleList
      className = 'Specie-GridList'
      list = { this.props.specie.people }
    />;
  }

}

export default connect(
  ({species}, {match}) => {
    const specie = species.data ? species.data.find(specie => specie.id.toString() === match.params.id) : "";
    return {
      state: species.state,
      specie
    };
  }
)(Item);