import React, { Component } from "react";
import PropTypes from "prop-types";

class DownloadLink extends Component {
  handleDownloadClick(event) {
    event.persist();
    event.preventDefault();

    function magicDownload(text, fileName) {
      const blob = new Blob([text], {
        type: "text/csv;charset=utf8;"
      });

      // create hidden link
      const element = document.createElement("a");
      document.body.appendChild(element);
      element.setAttribute("href", window.URL.createObjectURL(blob));
      element.setAttribute("download", fileName);
      element.style.display = "";

      element.click();

      document.body.removeChild(element);
      event.stopPropagation();
    }

    const fileType = event.target.innerText;
    const text = this.props.exportFile(fileType);

    if (text instanceof Promise) {
      text.then(result => magicDownload(result, this.props.filename));
    } else {
      magicDownload(text, this.props.filename);
    }
  }

  render() {
    return React.createElement(
      this.props.tagName || "a",
      {
        style: this.props.style,
        className: this.props.className,
        href: "#",
        onClick: this.handleDownloadClick.bind(this)
      },
      this.props.label
    );
  }
}

DownloadLink.defaultProps = {
  filename: "file.txt",
  label: "Save",
  style: {
    margin: "5px 5px 0px 0px",
    textDecoration: "underline",
    color: "blue",
    cursor: "pointer"
  },
  exportFile: () => {}
};

DownloadLink.propTypes = {
  filename: PropTypes.string,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  style: PropTypes.object,
  exportFile: PropTypes.func
};

export default DownloadLink;
