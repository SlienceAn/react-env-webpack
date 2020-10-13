import React, { useEffect } from 'react'
import '../assets/css/timeline.scss'
import { SelectPlace } from '../component/Home'
import PropTypes from 'prop-types'
import '../assets/css/loader.scss'
const About = (props) => {
    const AboutValue = props.AboutValue
    const CheckDirect = (val) => {
        if (val % 2 !== 0) {
            return "timeline-container right"
        } else {
            return "timeline-container left"
        }
    }
    useEffect(() => {
        props.AboutUs()
    }, [])
    return (
        <div>
            <SelectPlace search={props.SearchPlace} />
            {AboutValue.length === 0 ?
                <div className="w-80 d-flex align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
                    <div className="loader"></div>
                </div> :
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
}
export default About;