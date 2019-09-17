import React from 'react';
import { FixedSizeList as List } from "react-window";
import Row from "../storyRow"

export default class CharacterList extends React.PureComponent {

  render() {
    const { stories, size, favorites, favFlag, setFavFlag } = this.props;
    const list = favFlag ? favorites : stories.results;

    return (<div>
      {list ?
        <div> {list.length > 0 ?
          [<div key={1} style={{ height: '2rem' }}>
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

            ,
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
          </List>] : <center><div style={{ height: '600px', paddingTop: '200px' }}><h1> Stories Not Found</h1></div></center>}
        </div>
        : ""}

    </div>
    );
  }

}
