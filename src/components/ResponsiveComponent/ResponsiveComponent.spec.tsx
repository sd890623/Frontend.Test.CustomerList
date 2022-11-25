import { render } from "../../utils/testUtils";
import ResponsiveComponent from "./ResponsiveComponent";

describe("<ResponsiveComponent />", () => {
    it("should render a <Accordion />", () => {
        const wrapper = render(<ResponsiveComponent mobile={<p>Mobile</p>} desktop={<p>Desktop</p>}/>);
        expect(wrapper.container).toMatchSnapshot();
    })
    it("should toggle the content in or out by clicking button", () => {
        const { queryByText }= render(<ResponsiveComponent mobile={<p>Mobile</p>} desktop={<p>Desktop</p>}/>);
        expect(queryByText('Mobile')).toBeVisible();
        expect(queryByText('Desktop')).toBeVisible();
    })
    // @todo better testing for mobile/desktop media query
});
