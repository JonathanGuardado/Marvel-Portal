import React from 'react';
import { FixedSizeList as List } from "react-window";
import Row from "../../shared/comicRow"
import SorteableColumn from "../../../dynamic/sorteableColumn";
import SearchComicsInput from '../../../dynamic/searchInput/comicsByIssueNumber';
import { Popover, PopoverHeader, PopoverBody } from "reactstrap";
import { FaSearch } from "react-icons/fa";

export default class ComicsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters,
      show: false
    };
  }
  toggleHandler = () => {
    this.setState({ show: !this.state.show })
  }


  render() {
    const { comics, sortBy,size } = this.props;    

    return (<div>
      {comics.results ?
        <div> {comics.results.length > 0 ?
          [<div key={1} style={{ height: '2rem' }}>
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
              <div style={{ float: "left", paddingLeft: "5%", cursor: "pointer" }}><FaSearch id="searchPopUpTrigger"/></div>
            </div>
          </div>,
          <Popover placement='top' isOpen={this.state.show} target='searchPopUpTrigger' toggle={this.toggleHandler} onBlur={this.toggleHandler}>
            <PopoverHeader>Serch by Issue Number</PopoverHeader>
            <PopoverBody>
              <SearchComicsInput inputType="number" />
            </PopoverBody>
          </Popover>

            ,
          <List
            className="List"
            height={500*(size||1)}
            itemCount={comics.count}
            itemSize={155}
            itemData={comics.results}
            width={"100%"}
            key={2}
          //ref={ref}
          >
            {Row}
          </List>] : <center><div style={{ height: '600px', paddingTop: '200px' }}><h1> Comics Not Found</h1></div></center>}
        </div>
        : ""}

    </div>
    );
  }

}
