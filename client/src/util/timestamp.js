import React from "react";
import { parseISO, compareAsc,sub, formatDistanceToNow } from "date-fns";


const TimeStamp = ({date})=>{
    let timestamp= "";
    const time = parseISO(date);
 
    const result = sub(new Date(),{
        months:6
    })
    if(compareAsc(time, result) === -1){
        timestamp = time;
    }else{
    const timePeriod = formatDistanceToNow(time);
     timestamp = `${timePeriod} Ago`
    }

    return (
      <span className="timestamp">
        &nbsp; <i>{timestamp}</i>
      </span>
    );
}

export default TimeStamp
