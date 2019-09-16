import React from 'react';
import Header from './header';
import Spinner from "../shared/spinner";
import StoriesList from "../shared/storiesList";
import StoriesListFilters from "./storiesListFilters";
import DropDownComics from "../../dynamic/customDropdown/storiesComics";
import DropDownCharacters from "../../dynamic/customDropdown/storiesCharacters";
import ClearFilters from "../../dynamic/clearFilters/stories";

export default class Stories extends React.PureComponent {
    render() {
        const { isStoriesListLoading } = this.props;
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Header />
                    </div>
                </div>
                <Spinner loading={isStoriesListLoading}>
                    <div className="container">
                        <div className="d-flex w-100 justify-content-stretch list-filter-group p-4">
                            <div className="w-25 list-filter-item">
                            <DropDownCharacters isMulti title="Characters" />
                            </div>
                            <div className="w-25 pl-5 list-filter-item">
                            <DropDownComics isMulti title="Comics" />
                            </div>
                            <div className="pl-5 pt-4 list-filter-item">
                            <ClearFilters className="clear-filter" />
                        </div>
                        </div>

                    </div>
                    <div className="container">
                        <div className="items pl-3">
                            <StoriesListFilters />
                            <StoriesList />
                        </div>
                    </div>
                </Spinner>
            </div>)
    }
}
