import React from 'react';
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Row from "../characterRow"
import HeroSorteableColumn from "../../../dynamic/sorteableColumn/characters"

export default class CharacterList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          filters: this.props.filters
        };
      }
    

  render() {
    const { characters } = this.props;    
    const getItemSize = index => {     
      const col=characters.results[index].description;
      if(col && col.length>800) {
      return  (col.length /200)*30
      } return 150
    }  
    return (  <div>    
     {characters.results ? 
     <div> {characters.results.length >0 ? 
      [<div key={1} style={{height:'2rem'}}>
            <div className='column-picture'>
            Picture
            </div>
            <div className='column'>
            <HeroSorteableColumn columnName="Hero" />            
            </div>
            <div className='column-description'>
            Description
            </div>      
      </div>

      ,
      <List
        className="List"
        height={600}
        itemCount={characters.count}
        itemSize={getItemSize}
        itemData={characters.results}
        width={"100%"}
        key={2}
        //ref={ref}
      >
      {Row}
      </List>]  :<center><div style={{height:'600px',paddingTop:'200px'}}><h1> Characters Not Found</h1></div></center>}
      </div>
      : "" }
       
    </div>
    );
  }

}
