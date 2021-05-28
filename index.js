"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DownloadLink = /*#__PURE__*/function (_Component) {
  _inherits(DownloadLink, _Component);

  var _super = _createSuper(DownloadLink);

  function DownloadLink() {
    _classCallCheck(this, DownloadLink);

    return _super.apply(this, arguments);
  }

  _createClass(DownloadLink, [{
    key: "handleDownloadClick",
    value: function handleDownloadClick(event) {
      var _this = this;

      event.persist();
      event.preventDefault();

      function magicDownload(text, fileName) {
        var blob = new Blob([text], {
          type: "text/csv;charset=utf8;"
        }); // create hidden link

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
          return magicDownload(result, _this.props.filename);
        });
      } else {
        magicDownload(text, this.props.filename);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(this.props.tagName || "a", {
        role: this.props.role || undefined,
        "data-testid": this.props.testId || undefined,
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
  filename: _propTypes["default"].string,
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].object]),
  style: _propTypes["default"].object,
  exportFile: _propTypes["default"].func
};
var _default = DownloadLink;
exports["default"] = _default;
