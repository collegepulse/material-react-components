import Button from '../../src/Button';
import CodeFormatter from '../utils/CodeFormatter';
import DocPage from '../DocPage';
import React from 'react';
import SnackBar, {SnackBarItem} from '../../src/SnackBar';
import TextField from '../../src/TextField';
import Variables from '../../src/variables';

class SnackBarDocs extends React.Component {
  constructor(props) {
    super(props);
    this.addSnackBarItem = this.addSnackBarItem.bind(this);
    this.state = {
      message: 'Message sent',
      actionText: 'undo'
    };
  }

  onControlPanel(key, value) {
    this.setState({[key]: value});
  }

  addSnackBarItem({addTwo}) {
    const snackbaritem = (
      <SnackBarItem
        message={this.state.message}
        action={<Button textColor={Variables.$accent}>{this.state.actionText}</Button>}
      />
    );
    this.snackbar.queue(snackbaritem);
    if (addTwo) {
      this.snackbar.queue(snackbaritem);
    }
  }

  render() {
    return (
      <DocPage
        componentName="SnackBar"
        description={
          <div>
            <p>Compared to our other APIs, SnackBar is unique in that is uses an imperative API to schedule showing a SnackBar.</p>
            <p>This API is necessary since only <a href="https://material.io/guidelines/components/snackbars-toasts.html">one SnackBar can be displayed at a time</a>.</p>
            <p>Snackbar's are managed like a first-in, first-out queue. Once a SnackBarItem is dismissed, the next scheduled one will show.</p>
          </div>
        }
        buildYourOwnCode={
          <CodeFormatter
            code={`
              import SnackBar, {SnackBarItem} from 'material-react-components/SnackBar';

              <SnackBar ref={c => (this.snackbar = c)} />

              this.snackbar.queue(
                <SnackBarItem
                  message="${this.state.message}"
                  action={<Button textColor="${Variables.$accent}">${this.state.actionText}</Button>}
                />
              );
            `}
          />
        }
        buildYourOwnControlPanel={
          <div>
            <div>
              <div style={{flex: 1, padding: '20px'}}>
                <TextField
                  onChange={e => (this.onControlPanel('message', e.target.value))}
                  label="message"
                  value={this.state.message}
                />
              </div>
              <div style={{flex: 1, padding: '20px'}}>
                <TextField
                  onChange={e => (this.onControlPanel('actionText', e.target.value))}
                  label="actionText"
                  value={this.state.actionText}
                />
              </div>
            </div>
            <Button
              buttonColor={Variables.$primary}
              textColor="#FFF"
              onClick={this.addSnackBarItem}
            >
                Schedule 1 SnackBarItem
            </Button>
            <br />
            <br />
            <Button
              buttonColor={Variables.$primary}
              textColor="#FFF"
              onClick={() => (this.addSnackBarItem({addTwo: true}))}
            >
                Schedule 2 SnackBarItem
            </Button>
            <SnackBar ref={c => (this.snackbar = c)} />
          </div>
        }
      />
    );
  }
}

export default SnackBarDocs;
