import React from 'react'

function Pagination({ gotoPrevPage, gotoNextPage }) {
    return (
        <div className="container">
            { gotoPrevPage && <button className="btn" onClick={gotoPrevPage}>Previous</button>}
            { gotoNextPage && <button className="btn" onClick={gotoNextPage}>Next</button>}
        </div>
    )
}

export default Pagination
