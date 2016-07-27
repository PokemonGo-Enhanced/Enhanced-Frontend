import React from 'react';
import PokemonList from 'containers/PokemonList';
import PokemonSort from 'containers/PokemonSort';
import LayoutSwitch from 'containers/LayoutSwitch';
import { Grid, Cell } from 'radium-grid';

export const InventoryView = () => (
  <div>
    <Grid style={styles.controls}>
      <Cell width="1/2" align="left" verticalAlign="middle" >
        <PokemonSort />
      </Cell>
      <Cell width="1/2" align="right" verticalAlign="middle" >
        <LayoutSwitch />
      </Cell>
    </Grid>
    <PokemonList />
  </div>
);

const styles = {
  controls: {
    justifyContent: 'space-between',
    marginBottom: '20px'
  }
};

export default InventoryView;
