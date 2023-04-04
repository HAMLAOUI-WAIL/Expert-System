import React,{ useState }   from 'react'
import searchIcon from '../images/icons8-search-100 2.png';
import profileImg from '../images/img.png';
import notificationIcon from '../images/icons8-bell-100 1.png';
import "./BookSearch.css"

export default function BookSearch() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };


  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
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

          <p>
            <span>8</span> Book Summaries were Found
          </p>

          <div className="contantSearch">
            <div className='BookSResultat'>
              <div className="imageC">

              </div>
              <div className="title">
                Fire and Shitty crap in
                asd teq
              </div>
            </div>

            <div className='BookSResultat'>
              <div className="imageC">

              </div>
              <div className="title">
                Fire and Shitty crap in
                asd teq
              </div>
            </div>

            <div className='BookSResultat'>
              <div className="imageC">

              </div>
              <div className="title">
                Fire and Shitty crap in
                asd teq
              </div>
            </div>
            
            <div className='BookSResultat'>
              <div className="imageC">

              </div>
              <div className="title">
                Fire and Shitty crap in
                asd teq
              </div>
            </div>
          </div>


        </div>

        <div className='bookSearchRight'>

          <div className="profile-container">
            <img src={profileImg} alt="Profile" />
            <h3>Wail Hamlaoui</h3>
            <div className="notification-icon-container">
              <img src={notificationIcon} alt="Notification" />
            </div>
          </div>

          <div className="SearchFilter">
            <h1>
            Filters
            </h1>
            <hr className="line" />
            <div>
              <h2>
                Filter 1
              </h2>
               <div className="checkbox-container">
                <label>
                  <input
                    type="checkbox"
                    name="checkbox1"
                    checked={checkboxes.checkbox1}
                    onChange={handleCheckboxChange}
                  />
                  <span>Option 1</span>
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="checkbox2"
                    checked={checkboxes.checkbox2}
                    onChange={handleCheckboxChange}
                  />
                  <span>Option 2</span>
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="checkbox3"
                    checked={checkboxes.checkbox3}
                    onChange={handleCheckboxChange}
                  />
                  <span>Option 3</span>
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="checkbox4"
                    checked={checkboxes.checkbox4}
                    onChange={handleCheckboxChange}
                  />
                  <span>Option 4</span>
                </label>
              </div>
              <hr className="line" />
            </div>
          </div>
        </div>

    </div>
  )
}
