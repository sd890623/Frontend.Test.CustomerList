import {FC, ReactNode} from "react";
import {StyledDesktopComponent, StyledMobileComponent} from "./StyledResponsiveComponent";

interface Props {
    mobile: ReactNode
    desktop: ReactNode
}
const ResponsiveComponent: FC<Props> = (props:Props)=>{
    return <>
        <StyledMobileComponent test-id="mobile-view">
            {props.mobile}
        </StyledMobileComponent>
        <StyledDesktopComponent test-id="desktop-view">
            {props.desktop}
        </StyledDesktopComponent>
    </>
}

export default ResponsiveComponent