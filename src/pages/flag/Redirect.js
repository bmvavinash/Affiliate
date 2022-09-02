import React , {useState} from 'react';
import { Link } from 'react-router-dom';

const Redirect = (url) => {
    // if(event == undefined)
    // event.preventDefault();
    debugger
    let str ;
    // setCounted(count.substr(0,36)+"?tag=109dd6-21");
    if(url!=undefined || url!=""){
        console.log(url.substr(0,36)+"?tag=109dd6-21");
        str=url.substr(0,36)+"?tag=109dd6-21"
        // setCounted("hai")
        console.log("button function")
    }
    return(
      <div>
        <Link to={{ pathname: url }} target="_blank" >
          <button >Redirect</button>
          <h3>Redirect</h3>
        </Link>
      </div>
    )
  }

  export default Redirect;