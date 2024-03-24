import React, {useState} from 'react'
import FilterModal from './FilterModal';

const Filter = () => {
  //state for controlling modal visability
  const [isModalOpen, setIsModalOpen]=useState(false);
  //state for storing selected filters
  const [selectedFilters, setSelectedFilters]=useState({});

  //function to handel  opening and closing the filter modal
  const handelOpenModal=()=>{
    setIsModalOpen(true);//sets ismodelopen to true  to open the model
  };
  const handelCloseModal=()=>{
    setIsModalOpen(false);//sets ismodelopen to flase  to close the model
  };

  //function to handel changes in filters

  const handelFilterChange=(filterName,value)=>{
    //updates the selected filters  with the current selection
    setSelectedFilters((prevFilters)=>({
      ...prevFilters,
      [filterName]: value
    }));
  };

  return (
    <>
        {/* click event to open the modal */}
        <span class="material-symbols-outlined filter" onClick={handelOpenModal}>tune</span>
        {isModalOpen &&(<FilterModal
          selectedFilters={selectedFilters}
          onFilterChange={handelFilterChange}
          onClose={handelCloseModal}
          />
          )}
    </>
  )
}

export default Filter