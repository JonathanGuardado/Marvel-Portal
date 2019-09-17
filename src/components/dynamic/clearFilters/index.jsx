import React, { PureComponent } from "react";
import "./index.scss";

class clearFilters extends PureComponent {

  render() {
    const { clearFilters } = this.props;

    return (
      <div className="clear-filters" onClick={clearFilters}>
        Clear Filters
      </div>
    );
  }
}

export default clearFilters;
