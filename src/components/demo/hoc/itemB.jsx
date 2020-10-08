import React, { Component } from 'react';
import withTooltip from './withTooltip'
import queryString from 'query-string'

// use route match.params  location.search
const ItemB = ( props ) => {
  const paresd = queryString.parse(props.location.search)
  console.log(paresd)
  return ( 
      <div className='container'>
        <button className="btn btn-danger" type="btn"> Tooltip B </button>

        {props.action.showToolTip && (
          <span className="badge badge-pill badge-primary ml-2">
          {props.action.content}-{props.match.params.id}
          </span>
        )}
      </div>
   );
}
 
export default withTooltip(ItemB);