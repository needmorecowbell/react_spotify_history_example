import React, {useEffect, useState} from 'react';
//import ReactDOM from 'react-dom/client';
import { DataGrid } from '@mui/x-data-grid';
import { Columns } from './ListenHistoryColumns';


function translateRows(listen_events){
    const uuid = require('uuid');
    listen_events.forEach(event => {
        event.id = uuid.v4()
    });
    return listen_events
}


export function ListenHistoryTable(){

    const [rows,setRows] = useState([]);

    useEffect(()=>{
	//UPDATE THIS LINE, IVE HARDCODED IT
        let listenHistory = require("/home/adam/Dev/spotify_data_visualizer/src/data/StreamingHistory0.json")
        if(listenHistory!== undefined){
            setRows(translateRows(listenHistory));
        }
    },[]);

    return (
        <div style={{width:"85%", height:"800px"}}>
          <DataGrid 
            rows={rows}
            columns={Columns}
          />
        </div>
    )
}
