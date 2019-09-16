import React from 'react';
import Header from './header';
import Spinner from "../shared/spinner";
import ComicsList from "../shared/comicList";
import ComicsListFilters from "./comicsListFilters";
import DropDownCharacters from "../../dynamic/customDropdown/comicsCharacters";
import DropDownStories from "../../dynamic/customDropdown/comicsStories";
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
                                <DropDownStories isMulti title="Stories" />
                            </div>
                            <div className="pl-5 pt-4 list-filter-item">
                            <ClearFilters className="clear-filter" />
                        </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="items pl-3">
                            <ComicsListFilters />
                            <ComicsList />
                        </div>
                    </div>
                </Spinner>
            </div>)
    }
}
