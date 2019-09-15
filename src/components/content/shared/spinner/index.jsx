import React from 'react';
import { ScaleLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import './index.scss';


/**
 * @description
 * overlay a spinner to the child component
 * @example
 * <Spinner>
 *   <CustomerList />
 * </Spinner>
 */
export default class Spinner extends React.PureComponent {
  render() {
    const { loading, children } = this.props;
    return (
      // set position to relative so the spinner can be absolute to this div
      <div className="position-relative">
        {children}
        {
          // only show the overlay spinner when loading
          loading
          && (
            <div className="spinner-2 d-flex justify-content-center align-items-center w-100 h-100">
              <ScaleLoader
                color="grey"
                loading
              />
            </div>
          )
        }
      </div>
    );
  }
}
