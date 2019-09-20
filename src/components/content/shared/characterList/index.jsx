import React from 'react';
import { FixedSizeList as List } from "react-window";
import Row from "../characterRow";
import SorteableColumn from "../../../dynamic/sorteableColumn/";
import { UncontrolledAlert  } from 'reactstrap';

export default class CharacterList extends React.PureComponent {
    
  render() {
    const { error,characters,sortBy,size,favorites,favFlag,setFavFlag } = this.props;    
    const list= favFlag ? favorites : characters.results;        
    const total=favFlag ? list.length : characters.total;

    return (  <div>
      {Object.keys(error).length>0 ? <UncontrolledAlert  color="danger">
        There was a problem loading characters. please try again
    </UncontrolledAlert> : ""}    
     {list ? 
     <div>
      <div key={1} style={{height:'2rem'}}>
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
      {list.length >0 ? 
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
      </List>  :<center><div style={{height:'600px',paddingTop:'200px'}}><h1> Characters Not Found</h1></div></center>}
      </div>
      : "" }
      <div className="counter"> 
        {`Showing ${list ? list.length : 0} of ${total} Characters`}
      </div>
       
    </div>
    );
  }

}
