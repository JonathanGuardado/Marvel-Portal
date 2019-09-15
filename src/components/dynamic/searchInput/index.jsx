import React from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import './index.scss';

class SearchInput extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.stateChanged ={ value: false };
    autoBind(this);
  }
  
  componentDidMount() {
    const { initValue } = this.props;
    this.setState({
      value: initValue
    });
    this.stateChanged.value=false; 
  }

  handle(e) {
    const { value } = this.state;
    const { onSearch } = this.props;
    const key = e.keyCode || e.which;
    if (key === 13) {
      onSearch(value);
    }
  }

  clickSearchIcon(){
    const { value } = this.state;
    const { onSearch } = this.props;
    onSearch(value);
  }

  handleChange(event) {    
    event.preventDefault();
    this.stateChanged.value=true;
    this.setState({ value: event.target.value });
  }


  render() {
    const { value } = this.state;
    const { placeholder,initValue } = this.props;
    const { inputClassName= this.props.inputClassName?this.props.inputClassName:"searchInput" } = this.props;
    let stateChange = this.stateChanged.value;
    this.stateChanged.value=false;
    return (
      <div className="search">        
        <input          
          type="text"
          value={stateChange==true?value:initValue}
          onKeyPress={this.handle}
          onChange={this.handleChange}
          onBlur ={this._onBlur}
          placeholder={placeholder}
          className="form-control searchInput"
          size="30"
        />&nbsp;&nbsp;
        <a href="javascript:void(0);"><span className="search-icon" onClick={this.clickSearchIcon} title="Search" /></a>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  initValue: PropTypes.string,
};

SearchInput.defaultProps = {
  onSearch: () => { },
  placeholder: '',
  initValue: '',
};

export default SearchInput;
