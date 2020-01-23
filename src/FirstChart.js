import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis } from "victory";

const FirstChart = props => {
  console.log("props.data", props.data);

  //   const exercisesArray = props.data.filter(obj => {
  //     return result;
  //   });

  //   console.log("exercisesArray", exercisesArray);

  //   const exerciseArray = props.data.filter(obj => {
  //     return obj.exercise === "W1D1-1";
  //   });

  //   const calculateAvg = () => {
  //     const values = exerciseArray.map(obj => obj.howNice);
  //     let sum = values.reduce((previous, current) => (current += previous));
  //     let avg = sum / values.length;
  //     console.log("values", values);
  //     console.log("avg", avg);
  //     return avg;
  //   };

  //   console.log("exerciseArray", exerciseArray);
  //   console.log("calculateAvg", calculateAvg());

  const exerciseNames = props.data.map(item => item.exercise);
  console.log("exerciseNames", exerciseNames);
  const uniqueExerciseNames = exerciseNames.filter((name, index, names) => {
    // Truc om dubbele namen er uit te filteren
    return names.indexOf(name) === index;
  });
  console.log("uniqueExerciseNames", uniqueExerciseNames);
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

  // Waarde om mee te geven aan de VictoryBar:
  console.log(exerciseAverages);

  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis />
      <VictoryAxis dependentAxis tickValues={[1, 2, 3, 4, 5]} />
      <VictoryBar data={exerciseAverages} x="exercise" y="difficultyAverage" />
    </VictoryChart>
  );
};

export default FirstChart;
