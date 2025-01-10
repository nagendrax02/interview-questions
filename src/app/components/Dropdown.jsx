import React from "react";

function Dropdown(props) {
  const { options, handleDropDownChange } = props;
  console.log(props, "props")
  const handleSelectValueOnchange = (e) => {
   handleDropDownChange(e.target.value)
  };

  return (
    <>
      <select onChange={handleSelectValueOnchange}>
        {options.map((option,index) => {
          return <option key={index} value={option.value}>{option.name}</option>;
        })}
      </select>
    </>
  );
}

export default Dropdown;
