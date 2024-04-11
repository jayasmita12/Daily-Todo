import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Tasks from "./Tasks";
import CompletedTasks from "./CompletedTasks";
import ClosedTasks from "./ClosedTasks";
import TimeOutTasks from "./TimeOutTasks";
import ScheduledTasks from "./ScheduledTasks";
import OnTrackTasks from "./OnTrackTasks";
import { useSelector } from "react-redux";


const TabOptions = () => {
  const { allTask } = useSelector((store) => store.crudTodoReducer);

  return (
    <Tabs>
      <div className="overflow-x-auto whitespace-no-wrap my-4">
        <TabList>
          <Tab>AllTask</Tab>
          <Tab isDisabled={allTask.length == 0}>Completed</Tab>
          <Tab isDisabled={allTask.length == 0}>TimeOut</Tab>
          <Tab isDisabled={allTask.length == 0}>Scheduled</Tab>
          <Tab isDisabled={allTask.length == 0}>Closed</Tab>
          <Tab isDisabled={allTask.length == 0}>OnTrack</Tab>
        </TabList>
      </div>

      <TabPanels>
        <TabPanel>
          <Tasks />
        </TabPanel>
        <TabPanel>
          <CompletedTasks />
        </TabPanel>
        <TabPanel>
          <TimeOutTasks />
        </TabPanel>
        <TabPanel>
          <ScheduledTasks />
        </TabPanel>
        <TabPanel>
          <ClosedTasks />
        </TabPanel>
        <TabPanel>
          <OnTrackTasks />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabOptions;
