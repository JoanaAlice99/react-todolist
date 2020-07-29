import React from 'react';
import { Link } from 'react-router-dom';

const getDate = () => {
    let d = new Date()
    const date = {
        dayOfMonth: d.getDate(),
        year: d.getFullYear()
    }
    switch (d.getDay()) {
        case 0:
            date['dayOfWeek'] = "Sun"
            break;
        case 1:
            date['dayOfWeek'] = "Mon"
            break;
        case 2:
            date['dayOfWeek'] = "Tue"
            break;
        case 3:
            date['dayOfWeek'] = "Wed"
            break;
        case 4:
            date['dayOfWeek'] = "Thu"
            break;
        case 5:
            date['dayOfWeek'] = "Fri"
            break;
        case 6:
            date['dayOfWeek'] = "Sat"
            break;
        default:
            break;
    }
    switch (d.getMonth()) {
        case 0:
            date['month'] = "Jan"
            break;
        case 1:
            date['month'] = "Feb"
            break;
        case 2:
            date['month'] = "Mar"
            break;
        case 3:
            date['month'] = "Apr"
            break;
        case 4:
            date['month'] = "May"
            break;
        case 5:
            date['month'] = "Jun"
            break;
        case 6:
            date['month'] = "Jul"
            break;
        case 7:
            date['month'] = "Aug"
            break;
        case 8:
            date['month'] = "Sep"
            break;
        case 9:
            date['month'] = "Oct"
            break;
        case 10:
            date['month'] = "Nov"
            break;
        case 11:
            date['month'] = "Dec"
            break;
        default:
            break;
    }
    console.log(d.getMonth());
    return date;
}

const props = {
    date: getDate()
}

export default function header() {
    return (
        <header style={headerStyle}>
            <h3><b>{props.date.dayOfWeek}</b>, {props.date.dayOfMonth} {props.date.month}</h3>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}