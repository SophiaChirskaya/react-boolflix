import { useContext } from "react";
import ItemList from "./ItemList";
import GlobalContext from "../context/GlobalContext";

export default function Main() {

    const { movies } = useContext(GlobalContext)
    return (
        <main>
            <ItemList title='Movies' />
            
        </main>
    )
}