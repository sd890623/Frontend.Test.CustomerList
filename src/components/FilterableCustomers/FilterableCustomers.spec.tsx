import {fireEvent} from '@testing-library/react';
import { render } from "../../utils/testUtils";
import FilterableCustomers, {getFilteredCustomers} from "./FilterableCustomers";
import {mockCustomers} from "../../mocks/tests/Components/Customers";

describe("<FilterableCustomers />", () => {
    it("should render a <FilterableCustomers />", () => {
        const wrapper = render(<FilterableCustomers  />);
        expect(wrapper.container).toMatchSnapshot();
    });
    it("should have getFilteredCustomers filter results", () => {
        expect(getFilteredCustomers('alan',mockCustomers)).toEqual([{
            id: 2,
            firstName: "Alan",
            lastName: "Turing",
            phoneNumber: "(03) 9599 1234",
        }])
        expect(getFilteredCustomers('love',mockCustomers)).toEqual([{
            id: 3,
            firstName: "Ada",
            lastName: "Lovelace",
            phoneNumber: "+61 423 345 567",
        }])
        expect(getFilteredCustomers('',mockCustomers).length).toBe(3)
        expect(getFilteredCustomers('abcd',mockCustomers).length).toBe(0)

    });
    it("should type search words in input", () => {
        const {getByTestId} = render(<FilterableCustomers  />);
        const input =getByTestId('input') as HTMLInputElement
        expect(input.value).toBe('')
        fireEvent.change(input, {target: {value: 'alan'}})
        expect(input.value).toBe('alan')
        fireEvent.change(input, {target: {value: ''}})
        expect(input.value).toBe('')
    });
    it("should type search words and see customers list change", () => {
        const {getByTestId,getAllByTestId} = render(<FilterableCustomers  />);
        const input =getByTestId('input')
        expect(getAllByTestId('customer').length).toBe(3)
        fireEvent.change(input, {target: {value: 'alan'}})
        expect(getAllByTestId('customer').length).toBe(1)
        expect(getByTestId('customer').firstChild?.textContent).toBe('Alan Turing')
        fireEvent.change(input, {target: {value: ''}})
        expect(getAllByTestId('customer').length).toBe(3)
    });
});
