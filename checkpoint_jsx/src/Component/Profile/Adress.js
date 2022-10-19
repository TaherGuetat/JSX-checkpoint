import { person } from "../data";
export function Adress() {
    return <>
    {

(person.map((el)=>el.adress))
    }
    </>
}
