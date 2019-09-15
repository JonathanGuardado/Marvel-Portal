import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import "./index.scss";

class clearFilters extends PureComponent {
  constructor(props) {
    super(props);
  }

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
