function getParams () {
  const decompose = decodeURIComponent(params).slice(1).split('=').join('":"').split('&').join('","');
  const params = window.location.search;

  return (params.length > 0) ? JSON.parse(`{"${decompose}"}`) : {};
};

let Originjs = {
  getParams
};

module.exports = Originjs;
