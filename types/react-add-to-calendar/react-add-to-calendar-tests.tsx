import * as React from "react";
import AddToCalendar from "react-add-to-calendar";

const sampleEvent = {
    title: "Sample Event",
    description: "This is the sample event provided as an example only",
    location: "Portland, OR",
    startTime: "2016-09-16T20:15:00-04:00",
    endTime: "2016-09-16T21:45:00-04:00",
};

const AddToCalendarRequiredOptions: React.JSX.Element = (
    <AddToCalendar
        event={sampleEvent}
    />
);

const AddToCalendarAllOptions: React.JSX.Element = (
    <AddToCalendar
        event={sampleEvent}
        buttonClassClosed="test"
        buttonClassOpen="test"
        buttonLabel="test"
        buttonTemplate=""
        buttonIconClass="test"
        useFontAwesomeIcons={false}
        buttonWrapperClass="test"
        displayItemIcons={false}
        optionsOpen={false}
        dropdownClass="test"
        listItems={[]}
        rootClass="test"
    />
);
