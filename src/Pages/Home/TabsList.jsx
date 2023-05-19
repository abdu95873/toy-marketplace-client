import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Lorry from './Tabs/Lorry';
import Dump from './Tabs/Dump';
import Mini from './Tabs/Mini';

const TabsList = ({allTrucks}) => {
  const lorries = allTrucks?.filter(truck=> truck?.subCategory==="Truck Lorry");
  const dumps = allTrucks?.filter(truck=> truck?.subCategory==="Dump Truck");
  const miniTrucks = allTrucks?.filter(truck=> truck?.subCategory==="Mini Truck");
  return (
    <div>
      <h1 className='text-6xl font-bold text-center my-12'>Toy Truck Sub-Category</h1>
      <Tabs>
        <TabList>
          <Tab >Truck Lorry</Tab>
          <Tab>Dump Truck</Tab>
          <Tab>Mini Truck</Tab>
        </TabList>

        <TabPanel>
          <Lorry lorries={lorries}></Lorry>
        </TabPanel>
        <TabPanel>
          <Dump dumps={dumps}></Dump>
        </TabPanel>
        <TabPanel>
          <Mini miniTrucks={miniTrucks}></Mini>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsList;