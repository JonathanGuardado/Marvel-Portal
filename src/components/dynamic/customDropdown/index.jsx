import React, { PureComponent } from 'react';
import AsyncSelect from 'react-select/async';
import Select from "react-select";
import makeAnimated from 'react-select/animated';
import PropTypes from 'prop-types';


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

        if (this.state.typingTimeout) {
            clearTimeout(this.state.typingTimeout);
        }

        return new Promise((resolve, reject) => {
            this.setState({
                typing: false, typingTimeout: setTimeout(function () {
                    var didSucceed = data;
                    didSucceed ? resolve(
                        getList({ name: data.data }).then(r => r.data.results)
                    ) : reject("Error");
                }, 500)
            });
        })
    }

    render() {
        const { filteredValues, setValuesFilters, isMulti, list } = this.props;
        
        return (
            <div>{this.props.title}
                {list ?
                    <Select
                        isMulti={isMulti}
                        components={makeAnimated()}
                        placeholder="All"
                        options={list}
                        getOptionLabel={option => option.title ? option.title : option.name}
                        getOptionValue={option => option.id}
                        onChange={setValuesFilters}
                        value={filteredValues}
                    /> :
                    <AsyncSelect
                        isMulti
                        defaultOptions
                        components={makeAnimated()}
                        placeholder="All"
                        loadOptions={data => this.loadData({ data: data })}
                        getOptionLabel={option => option.title ? option.title : option.name}
                        getOptionValue={option => option.id}
                        onChange={setValuesFilters}
                        value={(filteredValues && filteredValues.length) > 0 ? filteredValues : null}
                    />
                }
            </div>
        );
    }
}

CustomDropdown.propTypes = {
    setValuesFilters: PropTypes.func.isRequired,
};

export default CustomDropdown;
