import React from 'react';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Row from "../../shared/comicRow"
import TittleSorteableColumn from "../../../dynamic/sorteableColumn/comics"

export default class ComicsList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          filters: this.props.filters
        };
      }
    

  render() {
    const { comics } = this.props;     
    return (  <div>    
     {comics.results ? 
     <div> {comics.results.length >0 ? 
      [<div key={1} style={{height:'2rem'}}>
            <div className='column-picture'>
            Picture
            </div>
            <div className='column'>
            <TittleSorteableColumn columnName="Title" />            
            </div>
            <div className='column-description'>
            Description
            </div>      
      </div>

      ,
      <List
        className="List"
        height={600}
        itemCount={comics.count}
        itemSize={110}
        itemData={comics.results}
        width={"100%"}
        key={2}
        //ref={ref}
      >
      {Row}
      </List>]  :<center><div style={{height:'600px',paddingTop:'200px'}}><h1> Comics Not Found</h1></div></center>}
      </div>
      : "" }
       
    </div>
    );
  }

}
