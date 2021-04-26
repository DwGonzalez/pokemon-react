import React from 'react'

function Pagination({ gotoPrevPage, gotoNextPage }) {
    return (
        <div className="container" style={{
            'text-align': 'center'
        }}>
            <button className={`${gotoPrevPage ? "active btn" : "disabled btn-ds"}`} onClick={gotoPrevPage}>Previous</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className={`${gotoNextPage ? "active btn" : "disabled btn-ds"}`} onClick={gotoNextPage}>Next</button>
        </div>
    )
}

export default Pagination
