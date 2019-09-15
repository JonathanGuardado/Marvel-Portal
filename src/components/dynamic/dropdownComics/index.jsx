import React, { PureComponent } from 'react';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';


// TODO: use sync select and map options and loadOptions to redux

class DropdownComics extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            typing: false,
            typingTimeout: 0
        }

        this.loadData = this.loadData.bind(this);
    }

    loadData = function (data) {
        const { getComicList } = this.props;

        if(this.state.typingTimeout){
            clearTimeout(this.state.typingTimeout);
        }

        return new Promise((resolve, reject) => {
            this.setState({ typing: false, typingTimeout: setTimeout(function() {
                var didSucceed = data;                 
                didSucceed ? resolve(
                     getComicList({title: data.data}).then(r=> r.data.results)
                    ) : reject("Error");
            }, 1000)  });
       })
    }

    render() {
        const { setComicsFilters, comicsFilters,isMulti } = this.props;
        console.log(comicsFilters)
        return (
            <div>{this.props.title}
                <AsyncSelect
                    isMulti
                    defaultOptions
                    components={makeAnimated()}
                    placeholder="All"
                    loadOptions={data =>  this.loadData({data: data})}
                    getOptionLabel={option => option.title}
                    getOptionValue={option => option.id}
                    onChange={setComicsFilters}
                    value={(comicsFilters != undefined && comicsFilters.length) > 0 ? comicsFilters : null}
                />
            </div>
        );
    }
}

DropdownComics.propTypes = {
    getComicList: PropTypes.func.isRequired,
    setComicsFilters: PropTypes.func.isRequired,
};

export default DropdownComics;
