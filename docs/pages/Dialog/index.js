import Button from '../../../src/Button';
import Dialog from '../../../src/Dialog';
import Page from '../Page';
import React from 'react';
import Styles from './Dialog.css';
import TextField from '../../../src/TextField';
import content from './content';

class DialogDocs extends React.Component {
  constructor(props) {
    super(props);
    this.onControlPanel = this.onControlPanel.bind(this);
    this.state = {
      buildYourOwnDialogOpen: false,
      title: 'Title',
      description: 'Description',
      dialog1Open: false,
      dialog2Open: false,
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
      <Page
        componentName="Dialog"
        buildYourOwn={
          <div className={Styles.flex}>
            <Button onClick={() => (this.onControlPanel('buildYourOwnDialogOpen'))}>Open Dialog</Button>
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
          </div>
        }
        buildYourOwnControlPanel={[
          <TextField
            onChange={e => (this.onControlPanel('title', e.target.value))}
            label="title"
            value={this.state.title}
          />,
          <TextField
            onChange={e => (this.onControlPanel('description', e.target.value))}
            label="description"
            value={this.state.description}
          />
        ]}
        examples={
          <div style={{display: 'flex'}}>
            <Button onClick={() => (this.onControlPanel('dialog1Open'))}>Open Dialog</Button>
            <Button onClick={() => (this.onControlPanel('dialog2Open'))}>Open Dialog (Overflow)</Button>
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
            <Dialog
              open={this.state.dialog2Open}
              onClose={() => (this.onControlPanel('dialog2Open'))}
              title={'Overflow Example'}
              description={content}
              actions={[
                <Button key={'btn1'} onClick={() => (this.onControlPanel('dialog2Open'))}>Disagree</Button>,
                <Button key={'btn2'} onClick={() => (this.onControlPanel('dialog2Open'))}>Agree</Button>
              ]}
            />
          </div>
        }
      />
    );
  }
}

export default DialogDocs;
