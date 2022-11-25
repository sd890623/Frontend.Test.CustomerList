import {FC, useCallback, useState} from "react";
import {CustomerState, ICustomer} from "../../types/types";
import {shallowEqual, useSelector} from "react-redux";
import {Customer} from "../Customer/Customer";
import {removeCustomer} from "../../redux/actions/customerActions";
import {
    StyledFilterableCustomers,
    StyledFilteredCustomers,
    StyledInput,
    StyledLabel
} from "./StyledFilterableCustomers";

export const getFilteredCustomers = (word:string, customers:ICustomer[]):ICustomer[]=>{
    const toUpperCaseWord=word.toUpperCase()
    return customers.filter(customer=>{
        return customer.firstName.toUpperCase().includes(toUpperCaseWord)
            || customer.lastName.toUpperCase().includes(toUpperCaseWord)
            || customer.phoneNumber.toUpperCase().includes(toUpperCaseWord)
    })
}
const FilterableCustomers: FC = ()=>{
    const [searchWord,setSearchWord]=useState('')
    const customers: ICustomer[] = useSelector(
        (state: CustomerState) => state.customers,
        shallowEqual
    );
    const getFilteredCustomersCallback = useCallback(()=>getFilteredCustomers(searchWord,customers),[searchWord,customers])

    return <StyledFilterableCustomers>
        <StyledLabel>
            Name or mobile
        </StyledLabel>
        <StyledInput
            data-testid="input"
            name="search-word"
            type="text"
            value={searchWord}
            onChange={e=>setSearchWord(e.target.value)}
        />
        <StyledFilteredCustomers>{getFilteredCustomersCallback().map((customer: ICustomer) => (
            <Customer
                key={customer.id}
                customer={customer}
                removeCustomer={removeCustomer}
            />
        ))}
        </StyledFilteredCustomers>
    </StyledFilterableCustomers>
}
export default FilterableCustomers