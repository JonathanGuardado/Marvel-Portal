import React from 'react';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Row from "../../shared/row"
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
    console.log(characters.results)
    console.log(characters.count)
    
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
        itemSize={110}
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
