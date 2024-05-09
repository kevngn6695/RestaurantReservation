import React from "react";
import Container from "./Container";
import Heading from "./Heading";

import { WorkingHourProps } from "../utils/type";

function WorkingHour(props) {
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  return (
    <Container id={props.id} className={props.className}>
      <Heading>Working Hours</Heading>
      {days.map((day) => (
        <Heading
          key={day}
          className={``}
          h5
        >{`${day} 9:00am - 5:00pm`}</Heading>
      ))}
    </Container>
  );
}

WorkingHour.propTypes = WorkingHourProps;

export default React.memo(WorkingHour);
