import * as React from 'react';

import { observer } from 'mobx-react';
import { IWithMovieState, withMovieStore } from 'src/store/injectors';

interface IItemOwnProps {
  id: string
}

type IItemProps = IWithMovieState & IItemOwnProps;

@observer
export class Item extends React.Component<IItemProps, {}> {

  public componentDidMount() {
    this.props.moviesStore.fetchMovie(this.props.id);
  }

  public render() {
    const movie = this.props.moviesStore.getById(this.props.id);
    return movie ? JSON.stringify(movie) : null;
  }
}

export default withMovieStore(Item);