import React from 'react';
import { FixedSizeList as List } from "react-window";
import Row from "../characterRow"
import SorteableColumn from "../../../dynamic/sorteableColumn/"

export default class CharacterList extends React.PureComponent {
    
  render() {
    const { characters,sortBy,size,favorites,favFlag,setFavFlag } = this.props;    
    const list= favFlag ? favorites : characters.results;
    return (  <div>    
     {list ? 
     <div> {list.length >0 ? 
      [<div key={1} style={{height:'2rem'}}>
            <div className='column-h-fav' style={{fontWeight: favFlag ? 600 : 300}} onClick={()=>setFavFlag(!favFlag)} > 
            Show Favorites
            </div>
            <div className='column-picture'>
            Picture
            </div>
            <div className='column-name'>
            <SorteableColumn columnName="Hero" columnValue="name" toggleHandler={sortBy} />            
            </div>
            <div className='column-description'>
            Description
            </div>      
      </div>

      ,
      <List
        className="List"
        height={500*(size||1)}
        itemCount={list.length}
        itemSize={155}
        itemData={list}
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
