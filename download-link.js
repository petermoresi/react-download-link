'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DownloadLink = _react2.default.createClass({
  displayName: 'DownloadLink',


  propTypes: {
    filename: _react2.default.PropTypes.string,
    label: _react2.default.PropTypes.string,
    style: _react2.default.PropTypes.object,
    exportFile: _react2.default.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      filename: 'file.txt',
      label: 'Save',
      style: { margin: '5px 5px 0px 0px', textDecoration: 'underline', color: 'blue', cursor: 'pointer' },
      exportFile: function exportFile() {}
    };
  },


  handleDownloadClick: function handleDownloadClick(event) {
    var _this = this;

    function magicDownload(text, fileName) {
      var blob = new Blob([text], {
        type: 'text/csv;charset=utf8;'
      });

      // create hidden link
      var element = document.createElement('a');
      document.body.appendChild(element);
      element.setAttribute('href', window.URL.createObjectURL(blob));
      element.setAttribute('download', fileName);
      element.style.display = '';

      element.click();

      document.body.removeChild(element);
      event.stopPropagation();
    }

    var fileType = event.target.innerText,
        text = this.props.exportFile(fileType);

    if (text instanceof Promise) {
      text.then(function (result) {
        return magicDownload(result, _this.props.filename);
      });
    } else {
      magicDownload(text, this.props.filename);
    }
  },

  render: function render() {
    return _react2.default.createElement(
      'a',
      { style: this.props.style,
        href: 'javascript:void(0)',
        onClick: this.handleDownloadClick },
      this.props.label
    );
  }
});

exports.default = DownloadLink;
