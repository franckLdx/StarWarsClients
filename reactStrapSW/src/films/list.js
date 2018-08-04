import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilms } from "../data/actions";
import { LinkItem } from '../components/listItem';
import { contentSelector } from '../components/content-selector';


const Film = ({ film }) => (
  <LinkItem to={`/films/${film.episode_id}`}>
    Episode {film.episode_id} - {film.title}
  </LinkItem>
);

class FilmsList extends Component {

  componentDidMount() {
    this.props.dispatch(fetchFilms());
  }

  render() {
    return contentSelector(this.props.state, this.getList);
  }

  getList = () => {
    return (
      this.props.films.map(
        film => <Film key={film.episode_id} film={film} />
      )
    );
  }
}

export default connect(
  ({ films }) => {
    return {
      state: films.state,
      films: films.data
    };
  }
)(FilmsList);

