import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import InformationTab from "./InformationTab";
import OrdersTab from "./OrdersTab";

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3 fs-3"
    >
      <Tab eventKey="home" title="Личная информация" className="fs-3">
        <InformationTab />
      </Tab>
      <Tab eventKey="profile" title="Заказы" className="fs-3">
        <OrdersTab />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;
