import React from 'react';
import autoBind from 'react-autobind';
import './index.scss';
import { FaSortUp,FaSortDown,FaSort } from "react-icons/fa";


class SortableColumn extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            sortType: undefined,
            sortBy:undefined
        };
      }

toggleHandler = () => {
    const {toggleHandler,columnValue} = this.props
    const {sortType} = this.state
    
    if(!sortType){
        this.setState({
            sortType:'+',
            sortBy:columnValue,
        })
    }else if(sortType==="+"){
        this.setState({
            sortType:'-',
            sortBy:"-"+columnValue,
        })
    }else if(sortType==="-"){
        this.setState({
            sortType:undefined,
            sortBy:undefined,
        })
    }    
    setTimeout(() => {        
        toggleHandler(this.state.sortBy);    
    }, 100);
    
}

  render() {
    const { columnValue,columnName, toggleHandler, sortType } = this.props;
    
    return (
      <div className="sortable-column" onClick={this.toggleHandler}>
        <div>  
           {columnName} {!this.state.sortType ? <FaSort /> : this.state.sortType ==="+" ? <FaSortUp /> : <FaSortDown />}
            </div>
      </div>
    );
  }
}
export default SortableColumn;