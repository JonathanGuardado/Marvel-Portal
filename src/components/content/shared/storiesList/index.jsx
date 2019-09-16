import React from 'react';
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Row from "../storyRow"

export default class CharacterList extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
          filters: this.props.filters
        };
      }
    

  render() {
    const { stories } = this.props;    
    const getItemSize = index => {     
      const s=stories.results[index];
      const col=Math.max(s.description.length*0.75, s.comics.items.map(e => e.name).join(', ').length,s.characters.items.map(e => e.name).join(', ').length);      
      if(col>250) {
      return  (col /100)*60
      } return 130
    }   
    return (  <div>    
     {stories.results ? 
     <div> {stories.results.length >0 ? 
      [<div key={1} style={{height:'2rem'}}>
           
            <div className='column-s-name'>
            Title       
            </div>
            <div className='column-s-info'>
            Characters      
            </div>
            <div className='column-s-info'>
            Comics 
            </div>
            <div className='column-s-description'>
            Description
            </div>      
      </div>

      ,
      <List
        className="List"
        height={600}
        itemCount={stories.count}
        itemSize={getItemSize}
        itemData={stories.results}
        width={"100%"}
        key={2}
        //ref={ref}
      >
      {Row}
      </List>]  :<center><div style={{height:'600px',paddingTop:'200px'}}><h1> Stories Not Found</h1></div></center>}
      </div>
      : "" }
       
    </div>
    );
  }

}
