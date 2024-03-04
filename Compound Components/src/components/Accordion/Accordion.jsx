import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if ( !ctx ) {
        throw new Error('Accordion related components must be wrapped by Accordion Component')
    }

    return ctx;
}

export default function Accordion({ children, ...props }) {
    const [openItemId, setOpenItemId] = useState()

    function toggleItem(id) {
        setOpenItemId( prev => prev === id ? null : id)
    }

    const contextValue = { 
        openItemId,
        toggleItem
    }

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul {...props}>{children}</ul>
    </AccordionContext.Provider>
  );
}


Accordion.Item = AccordionItem