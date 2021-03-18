/* Packages */
import React, { useState } from 'react';
import { Chart } from "react-google-charts";
/* Styles */
import '../styles/Home.scss'

export default function Home(props) {
    // selected will track the current index of the selected item
    const [ selected, setSelected ] = useState(0);

    const handleClick = (i) => {
        setSelected(i);
    }


    return (
        <div className="home">
            <div className="name">
                Welcome TEST USER!
            </div>
            <div class="middleGraphs">
            <div class="mdc-chip-set mdc-chip-set--choice" role="grid">
                    <div class={selected === 0 ? "mdc-chip chip-selected" : "mdc-chip"} role="row" onClick={() => handleClick(0)}>
                        <span role="gridcell">
                            <span role="button" class="mdc-chip__primary-action">
                                <span class="mdc-chip__text">Heart Points</span>
                            </span>
                        </span>
                    </div>
                    <div class={selected === 1 ? "mdc-chip chip-selected" : "mdc-chip"} role="row" onClick={() => handleClick(1)}>
                        <span role="gridcell">
                            <span role="button" class="mdc-chip__primary-action">
                                <span class="mdc-chip__text">Steps</span>
                            </span>
                        </span>
                    </div>
                </div>
                <span>Your Daily {selected === 0 ? "Heart Points" : "Steps"} Goals</span>
                <div className="weeklyGoalGraphs">
                    {selected === 0 ? renderHeartPointsPie() : renderStepsPie()}
                </div>
                
            </div>
            <div className='bottomGraphs'>
                <i className="material-icons">keyboard_arrow_left</i>
                <span className='bottomGraph'>{renderStepsGraph()}</span>
                <span className='bottomGraph'>{renderDistanceGraph()}</span>
                <i className="material-icons">keyboard_arrow_right</i>
            </div>
        </div>
    )
}

const renderHeartPointsPie = () => {
    
    return (
        <>
            {renderPieChart(8,15,'#06bf9a',null)}
            {renderPieChart(7,15,'#06bf9a',null)}
            {renderPieChart(8,15,'#06bf9a',null)}
            {renderPieChart(7,15,'#06bf9a',null)}
            {renderPieChart(8,15,'#06bf9a',null)}
            {renderPieChart(7,15,'#06bf9a',null)}
            {renderPieChart(8,15,'#06bf9a',null)}
        </>
    )
}

const renderStepsPie = () => {

    return (
        <>
            {renderPieChart(10000,10000,'#4285F4',null)}
            {renderPieChart(750,10000,'#4285F4',null)}
            {renderPieChart(4000,10000,'#4285F4',null)}
            {renderPieChart(7500,10000,'#4285F4',null)}
            {renderPieChart(15000,10000,'#4285F4',null)}
            {renderPieChart(0,10000,'#4285F4',null)}
            {renderPieChart(1500,10000,'#4285F4',null)}
        </>
    )
}

const pieWidth = '15em';
const pieHeight = '15em';

const renderPieChart = (actual, goal, color, date) => {
    return (
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

    )
}

const graphWidth = '40em';
const graphHeight = '25em';

const renderStepsGraph = () => {
    // get step info from API

    return (
        <Chart
            width={graphWidth}
            height={graphHeight}
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
    )
}

const renderDistanceGraph = () => {
    // get distance info from API

    return (
        <Chart
            width={graphWidth}
            height={graphHeight}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
                ['Date', 'Distance (miles)'],
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
                title: 'Distance',
                subtitle: 'Distance travelled over the past week',
                },
            }}
        />
    )
}

const renderMoveMinsGraph = () => {
    // get move mins info from API
    
    return (
        <Chart
            width={graphWidth}
            height={graphHeight}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
                ['Date', 'Move Minutes'],
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
                title: 'Move Minutes',
                subtitle: 'Move Minutes for the past week',
                },
            }}
        />
    )
}

const renderCaloriesGraph = () => {
    // get calories info from API
    
    return (
        <Chart
            width={graphWidth}
            height={graphHeight}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
                ['Date', 'Calories'],
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
                title: 'Calories',
                subtitle: 'Calories for the past week',
                },
            }}
        />
    )
}
