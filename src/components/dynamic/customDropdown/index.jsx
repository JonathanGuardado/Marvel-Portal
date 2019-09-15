import React, { PureComponent } from 'react';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';


// TODO: use sync select and map options and loadOptions to redux

class CustomDropdown extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            typing: false,
            typingTimeout: 0
        }

        this.loadData = this.loadData.bind(this);
    }

    loadData = function (data) {
        const { getList } = this.props;

        if(this.state.typingTimeout){
            clearTimeout(this.state.typingTimeout);
        }

        return new Promise((resolve, reject) => {
            this.setState({ typing: false, typingTimeout: setTimeout(function() {
                var didSucceed = data;                 
                didSucceed ? resolve(
                    getList({title: data.data}).then(r=> r.data.results)
                    ) : reject("Error");
            }, 1000)  });
       })
    }

    render() {
        const { filteredValues, setValuesFilters,isMulti } = this.props;
        
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
                    onChange={setValuesFilters}
                    value={(filteredValues != undefined && filteredValues.length) > 0 ? filteredValues : null}
                />
            </div>
        );
    }
}

CustomDropdown.propTypes = {
    getList: PropTypes.func.isRequired,
    setValuesFilters: PropTypes.func.isRequired,
};

export default CustomDropdown;
