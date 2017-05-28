import Button from '../../src/Button';
import Dialog from '../../src/Dialog';
import React from 'react';

class DialogDocs extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDialog = this.toggleDialog.bind(this);
    this.state = {
      dialog1Open: false
    };
  }

  toggleDialog() {
    this.setState({
      dialog1Open: !this.state.dialog1Open
    });
  }

  render() {
    return (
      <div style={{maxWidth: '200px'}}>
        <h1>Dialog</h1>
        <Button onClick={this.toggleDialog}>Open Dialog</Button>
        <Dialog
          open={this.state.dialog1Open}
          onClose={this.toggleDialog}
          title={'Use Google\'s location service?'}
          description={'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'}
          actions={[
            <Button key={'btn1'} onClick={this.toggleDialog}>Disagree</Button>,
            <Button key={'btn2'} onClick={this.toggleDialog}>Agree</Button>
          ]}
        />
      </div>
    );
  }
}

export default DialogDocs;
