import React, {useState} from "react";
import {Doughnut} from "react-chartjs-2";
import Typography from "@material-ui/core/Typography";



const StatsChart = ({stats}) => {

    const data = {
        labels: ["recovered","new cases",  "deaths"],
        datasets: [
            {
                label: "# of Beds",
                data: [stats.recovered,stats.newCases, stats.deaths],
                backgroundColor: ["rgba(75, 192, 192, 0.8)", "rgba(255,255,105, 0.8)", "rgba(255, 99, 132, 0.8)",],
                borderColor: ["rgba(75, 192, 192, 1)", "rgba(255,255,0, 1)","rgba(255, 99, 132, 1)",],
                borderWidth: 1,
            },
        ],
    };


    return (<>
        <Doughnut data={data}/>
    </>)
};

export default StatsChart;
