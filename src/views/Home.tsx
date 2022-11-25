import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Customer } from "../components/Customer/Customer";
import { AddCustomerForm } from "../components/AddCustomer/AddCustomerForm";
import { Dispatch } from "redux";
import { CustomerState, ICustomer } from "../types/types";
import { addCustomer, removeCustomer } from "../redux/actions/customerActions";
import Accordion from "../components/Accordion/Accordion";
import ResponsiveComponent from "../components/ResponsiveComponent/ResponsiveComponent";

const Home: React.FC = () => {
  const customers: readonly ICustomer[] = useSelector(
    (state: CustomerState) => state.customers,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveCustomer = React.useCallback(
    (customer: ICustomer) => dispatch(addCustomer(customer)),
    [dispatch]
  );

  return (
    <>
      <ResponsiveComponent
          desktop={<AddCustomerForm saveCustomer={saveCustomer} />}
          mobile={<Accordion title="toggle form"><AddCustomerForm saveCustomer={saveCustomer} /></Accordion>}
      />
      {customers.map((customer: ICustomer) => (
        <Customer
          key={customer.id}
          customer={customer}
          removeCustomer={removeCustomer}
        />
      ))}
    </>
  );
};

export default Home;
