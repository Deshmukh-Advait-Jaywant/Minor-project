import React, { useState } from 'react';
import { DatePicker, Space } from 'antd';

const Search = () => {
    const { RangePicker } = DatePicker;
    const [keyword, setKeyword] = useState({});
    const [value, setValue] = useState([]);

    const updateKeyword = (field, value) => {
        setKeyword(prevKeyword => ({
            ...prevKeyword,
            [field]: value,
        }));
    };

    const returnDates = (dates, dateStrings) => {
        // Setting the date range value in state
        setValue(dates);
        // Updating keyword object with date range
        updateKeyword('dateIn', dateStrings[0]);
        updateKeyword('dateOut', dateStrings[1]);
    };

    return (
        <>
            <div className='searchbar'>
                <input
                    className='search'
                    id='search'
                    placeholder='search destination'
                    type='text'
                    value={keyword.city || ''}
                    onChange={e => updateKeyword('city', e.target.value)}
                />
                <Space direction='vertical' size={12} className='search'>
                    <RangePicker
                        value={value}
                        format='YYYY-MM-DD'
                        picker='date'
                        className='date-picker'
                        disabledDate={current => current && current.isBefore(Date.now())}
                        onChange={returnDates}
                    />
                </Space>
                {/* Input field for adding guests */}
                <input
                    className='search'
                    id='addguest'
                    placeholder='Add Guest'
                    type='number'
                    onChange={e => updateKeyword('guests', e.target.value)}
                />
                {/* Search button */}
                <span className='material-symbols-outlined searchicon'>search</span>
            </div>
        </>
    );
};

export default Search;
