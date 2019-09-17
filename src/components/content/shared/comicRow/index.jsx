import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
export default class Row extends React.PureComponent {

  render() {
    const { index, style, data } = this.props;
    
    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        <div className="column-c-picture">
          <Link to={`/comics/${data[index].id}`}>
            <img height="140" width="120" src={data[index].thumbnail.path + "." + data[index].thumbnail.extension} alt="" className="img-responsive" />
          </Link>
        </div>
        <div className="column-c-info">
          <Link to={`/comics/${data[index].id}`}>
            {data[index].title}
          </Link>
        </div>
        <div className="column-c-info pl-3">          
            {data[index].format}          
        </div>
        <div className="column-c-description"><p>{data[index].description}</p></div>
        
        <div className="column-c-info pl-5">          
            {data[index].issueNumber}          
        </div>

      </div>
    )
  }
}