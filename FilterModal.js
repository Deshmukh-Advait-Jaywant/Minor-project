import React, {useEffect,useState} from 'react';
import PropTypes from  'prop-types';
import "../../CSS/FilterModal.css";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";
const FilterModal = ({selectedFilters,onFilterChange,onClose}) => {
    const [priceRange,setPriceRange]=useState({
        min: selectedFilters.priceRange?.min ||600,
        max:  selectedFilters.priceRange?.max||30000
    });
    const [propertyType,setPropertyType]=useState(
       selectedFilters.propertyType||"" //default it is empty or the selected property type from props
    );
    const [roomType,setRoomType]=useState(
        selectedFilters.roomType||"" //default it is empty or the selected property type from props
     );
     const [amenitiesType,setAmenitiesType]=useState(
        selectedFilters.amenitiesType||[] //default it is empty or the selected property type from props
     );
    //useeffects hook to update stated when selectedfilters property changes
    useEffect(()=>{
        setPriceRange({
            min: selectedFilters.priceRange?.min ||600,
            max:  selectedFilters.priceRange?.max||30000,
        });
        setPropertyType(selectedFilters.propertyType||"");
        setRoomType(selectedFilters.propertyType||"");
        setAmenitiesType(selectedFilters.propertyType||[]);
    },[selectedFilters]);

    //function to handel changes in price range
    const handlePriceRangeChange=(value)=>{
        setPriceRange(value)//it will update the price range state
    }

    //function to handle min value
    const handleMinInputChange=(e)=>{
        const minValue=parseInt(e.target.value,10);
        setPriceRange((prev)=>({...prev,min:minValue}));
    }
    //function to handle max value
    const handleMaxInputChange=(e)=>{
        const maxValue=parseInt(e.target.value,10);
        setPriceRange((prev)=>({...prev,max:maxValue}));
    }
    //function to handle applying filters
    const handelFilterChange=()=>{
        onFilterChange("minPrice",priceRange.min);
        onFilterChange("maxPrice",priceRange.max);
        onFilterChange("propertyType",propertyType);
        onFilterChange("roomType",roomType);
        onFilterChange("amenitiesType",amenitiesType);
        onClose();//closes the modal
    }
    //OPTIIN FOR PROPERTY TYPES

    const propertyTypeOption=[
        
        {
            value:"House" ,label:"House", icon:"home",
        },
        {
            value:"Flat" ,label:"Flat", icon:"apartment",
        },
        {
            value:"Guest House" ,label:"Guest House", icon:"hotel",
        },
        {
            value:"Hotel" ,label:"Hotel", icon:"meeting_room"
        },
    ];
    //options for roomTypes
    const roomTypeOptions = [
        {
          label: "Entire Room",  
          value: "Entire",
          icon:"hotel",
        },
        {
          label: "Room",      
          value: "Room",        
          icon:"meeting_room",
        },
        {
            label: "AnyType",      
            value: "AnyType",           
            icon:"apartment",
          },
      ];
      //options fro aminities
      const amenitiesOptions=[
        {
            label: "Wifi",      
            value: "Wifi",           
            icon:"wifi",
        },
        {
            label: "Kitchen",      
            value: "Kitchen",           
            icon:"kitchen",
        },
        {
            label: "Ac",      
            value: "Ac",           
            icon:"ac_unit",
        },
        {
            label: "Washing Machine",      
            value: "Washing Machine",           
            icon:"local_laundry_service",
        },
        {
            label: "Tv",      
            value: "Tv",           
            icon:"tv",
        },
        {
            label: "Pool",      
            value: "Pool",           
            icon:"pool",
        },
        {
            label: "Free Parking",      
            value: "Free Parking",           
            icon:"local_parking",
        },
      ];

      //function to handle clearing filters
      const handleClearFilters=()=>{
        setPriceRange({min:600,max:30000});
        setPropertyType("");
        setRoomType("");
        setAmenitiesType([]);
      }
      //function to handle changes in amenities
      const handelAmenitiesChange=(selectedAmenity)=>{
        setAmenitiesType((prevAmenities)=>prevAmenities.includes(selectedAmenity)? prevAmenities.filter((item)=>item!== selectedAmenity):[...prevAmenities,selectedAmenity]);
      };

      //function to handle changes in propertyType
      const handelPropertyTypeChange=(selectedType)=>{
        setPropertyType((prevType)=>(prevType === selectedType? "":selectedType));
      };

        //function to handle changes in RoomType
        const handelRoomTypeChange=(selectedType)=>{
            setRoomType((prevType)=>(prevType === selectedType? "":selectedType));
          };

  return (
    <div className='modal-backdrop'>
        <div className='modal-content'>
            <h4>
                Filters<hr/>
            </h4>
            <button className='close-button' onClick={onClose}>
                <span>&times;</span>
            </button>

            {/* filter section */}
            <div className='modal-filters-container'>
                <div className='filter-section'>
                    <label>Price Range:</label>
                    <InputRange
                        minValue={600}
                        maxValue={30000}
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                    />
                    <div className='range-inputs'>
                        <input
                            type="number"
                            value={priceRange.min}
                            onChange={handleMinInputChange}
                        />
                        <span>-</span>
                        <input
                            type="number"
                            value={priceRange.max}
                            onChange={handleMaxInputChange}
                        />
                    </div>
                </div>
                {/* property type filter */}
                <div className='filter-section'>
                    <label>Property Type:</label>
                    <div className='icon-box'>
                    {propertyTypeOption.map((options) => (
                        <div
                            key={options.value}
                            className={`selectable-box ${propertyType === options.value ? "selected" : ""}`}
                            onClick={() => handelPropertyTypeChange(options.value)}>
                            <span className='material-icons'>{options.icon}</span>
                            <span>{options.label}</span>
                        </div>
                    ))}
                </div>
                </div>
                {/* room type filter */}
                <div className='filter-section'>
                    <label>Room Type:</label>
                    <div className='icon-box'>
                        {
                            roomTypeOptions.map((option)=>(
                                <div
                                key={option.value}
                                className={`selectable-box ${roomType === option.value ? "selected" : ""}`}
                                onClick={() => handelRoomTypeChange(option.value)}>
                                <span className='material-icons'>{option.icon}</span>
                                <span>{option.label}</span>
                                    </div>
                            ))}
                    </div>
                </div>
                {/* Amenities Filter */}
                {/* Amenities Filter */}
        <div className='filter-section'>
            <label>Amenities</label>
            <div className="amenities-checkboxes">
                {amenitiesOptions.map((option) => (
                    <div
                        key={option.value}
                        className='amenity-checkbox'
                    >
                        <input
                            type='checkbox'
                            value={option.value}
                            checked={amenitiesType.includes(option.value)}
                            onChange={() => handelAmenitiesChange(option.value)}
                        />
                        <span className='material-icons amenitieslabel'>{option.icon}</span>
                        <span>{option.label}</span>
                    </div>
                ))}
            </div>
        </div>
                    {/* filter action button */}
                    <div className='filter-buttons'>
                        <button className='clear-button' onClick={(handleClearFilters)}>Clear</button>
                        <button onClick={handelFilterChange}>Apply Filters</button>
                    </div>
            </div>
        </div>
    </div>
  )
};

FilterModal.prototype = {
    selectedFilters: PropTypes.object.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};
export default FilterModal