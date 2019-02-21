import React from "react"
import Character from './Character'

// components accept arbitary inputes called props and return React
//elemnt descrbing what should appear on the function 
const CharacterCard = props => {
    return(
        <div>
            {props.data.map(char =>   //Rendering an Array of Data with map
                <Character characterData={char} />
                )}
        </div>
    )
}

export default CharacterCard