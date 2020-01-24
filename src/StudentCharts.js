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
  const studentNameArray = name => {
    return props.data.filter(item => {
      return item.studentName === name;
    });
  };

  return (
    <div>
      <VictoryChart
        domainPadding={20}
        width={400}
        containerComponent={<VictoryContainer responsive={false} />}
      >
        <VictoryGroup offset={20}>
          <VictoryBar
            style={{
              data: {
                visibility: props.checkboxValue.fun ? "visible" : "hidden"
              }
            }}
            data={studentNameArray(props.value)}
            x="exercise"
            y="howNice"
          />
          <VictoryBar
            style={{
              data: {
                visibility: props.checkboxValue.difficulty
                  ? "visible"
                  : "hidden"
              }
            }}
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
            style={{
              data: {
                visibility: props.checkboxValue.fun ? "visible" : "hidden"
              }
            }}
            data={studentNameArray(props.value)}
            x="exercise"
            y="howNice"
          />
          <VictoryLine
            style={{
              data: {
                visibility: props.checkboxValue.difficulty
                  ? "visible"
                  : "hidden"
              }
            }}
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
