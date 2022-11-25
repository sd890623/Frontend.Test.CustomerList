import {FC, ReactNode, useState} from "react";
import { StyledAccordion, StyledAccordionButton, StyledAccordionContent } from "./StyledAccordion";

interface Props {
    title: string;
    children: ReactNode
}

const Accordion: FC<Props> = (props:Props)=>{
    const [isOpen,setOpen]=useState(false)
    return (
        <StyledAccordion>
            <StyledAccordionButton isOpen={isOpen} onClick={()=>setOpen((state=>!state))} data-testid="button">
                {props.title}
            </StyledAccordionButton>
            <StyledAccordionContent isOpen={isOpen} data-testid="content" className={isOpen ? 'open' : 'closed'}>
                {props.children}
            </StyledAccordionContent>
        </StyledAccordion>
    )
}
export default Accordion