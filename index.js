"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DownloadLink = function (_Component) {
  _inherits(DownloadLink, _Component);

  function DownloadLink() {
    _classCallCheck(this, DownloadLink);

    return _possibleConstructorReturn(this, (DownloadLink.__proto__ || Object.getPrototypeOf(DownloadLink)).apply(this, arguments));
  }

  _createClass(DownloadLink, [{
    key: "handleDownloadClick",
    value: function handleDownloadClick(event) {
      var _this2 = this;

      event.persist();
      event.preventDefault();

      function magicDownload(text, fileName) {
        var blob = new Blob([text], {
          type: "text/csv;charset=utf8;"
        });

        // create hidden link
        var element = document.createElement("a");
        document.body.appendChild(element);
        element.setAttribute("href", window.URL.createObjectURL(blob));
        element.setAttribute("download", fileName);
        element.style.display = "";

        element.click();

        document.body.removeChild(element);
        event.stopPropagation();
      }

      var fileType = event.target.innerText;
      var text = this.props.exportFile(fileType);

      if (text instanceof Promise) {
        text.then(function (result) {
          return magicDownload(result, _this2.props.filename);
        });
      } else {
        magicDownload(text, this.props.filename);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(this.props.tagName || "a", {
        style: this.props.style,
        className: this.props.className,
        href: "#",
        onClick: this.handleDownloadClick.bind(this)
      }, this.props.label);
    }
  }]);

  return DownloadLink;
}(_react.Component);

DownloadLink.defaultProps = {
  filename: "file.txt",
  label: "Save",
  style: {
    margin: "5px 5px 0px 0px",
    textDecoration: "underline",
    color: "blue",
    cursor: "pointer"
  },
  exportFile: function exportFile() {}
};

DownloadLink.propTypes = {
  filename: _propTypes2.default.string,
  label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.object]),
  style: _propTypes2.default.object,
  exportFile: _propTypes2.default.func
};

exports.default = DownloadLink;
