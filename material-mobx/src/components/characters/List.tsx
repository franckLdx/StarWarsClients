import { Grid, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ItemIcon from '@material-ui/icons/RadioButtonChecked';
import { computed } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { ICharacter, sortByName } from 'src/model/Characters';
import { IWithCharacterStore, withCharactersStore } from 'src/store/injectors';

type IListProps = IWithCharacterStore;

@observer
class List extends React.Component<IListProps, {}> {
  public componentDidMount() {
    this.props.charaterStore.fetchAll();
  }

  public render() {
    const characters = this.byName;
    return (
      <Grid container={true} justify="center">
        {characters.map(character => this.getItem(character))}
      </Grid>
    )
  }

  private getItem = (character: ICharacter) => (
    <Grid
      item={true}
      xs={5}
      key={character.id}
    >
      <ListItem key={character.id}>
        <ListItemIcon><ItemIcon /></ListItemIcon><ListItemText primary={character.name} />
      </ListItem>
    </Grid>
  );

  @computed
  private get byName() {
    return sortByName(this.props.charaterStore.all);
  }
}

export default withCharactersStore(List);