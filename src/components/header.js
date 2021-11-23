import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {HomeIcon,PaperAirplaneIcon,PlusIcon,HeartIcon} from '@heroicons/react/outline'
import SearchBar from "./searchBar";
import Logo from "../images/instagramLogo.png";
import "tailwindcss/tailwind.css";


const Header = ({ siteTitle,searchItem,setSearchItem  }) => {


  return(
  <header
    className="border-b border-gray-200 flex w-full sticky top-0"
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="max-w-screen-lg flex flex-row m-auto md:gap-20">
      
    {/* Logo */}
    <div className="m-auto justify-start">
        <Link
          to="/"
          onClick={()=> setSearchItem(``)}
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src={Logo} alt="Logo" className="max-w-sm"/>
        </Link>
    </div>
    {/* Search bar */}
    <SearchBar searchItem={searchItem} setSearchItem={setSearchItem}/>

    {/* Header icons */}
    <div className="flex flex-row m-auto p-2 gap-2">
      <button><HomeIcon className="h-5 md:h-7 w-5 md:w-7"/></button>
      <button><PaperAirplaneIcon className="h-5 md:h-7 w-5 md:w-7"/></button>
      <button className="border-b-1 border-black"><PlusIcon className="h-5 md:h-7 w-5 md:w-7"/></button>
      <button><HeartIcon className="h-5 md:h-7 w-5 md:w-7"/></button>
    </div>
    </div>
  </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
