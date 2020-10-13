import React, { useEffect } from 'react'
import '../assets/css/timeline.scss'
import { SelectPlace } from '../component/Home'
import PropTypes from 'prop-types'
const About = (props) => {
    const AboutValue = props.AboutValue
    const AboutFunc = props.AboutUs()
    const CheckDirect = (val) => {
        if (val % 2 !== 0) {
            return "timeline-container right"
        } else {
            return "timeline-container left"
        }
    }
    return (
        <div>
            <SelectPlace search={props.SearchPlace} />
            {!AboutValue ? <h1>讀取中</h1> :
                <div className="timeline-section">
                    {AboutValue.map((el, index) =>
                        <div className={CheckDirect(index)} key={el.title}>
                            <div className="content">
                                <h2>{el.title}</h2>
                                <p>{el.text}</p>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>

    );
};
About.propTypes = {
    AboutValue: PropTypes.array.isRequired,
    AboutFunc: PropTypes.func.isRequired
}
export default About;