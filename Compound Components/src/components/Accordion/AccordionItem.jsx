import { createContext, useContext } from "react";

const AccordItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordItemContext);
    if ( !ctx ) {
        throw new Error('Accordion related components must be wrapped by Accordion Component')
    }
    return  ctx;
}

export default function AccordionItem({ id, children, ...props }) {
  return (
    <AccordItemContext.Provider value={id}>
      <li {...props}>{children}</li>
    </AccordItemContext.Provider>
  );
}
