import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const data = [
        {
            name: 'Supplier A',
            price: 4000,
            sales: 2400,
            profit: 2400,
        },
        {
            name: 'Supplier B',
            price: 3000,
            sales: 1398,
            profit: 2210,
        },
        {
            name: 'Supplier C',
            price: 2000,
            sales: 9800,
            profit: 2290,
        },
        {
            name: 'Supplier D',
            price: 2780,
            sales: 3908,
            profit: 2000,
        },
        {
            name: 'Supplier E',
            price: 1890,
            sales: 4800,
            profit: 2181,
        },
        {
            name: 'Supplier F',
            price: 2390,
            sales: 3800,
            profit: 2500,
        },
        {
            name: 'Supplier G',
            price: 3490,
            sales: 4300,
            profit: 2100,
        },
    ];

    return (
        <LineChart width={800} height={400} data={data}>
            <Line dataKey={'price'} ></Line>
            <Line dataKey={'sales'} ></Line>
            <Line dataKey={'profit'} ></Line>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default MyLineChart;