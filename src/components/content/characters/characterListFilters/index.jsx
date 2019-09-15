import React from 'react';
import _ from 'lodash';

export default class CharacterListFilters extends React.PureComponent {
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
        const { filters,getCharacterList } = this.props;
        getCharacterList(filters);                
      }
  }

  componentDidUpdate(){
    const { filters,name,storyId,comicId} = this.props;
    
    if (name) {
        filters.name = name;
    }
    if (storyId) {
      filters.storyId = [{ OBJECT_ID: storyId }];
    }
    if (comicId) {
      filters.comicId = [{ OBJECT_ID: comicId }];
    }

    if (!_.isEqual(this.state.filters, filters)) {
        this.setState({ filters: filters });        
        this.updateFilters(filters);
      }
  }
  
  updateFilters(localFilter) {
    const { getCharacterList} = this.props;
    this.setState({
      filterTimeout: setTimeout(function () {
        getCharacterList(localFilter);
      }, 2000)
    });
  }

  render() {
    return null;
  }

}