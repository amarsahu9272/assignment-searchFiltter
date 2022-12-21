import React, { useState } from "react";
import './searchBar.css'
// import SearchIcon from '@material-ui/icons/Search';
// import CloseIcon from '@material-ui/icons/Close';

function SearchBar({ placeholder, data }) {
    const [filteredData, setFilterData] = useState([])
    const [wordEntered, setWordEntered] = useState("")

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord)
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase())
        })

        if (searchWord === "") {
            setFilterData([])
        }
        else {
            setFilterData(newFilter)
        }
    }

    const clearInput = () => {
        setFilterData([])
        setWordEntered("")
     }


    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
                {/* <div className="searchIcon">
                {filteredData.lenght===0?<SearchIcon/>:<CloseIcon id="clearBtn" onClick={clearInput}/>}
            </div> */}
            </div>
            {filteredData.length !== 0 && (
                <div className="datResult">
                    {filteredData.slice(0, 15).map((value) => {
                        return <div className=" ">{value.name}</div>;
                    })}</div>)}

        </div>
    )
}

export default SearchBar