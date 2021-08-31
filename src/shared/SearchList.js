import React from 'react'
import routes from './routes';
import {Route} from 'react-router-dom';
function SearchList({data}) {
    const handleClick = () => {
        console.log('clicked');
    }
    return (
        <div style={{width: '60%',margin: '0 auto', marginTop: '40px', }}>
            {data.map((item, index) => {
                return <div key={index} style={{borderBottom: '1px solid #ddd', padding: '4px 10px', cursor: 'pointer'}} onClick={handleClick}>
                    <h1 style={{fontSize: '16px'}}>{item.title}</h1>
                    <p style={{fontSize: '12px'}}>{item.edition_count}</p>
                </div>
            })}
        </div>
    )
}

export default SearchList;