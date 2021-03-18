/* Packages */
import React from 'react';
import { Chart } from "react-google-charts";
/* Styles */
import '../styles/Home.scss'

export default function Home(props) {

    return (
        <div className="home">
            {/* <div className="name">
                Welcome {props.user.fname} {props.user.lname}!
            </div> */}
            <div>
                <span>Weekly Move Minute Goal Progress</span>
                <div className="moveMinuteGraphs">
                    {renderPieChart(8,15,null)}
                    {renderPieChart(7,15,null)}
                    {renderPieChart(8,15,null)}
                    {renderPieChart(7,15,null)}
                    {renderPieChart(8,15,null)}
                    {renderPieChart(7,15,null)}
                    {renderPieChart(8,15,null)}
                </div>
            </div>
            <div className='steps'>
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="Bar"
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Date', 'Steps'],
                      ['2014', 1000],
                      ['2015', 1170],
                      ['2016', 660],
                      ['2017', 1030],
                      ['2018', 2000],
                      ['2019', 15000],
                      ['2020', 10000],
                    ]}
                    options={{
                      // Material design options
                      chart: {
                        title: 'Steps',
                        subtitle: 'Step data for the past week',
                      },
                    }}
                />
            </div>
        </div>
    )
}

const renderPieChart = (actual, goal, date) => {
    return (
        <Chart
            width={'15em'}
            height={'15em'}
            chartType="PieChart"
            loader={
                <div>
                <span>Loading Info ...</span> 
                <br/>
                <span className="material-icons loading-icon">loop</span>
                </div>
            }
            data={[
                ['Move Minutes', 'Amount'],
                ['Actual', actual],
                ['Goal', goal],
            ]}
            options={{
                pieHole: 0.75,
                legend: 'none',
                pieSliceText: 'none',
                slices: [
                    {
                    color: "#4285F4"
                    },
                    {
                    color: "#d3d3d3"
                    }
                ],
            }}
        />   

    )
}