const globals = {
  BASE_URL: '/material-react-components'
};

export default globals;

export function makeURL(path) {
  if (!path) {
    return globals.BASE_URL;
  }
  return globals.BASE_URL + path;
}
