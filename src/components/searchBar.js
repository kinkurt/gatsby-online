import React, {useState, useEffect} from "react";
import "tailwindcss/tailwind.css";

const SearchBar = ( {setSearchItem, searchItem} ) =>{
    
    const[state, setState] = useState('');

    
    const handleKeyDown = (event)=>{
            if(event.key === `Enter`){
                setSearchItem(state);
            }
    }
    
    useEffect(()=>{
            setState(searchItem);
    },[searchItem])


    return(
        <div className="p-2 m-auto">
            <input type="text" onKeyDown={handleKeyDown} placeholder="Search" onChange={event => setState(event.currentTarget.value)}  value={state} id="searchBarInput" className="border p-4 max-h-2 bg-gray-50 rounded w-20 md:w-44 max-w-xs outline-none"/>
        </div>
    )
}

export default SearchBar;