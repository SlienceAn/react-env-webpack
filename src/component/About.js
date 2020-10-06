import React from 'react'
import '../assets/timeline.scss'
import { SelectPlace } from '../component/Home'
const About = (props) => {
    const CheckDirect = (val) => {
        if (val % 2 !== 0) {
            return "timeline-container right"
        } else {
            return "timeline-container left"
        }
    }
    return (
        <div>
            <SelectPlace />
            <div className="timeline-section">
                {props.AboutValue.map((el, index) =>
                    <div className={CheckDirect(index)} key={el.title}>
                        <div className="content">
                            <h2>{el.title}</h2>
                            <p>{el.text}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default About;