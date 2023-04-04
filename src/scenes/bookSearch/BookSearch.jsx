import React,{ useState }   from 'react'
import searchIcon from '../images/icons8-search-100 2.png';
import "./BookSearch.css"

export default function BookSearch() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className='Search'>
        <div className='bookSearchLeft'>

          <div className="search-bar">
            <img src={searchIcon} alt="Search Icon" />
            <input
                type="text"
                placeholder="Search Book Summary ...."
                value={searchText}
                onChange={handleSearch}
              />
          </div>

          

        </div>

        <div className='bookSearchRight'>
            
        </div>

    </div>
  )
}
