/* Packages */
import React, { useState, useEffect } from 'react';
/* Util */
import {renderPieChart, renderBarGraph } from '../util/HomeGraphs';
import { mToMi } from '../util/Conversions';
/* Styles */
import '../styles/Home.scss'

export default function Home(props) {
    // selected will track the current index of the selected item
    const [ selected, setSelected ] = useState(0);
    const [ key, setKey ] = useState(0);
    const [ loaded, setLoaded ] = useState(false)

    const handleClick = (i) => {
        setSelected(i);
    }

    const requestURL = `https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate`;
    let d = new Date(), e = new Date(d);
    const msSinceMidnight = e - d.setHours(0,0,0,0);
    const week = 6.048e+8;
    const day = 86400000;
    

    // ------------HEART POINTS API CALL------------
    const [ heartPoints, setHeartPoints ] = useState([{actual: 0, goal: 0, color: '', date: ''}]);

    const hpBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.heart_minutes",
        }],
        "startTimeMillis": e.getTime() - week + day,
        "endTimeMillis": e.getTime() - msSinceMidnight,
        "bucketByTime": {
            "durationMillis": day,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };
    const hpTodayBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.heart_minutes",
        }],
        "startTimeMillis": e.getTime() - msSinceMidnight,
        "endTimeMillis": e.getTime(),
        "bucketByTime": {
            "durationMillis": msSinceMidnight,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };
    useEffect(() => {
        fetch(
            requestURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
                body: JSON.stringify(hpBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let temp1 = [];
            for (let i = 0; i < 6; i++) {
                let date = new Date(parseInt(response.bucket[i].startTimeMillis));
                if (response.bucket[i].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: response.bucket[i].dataset[0].point[0].value[0].fpVal, 
                        goal: 36, 
                        color: '#06bf9a', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 36, 
                        color: '#06bf9a', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                }
            }
            fetch(
                requestURL,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;encoding=utf-8',
                        'Authorization': `Bearer ${props.user.accessToken}`,
                    },
                    body: JSON.stringify(hpTodayBody)
                }
            )
            .then(res => res.json())
            .then(response => {
                let temp2 = [];
                let date = new Date(parseInt(response.bucket[0].endTimeMillis));
                if (response.bucket[0].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: response.bucket[0].dataset[0].point[0].value[0].fpVal, 
                        goal: 36, 
                        color: '#06bf9a', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 36, 
                        color: '#06bf9a', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                }
                setHeartPoints(temp1.concat(temp2));
            })
        })
        .catch(error => console.log(error));

        
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // ------------STEPS API CALL------------
    const [ steps, setSteps ] = useState([{actual: 0, goal: 0, color: '', date: ''}]);

    const stepsBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.step_count.delta",
            "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
        }],
        "startTimeMillis": e.getTime() - msSinceMidnight - week + day,
        "endTimeMillis": e.getTime() - msSinceMidnight,
        "bucketByTime": {
            "durationMillis": day,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };

    const stepsTodayBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.step_count.delta",
            "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
        }],
        "startTimeMillis": e.getTime() - msSinceMidnight,
        "endTimeMillis": e.getTime(),
        "bucketByTime": {
            "durationMillis": msSinceMidnight,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };

    useEffect(() => {
        fetch(
            requestURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
                body: JSON.stringify(stepsBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let temp1 = [];
            for (let i = 0; i < 6; i++) {
                let date = new Date(parseInt(response.bucket[i].startTimeMillis));
                if (response.bucket[i].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: response.bucket[i].dataset[0].point[0].value[0].intVal, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                }
            }
            fetch(
                requestURL,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;encoding=utf-8',
                        'Authorization': `Bearer ${props.user.accessToken}`,
                    },
                    body: JSON.stringify(stepsTodayBody)
                }
            )
            .then(res => res.json())
            .then(response => {
                let temp2 = [];
                let date = new Date(parseInt(response.bucket[0].endTimeMillis));
                if (response.bucket[0].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: response.bucket[0].dataset[0].point[0].value[0].intVal, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                }
                setSteps(temp1.concat(temp2));
            })
        })
        .catch(error => console.log(error));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // ------------DIST API CALL------------
    const [ dist, setDist ] = useState([{actual: 0, goal: 0, color: '', date: ''}]);

    const distBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.distance.delta",
        }],
        "startTimeMillis": e.getTime() - msSinceMidnight - week + day,
        "endTimeMillis": e.getTime() - msSinceMidnight,
        "bucketByTime": {
            "durationMillis": day,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };

    const distTodayBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.distance.delta",
        }],
        "startTimeMillis": e.getTime() - msSinceMidnight,
        "endTimeMillis": e.getTime(),
        "bucketByTime": {
            "durationMillis": msSinceMidnight,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };

    useEffect(() => {
        fetch(
            requestURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
                body: JSON.stringify(distBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let temp1 = [];
            for (let i = 0; i < 6; i++) {
                let date = new Date(parseInt(response.bucket[i].startTimeMillis));
                if (response.bucket[i].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: mToMi(response.bucket[i].dataset[0].point[0].value[0].fpVal), 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                }
            }
            fetch(
                requestURL,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;encoding=utf-8',
                        'Authorization': `Bearer ${props.user.accessToken}`,
                    },
                    body: JSON.stringify(distTodayBody)
                }
            )
            .then(res => res.json())
            .then(response => {
                let temp2 = [];
                let date = new Date(parseInt(response.bucket[0].endTimeMillis));
                if (response.bucket[0].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: mToMi(response.bucket[0].dataset[0].point[0].value[0].fpVal), 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                }
                setDist(temp1.concat(temp2));
            })
        })
        .catch(error => console.log(error));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // ------------MOVE MINS API CALL------------
    const [ moveMins, setMoveMins ] = useState([{actual: 0, goal: 0, color: '', date: ''}]);

    const mmBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.active_minutes",
        }],
        "startTimeMillis": e.getTime() - msSinceMidnight - week + day,
        "endTimeMillis": e.getTime() - msSinceMidnight,
        "bucketByTime": {
            "durationMillis": day,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };

    const mmTodayBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.active_minutes",
        }],
        "startTimeMillis": e.getTime() - msSinceMidnight,
        "endTimeMillis": e.getTime(),
        "bucketByTime": {
            "durationMillis": msSinceMidnight,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };

    useEffect(() => {
        fetch(
            requestURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
                body: JSON.stringify(mmBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let temp1 = [];
            for (let i = 0; i < 6; i++) {
                let date = new Date(parseInt(response.bucket[i].startTimeMillis));
                if (response.bucket[i].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: response.bucket[i].dataset[0].point[0].value[0].intVal, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                }
            }
            fetch(
                requestURL,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;encoding=utf-8',
                        'Authorization': `Bearer ${props.user.accessToken}`,
                    },
                    body: JSON.stringify(mmTodayBody)
                }
            )
            .then(res => res.json())
            .then(response => {
                let temp2 = [];
                let date = new Date(parseInt(response.bucket[0].endTimeMillis));
                if (response.bucket[0].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: response.bucket[0].dataset[0].point[0].value[0].intVal, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                }
                setMoveMins(temp1.concat(temp2));
            })
        })
        .catch(error => console.log(error));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // ------------CALS API CALL------------
    const [ cals, setCals ] = useState([{actual: 0, goal: 0, color: '', date: ''}]);

    const calsBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.calories.expended",
        }],
        "startTimeMillis": e.getTime() - msSinceMidnight - week + day,
        "endTimeMillis": e.getTime() - msSinceMidnight,
        "bucketByTime": {
            "durationMillis": day,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };

    const calsTodayBody = {
        "aggregateBy": [{
            "dataTypeName": "com.google.calories.expended",
        }],
        "startTimeMillis": e.getTime() - msSinceMidnight,
        "endTimeMillis": e.getTime(),
        "bucketByTime": {
            "durationMillis": msSinceMidnight,
            "period": {
                "type": "day",
                "value": 1,
                "timeZoneId": "America/New_York"
            }
        }
    };

    useEffect(() => {
        fetch(
            requestURL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;encoding=utf-8',
                    'Authorization': `Bearer ${props.user.accessToken}`,
                },
                body: JSON.stringify(calsBody)
            }
        )
        .then(res => res.json())
        .then(response => {
            let temp1 = [];
            for (let i = 0; i < 6; i++) {
                let date = new Date(parseInt(response.bucket[i].startTimeMillis));
                if (response.bucket[i].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: response.bucket[i].dataset[0].point[0].value[0].fpVal, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp1.push(obj);
                }
            }
            fetch(
                requestURL,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;encoding=utf-8',
                        'Authorization': `Bearer ${props.user.accessToken}`,
                    },
                    body: JSON.stringify(calsTodayBody)
                }
            )
            .then(res => res.json())
            .then(response => {
                let temp2 = [];
                let date = new Date(parseInt(response.bucket[0].endTimeMillis));
                if (response.bucket[0].dataset[0].point.length !== 0) {
                    let obj = {
                        actual: response.bucket[0].dataset[0].point[0].value[0].fpVal, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                } else {
                    let obj = {
                        actual: 0, 
                        goal: 15000, 
                        color: '#4285F4', 
                        date: date.toDateString()
                    }
                    temp2.push(obj);
                }
                setCals(temp1.concat(temp2));
                setLoaded(true);
            })
        })
        .catch(error => console.log(error));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // ------------BOTTOM GRAPHS------------
    const handlePagination = (i) => {
        if (i === 0) {
            // going left
            (key - 1 === -1) ? setKey(3) : setKey(key - 1);
        } else {
            // going right
            (key + 1 === 4) ? setKey(0) : setKey(key + 1);
        }
    }

    const bottomGraphs = (key) => {
        let stepsData = [];
        steps.map(x => stepsData.push(x.actual));
        let distData = [];
        dist.map(x => distData.push(x.actual));
        let mmData = []
        moveMins.map(x => mmData.push(x.actual));
        let calsData = [];
        cals.map(x => calsData.push(x.actual));
        let dates = [];
        for (let i = 1; i < 8; i++) {
            let tempDate = new Date(d.getTime()-week+i*day);
            dates.push(tempDate.getMonth()+1 + "/" + tempDate.getDate());
        }
        switch (key) {
            case 0:
                return (
                    <>
                    <span className='bottomGraph'>{renderStepsGraph(dates, stepsData)}</span>
                    <span className='bottomGraph'>{renderDistanceGraph(dates, distData)}</span>
                    </>
                )
            case 1:
                return (
                    <>
                    <span className='bottomGraph'>{renderDistanceGraph(dates, distData)}</span>
                    <span className='bottomGraph'>{renderMoveMinsGraph(dates, mmData)}</span>
                    </>
                )
            case 2:
                return (
                    <>
                    <span className='bottomGraph'>{renderMoveMinsGraph(dates, mmData)}</span>
                    <span className='bottomGraph'>{renderCaloriesGraph(dates, calsData)}</span>
                    </>
                )
            case 3: 
                return (
                    <>
                    <span className='bottomGraph'>{renderCaloriesGraph(dates, calsData)}</span>
                    <span className='bottomGraph'>{renderStepsGraph(dates, stepsData)}</span>
                    </>
                )
            default:
            break;
        }
    }
    

    return (
        <div className="home">
            <div className="name">
                Welcome to Google Fit Web, {props.user.fname}!
            </div>
            <div >
                {loaded ? 
                <>
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
                        <span className="dailyGoalsText">Your Daily {selected === 0 ? "Heart Points" : "Steps"} Goals</span>
                        <div className="weeklyGoalGraphs">
                            {selected === 0 ? heartPoints.map(x => renderPieChart(x.actual, x.goal, x.color, x.date)) : steps.map(x => renderPieChart(x.actual, x.goal, x.color, x.date))}
                        </div>
                        
                    </div>
                    <div className='bottomGraphs'>
                        <button class="mdc-icon-button material-icons" onClick={() => handlePagination(0)}>keyboard_arrow_left</button>
                        {bottomGraphs(key)}
                        <button class="mdc-icon-button material-icons" onClick={() => handlePagination(1)}>keyboard_arrow_right</button>
                    </div>
                </>
                :
                <div>
                    <span className="loading">Loading Fitness Data ...</span> 
                    <br/>
                    <span class="material-icons md-spec">cached</span>
                </div>
                }
            </div>
        </div>
    )
}

const renderStepsGraph = (dates, data) => {
    // get step info from API
    const props = {
        label: 'Steps',
        title: 'Steps',
        subtitle: 'Step data for the past week',
        date: dates,
        data: data
    }
    return renderBarGraph(props);
}

const renderDistanceGraph = (dates, data) => {
    // get distance info from API
    const props = {
        label: 'Distance (miles)',
        title: 'Distance',
        subtitle: 'Distance travelled over the past week',
        date: dates,
        data: data
    }
    return renderBarGraph(props);
}

const renderMoveMinsGraph = (dates, data) => {
    // get move mins info from API
    const props = {
        label: 'Move Mins',
        title: 'Move Minutes',
        subtitle: 'Move Minutes for the past week',
        date: dates,
        data: data
    }
    return renderBarGraph(props);
}

const renderCaloriesGraph = (dates, data) => {
    // get calories info from API
    const props = {
        label: 'Calories (kCal)',
        title: 'Calories',
        subtitle: 'Calories expended over the past week',
        date: dates,
        data: data
    }
    return renderBarGraph(props);
}
