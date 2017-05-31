import DocPage from '../DocPage';
import Button from '../../src/Button';
import Dialog from '../../src/Dialog';
import React from 'react';
import TextField from '../../src/TextField';

class DialogDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      buildYourOwnDialogOpen: false,
      title: 'Title',
      description: 'Description',
      dialog1Open: false
    };
  }

  onControlPanel(key, value) {
    if (value) {
      return this.setState({[key]: value});
    }
    return this.setState({[key]: !this.state[key]});
  }


  render() {
    return (
      <DocPage
        componentName="Dialog"
        buildYourOwn={
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Dialog
              open={this.state.buildYourOwnDialogOpen}
              onClose={() => (this.onControlPanel('buildYourOwnDialogOpen'))}
              title={this.state.title}
              description={this.state.description}
              actions={[
                <Button key={'btn1'} onClick={() => (this.onControlPanel('buildYourOwnDialogOpen'))}>Disagree</Button>,
                <Button key={'btn2'} onClick={() => (this.onControlPanel('buildYourOwnDialogOpen'))}>Agree</Button>
              ]}
            />
            <Button onClick={() => (this.onControlPanel('buildYourOwnDialogOpen'))}>Open Dialog</Button>
          </div>
        }
        buildYourOwnControlPanel={
          <div style={{display: 'flex'}}>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('title', e.target.value))}
                label="title"
                value={this.state.title}
              />
            </div>
            <div style={{flex: 1, padding: '20px', flexBasis: '25%'}}>
              <TextField
                onChange={e => (this.onControlPanel('description', e.target.value))}
                label="description"
                value={this.state.description}
              />
            </div>
          </div>
        }
        examples={
          <div style={{display: 'flex'}}>
            <Button onClick={() => (this.onControlPanel('dialog1Open'))}>Open Dialog</Button>
            <Dialog
              open={this.state.dialog1Open}
              onClose={() => (this.onControlPanel('dialog1Open'))}
              title={'Use Google\'s location service?'}
              description={'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'}
              actions={[
                <Button key={'btn1'} onClick={() => (this.onControlPanel('dialog1Open'))}>Disagree</Button>,
                <Button key={'btn2'} onClick={() => (this.onControlPanel('dialog1Open'))}>Agree</Button>
              ]}
            />
          </div>
        }
      />
    );
  }
}

export default DialogDocs;
