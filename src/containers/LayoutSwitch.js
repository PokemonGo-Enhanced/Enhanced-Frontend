import { connect } from 'react-redux';
import { switchLayout, layoutSelector } from 'store/modules/pokemons';
import { createStructuredSelector } from 'reselect';
import LayoutSwitch from 'components/LayoutSwitch';

const mapStateToProps = createStructuredSelector({
  value: layoutSelector
});

const mapActionsToProps = {
  selectLayout: (e, value) => switchLayout(value)
};

export default connect(mapStateToProps, mapActionsToProps)(LayoutSwitch);
