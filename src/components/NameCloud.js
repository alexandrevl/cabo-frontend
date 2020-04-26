import React from "react";
import ReactWordcloud from "react-wordcloud";

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: false,
  deterministic: false,
  fontFamily: "impact",
  fontSizes: [5, 60],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 1,
  rotationAngles: [0],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 1000
};
export default function Status(props) {
  function teamShow() {
    let tags = [];
    if (props.team) {
      props.team.forEach(element => {
        tags.push({
          text: element.name,
          value: 1
        });
      });
    }
    //console.log(tags);
    return tags;
  }

  return (
    <div style={{ height: "600px", width: "100%" }}>
      <ReactWordcloud options={options} words={teamShow()} />
    </div>
  );
}
