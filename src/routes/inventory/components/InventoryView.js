import React from 'react';
import PokemonList from 'containers/PokemonList';
import LayoutSwitch from 'containers/LayoutSwitch';
import { Grid, Cell } from 'radium-grid';

export const InventoryView = () => (
  <div>
    <Grid style={styles.controls}>
      <Cell width="1/2" />
      <Cell width="1/2" align="right"><LayoutSwitch /></Cell>
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
