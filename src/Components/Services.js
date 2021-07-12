import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5"> My Services </h1>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                                <h3>Software Development</h3>
                                <p>In progress</p>
                            </div>
                        </div>
                        {/* / */}
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>

                                <h3>Web Development</h3>
                                <p>In Progress</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Services
