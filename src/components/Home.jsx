/* Packages */
import React, { useState } from 'react';
import { Chart } from "react-google-charts";
/* Styles */
import '../styles/Home.scss'

export default function Home(props) {
    // selected will track the current index of the selected item
    const [ selected, setSelected ] = useState(0);
    const [ key, setKey ] = useState(0);

    const handleClick = (i) => {
        setSelected(i);
    }

    const handlePagination = (i) => {
        if (i === 0) {
            // going left
            (key - 1 === -1) ? setKey(3) : setKey(key - 1);
        } else {
            // going right
            (key + 1 === 4) ? setKey(0) : setKey(key + 1);
        }
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
                <button class="mdc-icon-button material-icons" onClick={() => handlePagination(0)}>keyboard_arrow_left</button>
                {bottomGraphs(key)}
                <button class="mdc-icon-button material-icons" onClick={() => handlePagination(1)}>keyboard_arrow_right</button>
            </div>
        </div>
    )
}

const bottomGraphs = (key) => {
    switch (key) {
        case 0:
            return (
                <>
                <span className='bottomGraph'>{renderStepsGraph()}</span>
                <span className='bottomGraph'>{renderDistanceGraph()}</span>
                </>
            )
        case 1:
            return (
                <>
                <span className='bottomGraph'>{renderDistanceGraph()}</span>
                <span className='bottomGraph'>{renderMoveMinsGraph()}</span>
                </>
            )
        case 2:
            return (
                <>
                <span className='bottomGraph'>{renderMoveMinsGraph()}</span>
                <span className='bottomGraph'>{renderCaloriesGraph()}</span>
                </>
            )
        case 3: 
            return (
                <>
                <span className='bottomGraph'>{renderCaloriesGraph()}</span>
                <span className='bottomGraph'>{renderStepsGraph()}</span>
                </>
            )
        default:
        break;
    }
}

const renderHeartPointsPie = () => {
    
    return (
        <>
            {renderPieChart(8,15,'#06bf9a',"date")}
            {renderPieChart(7,15,'#06bf9a',"date")}
            {renderPieChart(8,15,'#06bf9a',"date")}
            {renderPieChart(7,15,'#06bf9a',"date")}
            {renderPieChart(8,15,'#06bf9a',"date")}
            {renderPieChart(7,15,'#06bf9a',"date")}
            {renderPieChart(8,15,'#06bf9a',"date")}
        </>
    )
}

const renderStepsPie = () => {

    return (
        <>
            {renderPieChart(10000,10000,'#4285F4',"date")}
            {renderPieChart(750,10000,'#4285F4',"date")}
            {renderPieChart(4000,10000,'#4285F4',"date")}
            {renderPieChart(7500,10000,'#4285F4',"date")}
            {renderPieChart(15000,10000,'#4285F4',"date")}
            {renderPieChart(0,10000,'#4285F4',"date")}
            {renderPieChart(1500,10000,'#4285F4',"date")}
        </>
    )
}

const pieWidth = '15em';
const pieHeight = '15em';

const renderPieChart = (actual, goal, color, date) => {
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

const graphWidth = '40em';
const graphHeight = '25em';

const renderBarGraph = (props) => {

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

const renderStepsGraph = () => {
    // get step info from API
    const props = {
        label: 'Steps',
        title: 'Steps',
        subtitle: 'Step data for the past week',
        date: ['2014','2015','2016','2017','2018','2019','2020'],
        data: [1000,1170,660,1030,2000,15000,10000]
    }
    return renderBarGraph(props);
}

const renderDistanceGraph = () => {
    // get distance info from API
    const props = {
        label: 'Distance (miles)',
        title: 'Distance',
        subtitle: 'Distance travelled over the past week',
        date: ['2014','2015','2016','2017','2018','2019','2020'],
        data: [1000,1170,660,1030,2000,15000,10000]
    }
    return renderBarGraph(props);
}

const renderMoveMinsGraph = () => {
    // get move mins info from API
    const props = {
        label: 'Move Mins',
        title: 'Move Minutes',
        subtitle: 'Move Minutes for the past week',
        date: ['2014','2015','2016','2017','2018','2019','2020'],
        data: [1000,1170,660,1030,2000,15000,10000]
    }
    return renderBarGraph(props);
}

const renderCaloriesGraph = () => {
    // get calories info from API
    const props = {
        label: 'Calories (kCal)',
        title: 'Calories',
        subtitle: 'Calories tracked over the past week',
        date: ['2014','2015','2016','2017','2018','2019','2020'],
        data: [1000,1170,660,1030,2000,15000,10000]
    }
    return renderBarGraph(props);
}
