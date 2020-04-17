import React from 'react';


function FullRandom(props) {
console.log(props)
    return (            
        <ul>
            {props.list.map((item, key) => 
            <li key={item}>
                {item}
                {console.log("test")}
            </li>

            )}
            {console.log("coucou")}
        </ul>
    )
}


export default FullRandom;

