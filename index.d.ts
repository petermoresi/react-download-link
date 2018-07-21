import * as React from "react";

interface DownloadLinkProps {
  filename?: string;
  label?: string | number | JSX.Element;
  style?: React.CSSProperties;
  exportFile?(): void;
}

declare class DownloadLink extends React.Component<DownloadLinkProps> {}

export default DownloadLink;
