import React from 'react';
import { FixedSizeList as List } from "react-window";
import Row from "../storyRow"
import { UncontrolledAlert  } from 'reactstrap';

export default class CharacterList extends React.PureComponent {

  render() {
    const {error, stories, size, favorites, favFlag, setFavFlag } = this.props;
    const list = favFlag ? favorites : stories.results;
    const total=favFlag ? list.length : stories.total;

    return (<div>
      {Object.keys(error).length>0 ? <UncontrolledAlert  color="danger">
        There was a problem loading stories. please try again
    </UncontrolledAlert> : ""}
      {list ?
        <div> 
         <div key={1} style={{ height: '2rem' }}>
            <div className='column-h-fav' style={{ fontWeight: favFlag ? 600 : 300 }} onClick={() => setFavFlag(!favFlag)} >
              Show Favorites
            </div>
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
          {list.length > 0 ?            
          <List
            className="List"
            height={500 * (size || 1)}
            itemCount={list.length}
            itemSize={155}
            itemData={list}
            width={"100%"}
            key={2}
          //ref={ref}
          >
            {Row}
          </List> : <center><div style={{ height: '600px', paddingTop: '200px' }}><h1> Stories Not Found</h1></div></center>}
        </div>
        : ""}
        <div className="counter"> 
        {`Showing ${list ? list.length : 0} of ${total} Stories`}
      </div>

    </div>
    );
  }

}
