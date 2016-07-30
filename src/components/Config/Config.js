import React, { PropTypes } from 'react';
import Radium from 'radium';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';

export class Config extends React.Component {
  static propTypes = {
    config: PropTypes.any.isRequired,
  }

  constructor(props, context) {
    super(props, context);
  }

  check(blub, blob) {
    console.log(blub)
    console.log(blob)
  }

  componentDidMount() {
    console.log('OHAI I MOUNTED')
    this.props.fetchConfig();
  }

  render() {
    const { config } = this.props;
    const { updateAppConfig, updateAutoReleaseConfig, updateUIConfig } = this.props;
    return (
      <Card>
      <CardText>
      <Subheader>UI Settings</Subheader>
      <List>
        <ListItem
          leftCheckbox={<Checkbox
              checked={config.ui.enableReleaseConfirmation}
              onCheck={(e, checked) => updateUIConfig('enableReleaseConfirmation', checked)}
            />}
          primaryText="Enable release confirmation"
        />
      </List>
      <Subheader>App settings</Subheader>
      <List>
        <ListItem
          leftCheckbox={<Checkbox
              checked={config.distanceFix}
              onCheck={(e, checked) => updateAppConfig('distanceFix', checked)}
            />}
          primaryText="Enable Pokemon distance fix"
        />
        <ListItem
          leftCheckbox={<Checkbox
              checked={config.pokestopRadar}
              onCheck={(e, checked) => updateAppConfig('pokestopRadar', checked)}
            />}
          primaryText="Enable Pokestop radar"
        />
        <ListItem
          leftCheckbox={<Checkbox
              checked={config.replacePokemonName}
              onCheck={(e, checked) => updateAppConfig('replacePokemonName', checked)}
            />}
          primaryText="Replace Pokemon name with IVs"
        />
      </List>
      <Subheader>Auto-release settings</Subheader>
      <List>
        <ListItem
          leftCheckbox={<Checkbox
              checked={config.autoRelease}
              onCheck={(e, checked) => updateAppConfig('autoRelease', checked)}
            />}
          primaryText="Enable Auto release"
        />
        <ListItem
          leftCheckbox={<Checkbox
              checked={config.autoReleaseExceptions.isEvolved}
              onCheck={(e, checked) => updateAutoReleaseConfig('isEvolved', checked)}
              disabled={!config.autoRelease}
            />}
          primaryText="Except evolved Pokemon"
        />
        <ListItem
          leftCheckbox={<Checkbox
              checked={config.autoReleaseExceptions.isOneOff}
              onCheck={(e, checked) => updateAutoReleaseConfig('isOneOff', checked)}
              disabled={!config.autoRelease}
            />}
          primaryText="Except unique Pokemon (no evolutions)"
        />
        <ListItem
          leftCheckbox={<Checkbox
              checked={config.autoReleaseExceptions.hasHighestCPOfKind}
              onCheck={(e, checked) => updateAutoReleaseConfig('hasHighestCPOfKind', checked)}
              disabled={!config.autoRelease}
            />}
          primaryText="Except when Pokemon has highest CP of its kind"
        />
        <ListItem
          leftCheckbox={<Checkbox
              checked={config.autoReleaseExceptions.isMostPerfectOfKind}
              onCheck={(e, checked) => updateAutoReleaseConfig('isMostPerfectOfKind', checked)}
              disabled={!config.autoRelease}
            />}
          primaryText="Except when Pokemon is most perfect (%) of its kind"
        />
      </List>
      </CardText>
      </Card>
    )
  }
}

export default Config;
