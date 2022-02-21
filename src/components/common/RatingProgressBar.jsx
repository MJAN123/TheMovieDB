import React from 'react'
import "./style.css";
const RatingProgressBar = ({value}) => {
    const getPercentageProgress = (stroke, value) =>{
        return ((stroke/100)*value)
    }
    const getStrokeColor = (value) => {
        switch(true){
            case (value<30):
                return 'red';
            case value<60:
                return 'yellow';
            case value >60:
                return 'green' ;
            default:
                return ''        
        }
    }
    return (
            <svg className='svf-icon' width="50" height="50">
            <g >
                <circle  cx="50%" cy="50%" r="20" style={{fill: '#222', stroke:getStrokeColor(value), strokeWidth:2, strokeDasharray:251, strokeDashoffset:getPercentageProgress(251, value)-251}}></circle>
                <text x="50%" y="50%" text-anchor="middle" stroke="#fff" stroke-width="1px" dy=".3em" fontSize='10'>{value?`${value}%`:'NA'}</text>
            </g>
            </svg>
    )
}

export default RatingProgressBar
