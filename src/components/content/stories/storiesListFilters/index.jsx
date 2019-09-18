import React from 'react';
import _ from 'lodash';

export default class StoriesListFilters extends React.PureComponent {
  constructor(props) {
    super(props);
    this.updateFilters = this.updateFilters.bind(this);
    this.state = {
      filterTimeout: 0,
      filters: this.props.filters,
      init: true
    }
  }
  componentDidMount() {
    if (this.state.init) {
      this.setState({ init: false });
      const { filters, getStoriesList, characterId, comicId } = this.props;
      filters.sortBy=null;
      if (characterId) {
        filters.characters = [{ id: characterId }];
      } else {
        filters.characters = null;
      }
      if (comicId) {
        filters.comics = [{ id: comicId }];
      } else {
        filters.comics = null;
      }
      getStoriesList(filters);
    }
  }

  componentDidUpdate() {
    const { filters } = this.props;
    if (!_.isEqual(this.state.filters, filters)) {
      this.setState({ filters: filters });
      this.updateFilters(filters);
    }
  }

  updateFilters(localFilter) {
    const { getStoriesList } = this.props;
    this.setState({
      filterTimeout: setTimeout(function () {
        getStoriesList(localFilter);
      }, 2000)
    });
  }

  render() {
    return null;
  }

}