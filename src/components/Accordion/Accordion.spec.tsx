import * as React from "react"
import {fireEvent} from '@testing-library/react';
import { render } from "../../utils/testUtils";
import Accordion from "./Accordion";

describe("<Accordion />", () => {
    it("should render a <Accordion />", () => {
        const wrapper = render(<Accordion title="accordionTitle"><p>Content</p></Accordion>);
        expect(wrapper.container).toMatchSnapshot();
    })
    it("should toggle the content in or out by clicking button", () => {
        const { getByTestId }= render(<Accordion title='accordionTitle'><p>Content</p></Accordion>);
        expect(getByTestId('content')).toBeInTheDocument();
        expect(getByTestId('content')).toHaveClass('closed')
        fireEvent.click(getByTestId('button'))
        expect(getByTestId('content')).toBeInTheDocument();
        expect(getByTestId('content')).toHaveClass('open')
    })
    // @todo better testing for hidden by height-visibility
});
