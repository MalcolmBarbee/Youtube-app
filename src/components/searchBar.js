import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <>
            <div className='row justify-content-md-center'>
                <div className='nes-container with-title'>
                    <h2 className="title">Search</h2>
                    <div className='col-md-auto'>
                        <input className='nes-input' type="text" onKeyDown={props.handleSearch} list="videoList" />
                        <datalist className='nes-container is-rounded'  id="videoList">
                            {props.results.map((e, i) => {
                                return <option className='nes-container is-rounded' value={e} key={i}>{e}</option>
                            })}
                        </datalist>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar;