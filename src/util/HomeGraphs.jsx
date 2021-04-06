/* Packages */
import React from 'react';
import { Chart } from "react-google-charts";

const graphWidth = '40em';
const graphHeight = '25em';

export const renderBarGraph = (props) => {

    return (
        <Chart
            width={graphWidth}
            height={graphHeight}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
                ['Date', props.label],
                [props.date[0], props.data[0]],
                [props.date[1], props.data[1]],
                [props.date[2], props.data[2]],
                [props.date[3], props.data[3]],
                [props.date[4], props.data[4]],
                [props.date[5], props.data[5]],
                [props.date[6], props.data[6]],
            ]}
            options={{
                // Material design options
                chart: {
                title: props.title,
                subtitle: props.subtitle,
                },
            }}
        />
    )
}


const pieWidth = '15em';
const pieHeight = '15em';

export const renderPieChart = (actual, goal, color, date) => {
    return (
        <div className="pie">
            <Chart
                width={pieWidth}
                height={pieHeight}
                chartType="PieChart"
                loader={<span className="material-icons loading-icon">loop</span>}
                data={[
                    ['Move Minutes', 'Amount'],
                    ['Actual', actual],
                    ['Away from Goal', Math.max(0, goal - actual)],
                ]}
                options={{
                    pieHole: 0.75,
                    legend: 'none',
                    pieSliceText: 'none',
                    slices: [
                        {
                        color: color
                        },
                        {
                        color: "#d3d3d3"
                        }
                    ],
                }}
            />
            {date}   
        </div>
    )
}