import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
export default class Row extends React.PureComponent {

  render() {
    const { index, style, data } = this.props;
    
    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        <div className="column-picture">
          <Link to={`/characters/${data[index].id}`}>
            <img height="108" width="110" src={data[index].thumbnail.path + "." + data[index].thumbnail.extension} alt="" className="img-responsive" />
          </Link>
        </div>
        <div className="column-name">
          <Link to={`/characters/${data[index].id}`}>
            {data[index].name}
          </Link>
        </div>
        <div className="column-desciption">{data[index].description}</div>

      </div>
    )
  }
}