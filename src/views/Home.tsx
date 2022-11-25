import * as React from "react";
import { useDispatch } from "react-redux";
import { AddCustomerForm } from "../components/AddCustomer/AddCustomerForm";
import { Dispatch } from "redux";
import { ICustomer } from "../types/types";
import { addCustomer } from "../redux/actions/customerActions";
import Accordion from "../components/Accordion/Accordion";
import ResponsiveComponent from "../components/ResponsiveComponent/ResponsiveComponent";
import FilterableCustomers from "../components/FilterableCustomers/FilterableCustomers";

const Home: React.FC = () => {
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
      <FilterableCustomers />
    </>
  );
};

export default Home;
