import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import AppBar from 'material-ui/AppBar';
import MenuItemLink from 'components/MenuItemLink';

export class EnhancedBar extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    connState: PropTypes.string.isRequired,
  }

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.fetchAuthTicket();
  }

  render() {
    const { isActive, connState } = this.props;
    let style = { 'textAlign': 'right', color: 'black' };

    return (
      <AppBar showMenuIconButton={false}
              title={connState}
              titleStyle={style}
      />
    )
  }

}


export default EnhancedBar;
