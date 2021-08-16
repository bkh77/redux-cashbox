import Chart from "react-google-charts";

import React from "react";

function PizzaChart({ title, data }) {
  const user1 = data
    .filter((i) => i.userID === 1)
    .reduce((sum, { amount }) => sum + amount, 0);
  const user2 = data
    .filter((i) => i.userID === 2)
    .reduce((sum, { amount }) => sum + amount, 0);
  const user3 = data
    .filter((i) => i.userID === 3)
    .reduce((sum, { amount }) => sum + amount, 0);
  const user4 = data
    .filter((i) => i.userID === 4)
    .reduce((sum, { amount }) => sum + amount, 0);

  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Stive Jobs", user1],
          ["Elon Musk", user2],
          ["Jeff Bezos", user3],
          ["Bakhtiyor", user4],
        ]}
        options={{
          title,
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default PizzaChart;
