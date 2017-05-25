import Dialog from '../../src/Dialog';
import FlatButton from '../../src/FlatButton';
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
        <FlatButton onClick={this.toggleDialog}>Open Dialog</FlatButton>
        <Dialog
          open={this.state.dialog1Open}
          onClose={this.toggleDialog}
          title={'Use Google\'s location service?'}
          description={'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'}
          actions={[
            <FlatButton key={'btn1'} onClick={this.toggleDialog}>Disagree</FlatButton>,
            <FlatButton key={'btn2'} onClick={this.toggleDialog}>Agree</FlatButton>
          ]}
        />
      </div>
    );
  }
}

export default DialogDocs;
