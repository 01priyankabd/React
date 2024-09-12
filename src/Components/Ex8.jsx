import React from "react";
import { Profile } from "../TypedComponents/Profile";

// Default Components
export default function Ex8(props){
    return(
        <div>
            <h1>Typed Components</h1>
            <Profile title="new Title - 1" url="https://picsum.photos/id/124/400/400"/>
            <Profile title="new Title - 2" url="https://picsum.photos/id/125/400/400"/>
            <Profile title="new Title - 3" url="https://picsum.photos/id/126/400/400"/>
        </div>
    )
}

/* 
                Default components                                 Typed/named components
        1> export and imports                               1> export and imports
            import comp from "src"                               import {comp} from "src"
            export default comp(){}                              export function comp(){}
                                                                const comp = () => {}
                                                                export comp

        2> can define props and states                      2>  only Props 
*/