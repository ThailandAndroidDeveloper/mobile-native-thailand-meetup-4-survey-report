window.dash = {
  colors: ['#4F8CFF'],
  data: () => ({ status: 'ok', data: window.SURVEY_ROWS }),
  onData: fn => fn(),
  setLink: name => history.replaceState(null, '', '#' + name)
};
