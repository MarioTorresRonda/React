import { useRef, useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
    const lastChange = useRef()
   const [searchTerm, setSearchTerm] = useState('')

   function handleCHange(event) {
        if ( lastChange.current )  {
            clearTimeout( lastChange.current );
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(event.target.value);
        }, 500);
   }

   const searchResult = items.filter( item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLocaleLowerCase()));

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleCHange} />
      <ul>
        {searchResult.map((item) => (
          <li key={itemKeyFn(item)}> {children(item)} </li>
        ))}
      </ul>
    </div>
  );
}
