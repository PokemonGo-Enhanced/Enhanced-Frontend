import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchConfig, updateAppConfig, updateAutoReleaseConfig, updateUIConfig } from 'store/modules/config';
import Config from 'components/Config';

const mapStateToProps = (state, ownProps) => {
  return {
    config: state.config || {},
  }
};

const mapActionsToProps = {
  fetchConfig,
  updateAppConfig,
  updateAutoReleaseConfig,
  updateUIConfig,
};

export default connect(mapStateToProps, mapActionsToProps)(Config);
