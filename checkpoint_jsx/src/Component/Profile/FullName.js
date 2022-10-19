import { person } from "../data";
export function FullName() {
    return (
        <>
        {person.map((el,i)=>` ${el.firstName} ${el.lastName}`
        
        
        )}
        </>
        )
        }

  