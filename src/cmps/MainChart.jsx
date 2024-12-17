import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { chartService } from '../services/chart.service';
import { utilService } from '../services/util.service.js';
import Loader from './Loader.jsx';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



export function MainChart({ period, timePeriod, ip }) {
    const [data, setData] = useState()
    const [options, setOptions] = useState()

    useEffect(() => {
        getCpuData()
    }, [period, timePeriod, ip])

 


    async function getCpuData() {
        let foramtedTimes = []
        console.log("getCpuData is activated")
        const cpuData = await chartService.query(ip, period, timePeriod)
        const { Values, Timestamps } = cpuData
        Timestamps.forEach((timeStamp => {
            const foramtedTime = utilService.formatTime(timeStamp)
            foramtedTimes.push(foramtedTime)
        }))


        setData({
        // set the chart data and format
            labels: foramtedTimes, 
            datasets: [
                {
                    label: 'Metric Data',
                    data: Values, 
                    borderColor: 'rgba(75, 192, 192, 1)', 
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                    fill: true, 
                    tension: 0.4, 
                },
            ],
        })

        
        setOptions({
        // set the chart options 
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                  display: false,
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return `Value: ${tooltipItem.raw}`
                        },
                    },
                },
            },
        });
    }

    if (!options && !data) return <div><Loader/></div>
    return (
        <div className='chart-detailes'>
            <h2>Aws Instance CPU usage</h2>
            <Line data={data} options={options} />
            <button onClick={getCpuData}>Load</button>
        </div>
    );
};
