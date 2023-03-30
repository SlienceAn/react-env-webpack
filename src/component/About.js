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
                    <div className="loader" />
                </div> :
                <div className="timeline-section">
                    {AboutValue.map((el, index) =>
                        <div className={CheckDirect(index)} key={el.title}>
                            <div className={index % 2 !== 0 ? 'content d-flex flex-row-reverse' : 'content d-flex'}>
                                <div className={index % 2 === 0 ? 'col-5 p-0 content-left-img' : 'col-5 p-0 content-right-img'}>
                                    <img src={'https://picsum.photos/500/400?random'+index} width="100%" alt='missing' />
                                </div>
                                <div className='col-7' style={index % 2 === 0 ? { padding: '15px 15px 15px 30px' } : { padding: '15px 30px 15px 15px' }}>
                                    <h2>{el.title}</h2>
                                    <p>{el.text}</p>
                                </div>
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