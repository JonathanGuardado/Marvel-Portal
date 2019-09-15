import React from 'react';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Row from "../../shared/row"

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
       <List
      className="List"
      height={600}
      itemCount={characters.count}
      itemSize={110}
      itemData={characters.results}
      width={"100%"}
      //ref={ref}
    >
    {Row}
    </List>         : "Loading..." }
       
    </div>
    );
  }

}
