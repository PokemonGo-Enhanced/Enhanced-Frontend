import { connect } from 'react-redux';
import { switchLayout, layoutSelector } from 'store/modules/pokemons';
import { createStructuredSelector } from 'reselect';
import LayoutSwitch from 'components/LayoutSwitch';

const mapStateToProps = createStructuredSelector({
  value: layoutSelector
});

const mapActionsToProps = {
  setWide: () => switchLayout('wide'),
  setSmall: () => switchLayout('small'),
  setList: () => switchLayout('list')
};

export default connect(mapStateToProps, mapActionsToProps)(LayoutSwitch);
