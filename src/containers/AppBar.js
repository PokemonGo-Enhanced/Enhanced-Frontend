import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchAuthTicket } from 'store/modules/connection';
import EnhancedBar from 'components/AppBar';

const mapStateToProps = (state, ownProps) => {
  let conn = state.connection;
  let isActive = conn.authTicket ? conn.authTicket.expire_timestamp_ms < Date.now() : false;
  return {
    isActive: isActive,
    connState: isActive ? "CONNECTED" : "DISCONNECTED",
  }
}

const mapActionsToProps = {
  fetchAuthTicket,
};

export default connect(mapStateToProps, mapActionsToProps)(EnhancedBar);
