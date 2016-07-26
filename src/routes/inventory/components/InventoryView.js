import React from 'react';
import PokemonList from 'containers/PokemonList';
import LayoutSwitch from 'containers/LayoutSwitch';

export const InventoryView = () => (
  <div>
    <LayoutSwitch />
    <PokemonList />
  </div>
);

export default InventoryView;
