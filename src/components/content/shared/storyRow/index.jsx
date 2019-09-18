import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

export default class Row extends React.PureComponent {

  render() {
    const { index, style, data, isFavorite, removeFavorite, addToFavorites } = this.props;
    let id = data[index] ? data[index].id : null;
    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        <div className="column-fav">
          {isFavorite(id) ? <IoIosHeart onClick={() => removeFavorite(data[index])} /> : <IoIosHeartEmpty onClick={() => addToFavorites(data[index])} />}
        </div>
        <div className="column-s-name">
          <Link to={`/stories/${data[index].id}`}>
            {data[index].title}
          </Link>
        </div>
        <div className="column-s-info">
          {data[index].characters.items.map(e => e.name).join(', ')}
        </div>
        <div className="column-s-info">
          {data[index].comics.items.map(e => e.name).join(', ')}
        </div>
        <div className="column-s-desciption">{data[index].description}</div>

      </div>
    )
  }
}