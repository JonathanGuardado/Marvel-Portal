import React from 'react';
import Header from './header';
import Spinner from "../shared/spinner";
import ComicsList from "../shared/comicList";
import ComicsListFilters from "./comicsListFilters";
import DropDownCharacters from "../../dynamic/customDropdown/comicsCharacters";
import DropDownFormats from "../../dynamic/customDropdown/comicsFormats";
import ClearFilters from "../../dynamic/clearFilters/comics";

export default class Comics extends React.PureComponent {
    render() {
        const { isComicsListLoading } = this.props;
        
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header />
                    </div>
                </div>
                <Spinner loading={isComicsListLoading}>
                    <div className="container">
                        <div className="d-flex w-100 justify-content-stretch list-filter-group p-4">

                            <div className="w-25 list-filter-item">
                                <DropDownCharacters isMulti title="Characters" />
                            </div>
                            <div className="w-25 pl-5 list-filter-item">
                                <DropDownFormats title="Format" />
                            </div>
                            <div className="list-filter-item">
                            <ClearFilters className="clear-filter" />
                        </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="items pl-3">
                            <ComicsListFilters />
                            <ComicsList size={1.40}/>
                        </div>
                    </div>
                </Spinner>
            </div>)
    }
}
