import { CSSProperties, Component } from "react";

interface DownloadLinkProps {
  filename?: string;
  label?: string | number | JSX.Element;
  style?: CSSProperties;
  role?: string;
  testId?: string;
  tagName?: string;
  exportFile?(type?: string): void;
}

declare class DownloadLink extends Component<DownloadLinkProps> { }

export default DownloadLink;
