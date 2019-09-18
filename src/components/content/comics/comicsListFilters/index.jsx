import React from 'react';
import _ from 'lodash';

export default class ComicsListFilters extends React.PureComponent {
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
      const { filters, getComicsList,storyId, characterId } = this.props;
      filters.format=null;
      filters.issue=null;
      if (storyId) {
        filters.stories = [{ id: storyId }];
      }else{
        filters.stories = null;
      }
      if (characterId) {
        filters.characters = [{ id: characterId }];
      }else{
        filters.characters = null;
      }
      getComicsList(filters);
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
    const { getComicsList } = this.props;
    this.setState({
      filterTimeout: setTimeout(function () {
        getComicsList(localFilter);
      }, 2000)
    });
  }

  render() {
    return null;
  }

}