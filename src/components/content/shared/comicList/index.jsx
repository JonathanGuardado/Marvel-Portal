import React from 'react';
import { FixedSizeList as List } from "react-window";
import Row from "../../shared/comicRow"
import SorteableColumn from "../../../dynamic/sorteableColumn";
import SearchComicsInput from '../../../dynamic/searchInput/comicsByIssueNumber';
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { FaSearch } from "react-icons/fa";
import { UncontrolledAlert  } from 'reactstrap';

export default class ComicsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  toggleHandler = () => {
    this.setState({ show: !this.state.show })
  }


  render() {
    const { error,comics, sortBy, size, favorites, favFlag, setFavFlag } = this.props;
    const list = favFlag ? favorites : comics.results;
    const total = favFlag ? list.length : comics.total;

    return (<div>      
      {Object.keys(error).length>0 ? <UncontrolledAlert  color="danger">
        There was a problem loading comics. please try again
    </UncontrolledAlert> : ""}

      {list ?
        <div>
          <div key={1} style={{ height: '2rem' }}>
            <div className='column-h-fav' style={{ fontWeight: favFlag ? 600 : 300 }} onClick={() => setFavFlag(!favFlag)} >
              Show Favorites
          </div>
            <div className='column-c-picture'>
              Picture
            </div>
            <div className='column-c-info'>
              <SorteableColumn columnName="Title" columnValue="title" toggleHandler={sortBy} />
            </div>
            <div className='column-c-info'>
              Format
            </div>
            <div className='column-c-description'>
              Description
            </div>
            <div className='column-c-info'>
              <SorteableColumn columnName="Issue Number" columnValue="issueNumber" toggleHandler={sortBy} />
              <div style={{ float: "left", paddingLeft: "5%", cursor: "pointer" }}><FaSearch id="searchPopUpTrigger" /></div>
            </div>
          </div>
          <Popover placement='top' key="issuePop" isOpen={this.state.show} target='searchPopUpTrigger' toggle={this.toggleHandler} onBlur={this.toggleHandler}>
            <PopoverHeader>Serch by Issue Number</PopoverHeader>
            <PopoverBody>
              <SearchComicsInput inputType="number" />
            </PopoverBody>
          </Popover>
          {list.length > 0 ?
            <List
              className="List"
              height={500 * (size || 1)}
              itemCount={total}
              itemSize={155}
              itemData={list}
              width={"100%"}
              key={2}
            //ref={ref}
            >
              {Row}
            </List> : <center><div style={{ height: '600px', paddingTop: '200px' }}><h1> Comics Not Found</h1></div></center>}
        </div>
        : ""}
      <div className="counter">
        {`Showing ${list ? list.length : 0} of ${total} Comics`}
      </div>


    </div>
    );
  }

}
