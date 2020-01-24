import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLine,
  VictoryContainer
} from "victory";

const StudentCharts = props => {
  console.log("props.data", props.data);
  console.log("props.value", props.value);
  // maak van alle data een array met de namen
  const studentNameArray = name => {
    return props.data.filter(item => {
      return item.studentName === name;
    });
  };
  console.log("studentNameArray", studentNameArray("Aranka"));

  return (
    <div>
      <VictoryChart
        domainPadding={20}
        width={400}
        containerComponent={<VictoryContainer responsive={false} />}
      >
        <VictoryGroup offset={20}>
          <VictoryBar
            data={studentNameArray(props.value)}
            x="exercise"
            y="howNice"
          />
          <VictoryBar
            data={studentNameArray(props.value)}
            x="exercise"
            y="howDifficult"
          />
        </VictoryGroup>
        <VictoryAxis />
        <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
      </VictoryChart>
      <VictoryChart
        width={400}
        containerComponent={<VictoryContainer responsive={false} />}
      >
        <VictoryGroup>
          <VictoryLine
            data={studentNameArray(props.value)}
            x="exercise"
            y="howNice"
          />
          <VictoryLine
            data={studentNameArray(props.value)}
            x="exercise"
            y="howDifficult"
          />
        </VictoryGroup>
        <VictoryAxis />
        <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
      </VictoryChart>
    </div>
  );
};

export default StudentCharts;
