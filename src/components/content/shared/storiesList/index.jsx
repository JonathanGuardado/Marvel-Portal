import React from 'react';
import { FixedSizeList as List } from "react-window";
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
        itemSize={120}
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
