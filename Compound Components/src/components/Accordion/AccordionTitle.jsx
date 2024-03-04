import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ children }) {
    const { toggleItem } = useAccordionContext();
    const id = useAccordionItemContext();

    function handleClick() {
        toggleItem( id );
    }

    return ( <h3 onClick={handleClick}>{children}</h3> )
}