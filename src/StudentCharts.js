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
  const exerciseNames = props.data.map(item => item.exercise);

  const uniqueExerciseNames = exerciseNames.filter((name, index, names) => {
    // Truc om dubbele namen er uit te filteren
    return names.indexOf(name) === index;
  });

  const exerciseAverages = uniqueExerciseNames.map(name => {
    const exerciseValues = props.data.filter(item => item.exercise === name);
    const difficultyAverage =
      exerciseValues.reduce((prev, curr) => prev + curr.howDifficult, 0) /
      exerciseValues.length;
    const funAverage =
      exerciseValues.reduce((prev, curr) => prev + curr.howNice, 0) /
      exerciseValues.length;
    return {
      exercise: name,
      difficultyAverage: difficultyAverage,
      funAverage: funAverage
    };
  });

  return (
    <div>
      <VictoryChart
        domainPadding={20}
        width={400}
        containerComponent={<VictoryContainer responsive={false} />}
      >
        <VictoryGroup offset={20}>
          <VictoryBar
          // style={{
          //   data: {
          //     visibility: props.checkboxValue.difficulty
          //       ? "visible"
          //       : "hidden"
          //   }
          // }}
          // data={exerciseAverages}
          // x="exercise"
          // y="difficultyAverage"
          />
          <VictoryBar
          //     style={{
          //       data: {
          //         visibility: props.checkboxValue.fun ? "visible" : "hidden"
          //       }
          //     }}
          //     data={exerciseAverages}
          //     x="exercise"
          //     y="funAverage"
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
          // style={{
          //   data: {
          //     visibility: props.checkboxValue.difficulty
          //       ? "visible"
          //       : "hidden"
          //   }
          // }}
          // data={exerciseAverages}
          // x="exercise"
          // y="difficultyAverage"
          />
          <VictoryLine
          // style={{
          //   data: {
          //     visibility: props.checkboxValue.fun ? "visible" : "hidden"
          //   }
          // }}
          // data={exerciseAverages}
          // x="exercise"
          // y="funAverage"
          />
        </VictoryGroup>
        <VictoryAxis />
        <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
      </VictoryChart>
    </div>
  );
};

export default StudentCharts;
