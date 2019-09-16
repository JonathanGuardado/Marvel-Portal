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
        const { filters,getStoriesList } = this.props;
        getStoriesList(filters);                
      }
  }

  componentDidUpdate(){
    const { filters,name,characterId,comicId} = this.props;
    
    if (name) {
        filters.name = name;
    }
    if (characterId) {
      filters.characters = [{ id: characterId }];
    }
    if (comicId) {
      filters.comics = [{ id: comicId }];
    }

    if (!_.isEqual(this.state.filters, filters)) {
        this.setState({ filters: filters });        
        this.updateFilters(filters);
      }
  }
  
  updateFilters(localFilter) {
    const { getStoriesList} = this.props;
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