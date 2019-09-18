import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty,IoIosHeart } from "react-icons/io";

export default class Row extends React.PureComponent {


  render() {
    const { index, style, data,isFavorite,removeFavorite,addToFavorites } = this.props;
    let id=data[index] ? data[index].id : null;

    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        <div className="column-fav">
        {isFavorite(id) ? <IoIosHeart onClick={() => removeFavorite(data[index])}/> : <IoIosHeartEmpty onClick={() => addToFavorites(data[index])}/>}        
        </div>
        <div className="column-picture">
          <Link to={`/characters/${data[index].id}`}>
            <img height="140" width="120" src={data[index].thumbnail.path + "." + data[index].thumbnail.extension} alt="" className="img-responsive" />
          </Link>
        </div>
        <div className="column-name">
          <Link to={`/characters/${data[index].id}`}>
            {data[index].name}
          </Link>
        </div>
        <div className="column-description">{data[index].description}</div>

      </div>
    )
  }
}