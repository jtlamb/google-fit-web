/* Packages */
import React, { useState, useEffect } from 'react';
/* Util */
import {renderPieChart } from '../util/HomeGraphs';
import { mToMi, getMonth } from '../util/Conversions';
/* Styles */
import '../styles/Journal.scss'

export default function Journal(props) {
    const [ key, setKey ] = useState(0);

    let d = new Date(), e = new Date(d), navDate = new Date(d);
    const msSinceMidnight = e - d.setHours(0,0,0,0);
    const week = 6.048e+8;
    const day = 86400000;

    
    const renderDays = (key) => {
        let dates = [];
        for (let i = 14; i > 0; i--) {
            let tempDate = new Date(d.getTime()-2*week+i*day);
            dates.push(tempDate.getDate());
        }

        return (
            <div className="days">
                {dates.map((x,i) => <div className="day"><button class={i === key ? "mdc-icon-button dateSelected" : "mdc-icon-button"} onClick={() => setKey(i)}>{x}</button></div>)}
            </div>
        );
    }

    return (
        <div className="page">
            <div className="pageTitle">Your Fitness Journal</div> 
            <div className="topNav">
                <div className="monthYear">
                    {getMonth(navDate.getMonth()+1) + " " + navDate.getFullYear()}
                </div>
                <div className="topDates">
                    <button class="mdc-icon-button material-icons" >keyboard_arrow_left</button>
                    {renderDays(key)}
                    <button class="mdc-icon-button material-icons" >keyboard_arrow_right</button>
                </div>
            </div>
            <div className="bottomSection">
                <div className="log">
                    <span className="currDate">{getMonth(navDate.getMonth()+1) + " " + navDate.getDate() + "," + navDate.getFullYear()}</span>
                    <div class="mdc-data-table">
                        <div class="mdc-data-table__table-container">
                            <table class="mdc-data-table__table">
                                <thead>
                                    <tr class="mdc-data-table__header-row">
                                        <th class="mdc-data-table__header-cell"><span className="tableTitle">Log</span></th>
                                    </tr>
                                </thead>
                                <tbody class="mdc-data-table__content">
                                    <tr class="mdc-data-table__row">
                                        <th class="mdc-data-table__cell" scope="row">Activity 1</th>
                                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">Activity 1 data</td>
                                    </tr>
                                    <tr class="mdc-data-table__row">
                                    <th class="mdc-data-table__cell" scope="row">Activity 2</th>
                                        <td class="mdc-data-table__cell mdc-data-table__cell--numeric">Activity 2 data</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="journalGraphs">
                    <div className="stepsData">
                        <span class="material-icons stepsIcon">directions_walk</span>
                        <div>
                            7000 Steps
                        </div>
                    </div>
                    <div className="heartPointsData">
                        <span class="material-icons heartPointsIcon">favorite_border</span>
                        <div>
                            20 Heart Points
                        </div>
                    </div>
                    <div className="goalData">
                        <div className="logDataGraphTitle">% Daily Goal</div>
                        <div className="goalDataGraphs">
                            {renderPieChart(7000, 15000, '#4285F4', 'Steps')}
                            {renderPieChart(20, 36, '#06bf9a', 'Heart Points')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}