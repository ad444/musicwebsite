import {useState} from 'react';
import WebsiteContext from './WebsiteContext';

const WebsiteStates = (props) => {

    const[pathName, setPathName] = useState('/');

    //function to get pathName and setPathName
    const getPathName = (path)=>{
      setPathName(path); 
    }

    return (
        <div>
            <WebsiteContext.Provider value={{pathName, getPathName}}>
             {props.children}
            </WebsiteContext.Provider>
        </div>
    )
}

export default WebsiteStates;
