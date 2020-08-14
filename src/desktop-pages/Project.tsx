import * as React from 'react'
import pups from '@pups/js'


import { Project as ProjectType } from '../hooks'
import { Mousable } from '../components/Cursor'

const Project: React.FunctionComponent<ProjectType> = (props: ProjectType) => {

    return (
        <div className="project" style={{ padding: pups.ms(1) }}>
            <div className="project__name">{props.name}</div>
            <div className="project__description">{props.description}</div>
            <div className="project__footer" style={{ marginTop: pups.ms(1) }}>

                <div className="project__footer__stars project__footer__iconable">
                    <svg style={{ height: pups.ms(0), marginRight: pups.ms(-2) }} xmlns="http://www.w3.org/2000/svg" width="25.848" height="24" viewBox="0 0 25.848 24">
                        <path id="star" d="M25.848,73.231,16.8,72.055,12.924,64,9.043,72.055,0,73.231l6.649,6.026L4.933,88l7.991-4.293L20.917,88,19.2,79.257Z" transform="translate(0 -64)" fill="#fff"/>
                    </svg>

                    <div>{props.stars}</div>
                </div>
                <div className="project__footer__forks project__footer__iconable" style={{ marginLeft: pups.ms(0) }}>
                    <svg style={{ height: pups.ms(0), marginRight: pups.ms(-2) }} xmlns="http://www.w3.org/2000/svg" width="16" height="24" viewBox="0 0 16 24">
                        <g id="XMLID_2_" transform="translate(-28 -18)">
                            <path id="XMLID_8_" d="M32.52,39a1.62,1.62,0,0,0-.44-1.08A1.337,1.337,0,0,0,31,37.48a1.545,1.545,0,0,0-1.08.44A1.477,1.477,0,0,0,29.48,39a1.545,1.545,0,0,0,.44,1.08,1.477,1.477,0,0,0,1.08.44,1.545,1.545,0,0,0,1.08-.44A1.391,1.391,0,0,0,32.52,39Zm0-18a1.62,1.62,0,0,0-.44-1.08A1.477,1.477,0,0,0,31,19.48a1.545,1.545,0,0,0-1.08.44A1.477,1.477,0,0,0,29.48,21a1.62,1.62,0,0,0,.44,1.08,1.477,1.477,0,0,0,1.08.44,1.545,1.545,0,0,0,1.08-.44A1.391,1.391,0,0,0,32.52,21Zm10,2a1.62,1.62,0,0,0-.44-1.08A1.337,1.337,0,0,0,41,21.48a1.545,1.545,0,0,0-1.08.44A1.337,1.337,0,0,0,39.48,23a1.545,1.545,0,0,0,.44,1.08,1.477,1.477,0,0,0,1.08.44,1.545,1.545,0,0,0,1.08-.44A1.62,1.62,0,0,0,42.52,23ZM44,23a2.883,2.883,0,0,1-.4,1.52,2.8,2.8,0,0,1-1.08,1.08c-.04,3-1.2,5.16-3.52,6.48a20.974,20.974,0,0,1-3.16,1.28,9.716,9.716,0,0,0-2.64,1.12,1.788,1.788,0,0,0-.64,1.56v.4a3.1,3.1,0,0,1,1.08,1.08,3.182,3.182,0,0,1,.4,1.52,2.779,2.779,0,0,1-.88,2.12A3.054,3.054,0,0,1,31,42a2.779,2.779,0,0,1-2.12-.88A3,3,0,0,1,28,39a2.883,2.883,0,0,1,.4-1.52,2.8,2.8,0,0,1,1.08-1.08V23.6a3.1,3.1,0,0,1-1.08-1.08A3.183,3.183,0,0,1,28,21a2.779,2.779,0,0,1,.88-2.12A3,3,0,0,1,31,18a2.779,2.779,0,0,1,2.12.88A3,3,0,0,1,34,21a2.883,2.883,0,0,1-.4,1.52,2.8,2.8,0,0,1-1.08,1.08v7.76a16.767,16.767,0,0,1,2.4-.88A8.575,8.575,0,0,0,36.28,30c.32-.16.72-.28,1.12-.48a3.654,3.654,0,0,0,.92-.6,4.66,4.66,0,0,0,.64-.8,3.233,3.233,0,0,0,.44-1.08,7.454,7.454,0,0,0,.12-1.44,3.1,3.1,0,0,1-1.08-1.08,3.183,3.183,0,0,1-.4-1.52,2.779,2.779,0,0,1,.88-2.12A2.839,2.839,0,0,1,41.04,20a2.779,2.779,0,0,1,2.12.88A2.9,2.9,0,0,1,44,23Z" fill="#fff"/>
                        </g>
                    </svg>

                    <div>{props.forks}</div>
                </div>
                
                <div className="project__footer__link">
                    <Mousable radius="2px">
                        <div>
                            <a target="_blank" href={props.url} rel="noopener noreferrer">
                                <div>
                                    View this project
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="158.227" height="8.901" viewBox="0 0 158.227 8.901">
                                    <path id="Path_8" data-name="Path 8" d="M2.889,13.667v7.4H158.116v-7.4" transform="translate(-1.389 -13.667)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="3"/>
                                </svg>
                            </a>
                        </div>
                    </Mousable>
                </div>
            </div>
        </div>
    )
}

export default Project