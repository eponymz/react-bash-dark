'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var BaseStyles = {};

BaseStyles.ReactBash = {
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: "'Inconsolata', monospace",
  fontSize: '13px',
  fontWeight: '400',
  height: '1000px',
  width: '1200px',
  overflow: 'hidden',
  textAlign: 'left',
  border: '1px solid rgb(91,101,251)',
  backgroundColor: 'rgb(50,50,50)'
};

BaseStyles.header = {
  padding: '5px 10px 0'
};

var circle = {
  borderRadius: '50%',
  display: 'inline-block',
  height: '15px',
  marginRight: '5px',
  width: '15px'
};

BaseStyles.redCircle = Object.assign({}, circle, {
  backgroundColor: '#ff4b5a'
});

BaseStyles.yellowCircle = Object.assign({}, circle, {
  backgroundColor: '#ffbe46'
});

BaseStyles.greenCircle = Object.assign({}, circle, {
  backgroundColor: '#a5ff5a'
});

BaseStyles.body = {
  flexGrow: 1,
  overflowY: 'scroll',
  padding: '10px'
};

BaseStyles.form = {
  display: 'flex'
};

BaseStyles.input = {
  background: 'none',
  border: 'none',
  color: 'inherit',
  flexGrow: '1',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  outline: 'none !important',
  padding: 0
};

BaseStyles.prefix = {
  marginRight: '5px'
};

exports.default = {
  light: Object.assign({}, BaseStyles, {
    body: Object.assign({}, BaseStyles.body, {
      backgroundColor: '#fff',
      color: '#5D5D5D'
    }),
    header: Object.assign({}, BaseStyles.header, {
      backgroundColor: '#eee'
    }),
    prefix: Object.assign({}, BaseStyles.prefix, {
      color: '#bd081c'
    })
  }),
  dark: Object.assign({}, BaseStyles, {
    body: Object.assign({}, BaseStyles.body, {
      backgroundColor: '#000',
      color: '#d0d0d0'
    }),
    header: Object.assign({}, BaseStyles.header, {
      backgroundColor: '#000',
      borderBottom: '1px solid rgb(91,101,251)'
    }),
    prefix: Object.assign({}, BaseStyles.prefix, {
      color: '#5b65fb'
    })
  })
};
