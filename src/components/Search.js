import React  from 'react'
import  Axios  from 'axios';

const Search = () => {

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
       setSearchTerm(event.target.value);
    };

    const submitButton = () =>{
        const result = fetchAPI(searchTerm);
        console.log(result);
    }

    function fetchAPI(param) {
    
          Axios.get( "https://tracking.bosta.co/shipments/track/" + param ).then((response) =>{
            return response;
         })
    }

  return (
    <div  className="expanding-search-container">
        <div className='search-all'>
            <div className="input-group ">
                <input placeholder="Tracking No." type="text" className='search_input' value={searchTerm}
                onChange={handleChange} />
                <div className='submit-search-group'>
                    <button type="button" className='submit-search-btn' onClick={submitButton} > 
                        <svg  className="svg-icon search-icon" aria-labelledby="title desc" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.9 19.7"><g className="search-path" fill="none" stroke="#fff">
                            <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4"/><circle cx="8" cy="8" r="7"/></g>
                        </svg>            
                    </button>
                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Search