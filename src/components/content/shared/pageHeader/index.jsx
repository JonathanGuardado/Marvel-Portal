import React from 'react';
import './index.scss';

export default class PageHeader extends React.PureComponent {
  render() {
    const { children } = this.props;

    return (
      <div className="page-header mb-2">
        <div className="ml-3 mr-3">
          {children}
        </div>
      </div>
    );
  }
}
