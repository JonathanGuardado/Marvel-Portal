import React from 'react';
import './index.scss';
export default class Row extends React.PureComponent {

  render() {
    const { index, style, data } = this.props;
    console.log("asssss", this.props)
    return (
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      <div className="column-picture"><img  height="108" width="110" src={data[index].thumbnail.path+"."+data[index].thumbnail.extension} alt="" className="img-responsive" /> </div>
      <div className="column">{data[index].name}</div>
      <div className="column-desciption">{data[index].description}</div>
      
      </div>
    )
  }
}