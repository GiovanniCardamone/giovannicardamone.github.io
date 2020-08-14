import * as React from 'react'

import DImage from '../components/DImage'
import Motto from '../components/Motto'
import pups from '@pups/js'


import { Mousable } from '../components/Cursor'


const Aside: React.FunctionComponent<{ motto: string, loaded: boolean }> = (props: { motto: string, loaded: boolean }) => {
    return (
        <aside style={{ position: 'relative', width: '100%' }}>
            <div style={{ position: 'absolute', left: 0, top: 0 }}>
                <DImage src="https://avatars0.githubusercontent.com/u/5117748" alt="Giovanni Cardamone" loaded={props.loaded}>
                    <Motto motto={props.motto} />
                </DImage>


                <div style={{ display: 'grid', justifyItems: 'right', gridTemplateRows: 'repeat(3, auto)', gap: pups.ms(1), marginTop: pups.ms(1) }}>  
                    
                    <div style={{ lineHeight: 1, textAlign: 'right' }} className={ props.loaded ? 'appear-a-1 appear' : 'appear'}>
                        <div style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.4)' }}>Contact me at</div>
                        <Mousable radius="4px">
                            <div style={{ padding: '0.05rem 0.2rem 0.2rem' }}>
                                <a href="mailto:g.cardamone2@gmail.com">g.cardamone2@gmail.com</a>
                            </div>
                        </Mousable>
                    </div>

                    <div className={ props.loaded ? 'appear-a-2 appear' : 'appear'}>
                        <Mousable>
                            <a href="http://giovannicardamone.github.io/curriculum/" target="_blank" rel="noopener noreferrer" className="a-button" id="download_cv">Curriculum Vitae</a>
                        </Mousable>
                    </div>
                    
                    <div className="socials">
                        <div className={ props.loaded ? 'appear-a-3 appear' : 'appear' }>
                            <Mousable radius="4px">
                                <a href="https://github.com/GiovanniCardamone" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24.607 24"><path d="M12.3 0a12.3 12.3 0 00-3.886 23.977c.615.113.84-.267.84-.592 0-.293-.011-1.263-.017-2.29-3.421.743-4.144-1.451-4.144-1.451a3.262 3.262 0 00-1.366-1.8c-1.118-.763.085-.748.085-.748A2.582 2.582 0 015.7 18.365a2.619 2.619 0 003.58 1.021 2.63 2.63 0 01.781-1.643c-2.731-.311-5.6-1.367-5.6-6.081a4.763 4.763 0 011.265-3.3A4.432 4.432 0 015.841 5.1s1.032-.33 3.384 1.262a11.647 11.647 0 016.159 0c2.347-1.59 3.38-1.262 3.38-1.262a4.413 4.413 0 01.123 3.256 4.749 4.749 0 011.265 3.3c0 4.726-2.878 5.767-5.619 6.072a2.931 2.931 0 01.835 2.277c0 1.645-.017 2.971-.017 3.376 0 .327.224.71.847.59A12.306 12.306 0 0012.3 0z" fill="#fff"/></svg>
                                </a>
                            </Mousable>
                        </div>
                        <div className={ props.loaded ? 'appear-a-4 appear' : 'appear' }>
                            <Mousable radius="4px">
                                <a href="https://www.linkedin.com/in/giovanni-cardamone-41306973/" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23.849 24"><path data-name="Path 3" d="M12.826 10.828v-.043l-.028.043z" fill="#fff"/><path data-name="Path 4" d="M22.086 0H1.762A1.741 1.741 0 000 1.719v20.562A1.741 1.741 0 001.762 24h20.324a1.742 1.742 0 001.763-1.719V1.719A1.742 1.742 0 0022.086 0zM7.229 20.091h-3.6V9.254h3.6zm-1.8-12.318h-.023a1.877 1.877 0 11.046-3.74 1.878 1.878 0 11-.024 3.744zm14.79 12.318h-3.6v-5.8c0-1.456-.521-2.45-1.824-2.45a1.973 1.973 0 00-1.849 1.318 2.466 2.466 0 00-.118.879v6.052h-3.6s.047-9.821 0-10.837h3.6v1.534a3.577 3.577 0 013.247-1.79c2.37 0 4.147 1.549 4.147 4.878v6.215z" fill="#fff"/></svg>
                                </a>
                            </Mousable>
                        </div>
                        <div className={ props.loaded ? 'appear-a-5 appear' : 'appear' }>
                            <Mousable radius="4px">
                                <a href="https://twitter.com/GiovanniCardam2" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path data-name="Subtraction 1" d="M12 24A12 12 0 013.515 3.515a12 12 0 1116.97 16.97A11.921 11.921 0 0112 24zm-7.68-7.176a8.964 8.964 0 0013.8-7.552c0-.143 0-.281-.009-.41a6.323 6.323 0 001.569-1.629 6.26 6.26 0 01-1.81.5 3.146 3.146 0 001.386-1.743 6.278 6.278 0 01-2 .766 3.162 3.162 0 00-2.3-1h-.081a3.16 3.16 0 00-2.988 3.869 8.976 8.976 0 01-6.5-3.293 3.152 3.152 0 00.976 4.208 3.156 3.156 0 01-1.428-.4v.041a3.159 3.159 0 002.529 3.089 3.155 3.155 0 01-1.424.054 3.151 3.151 0 002.943 2.189 6.287 6.287 0 01-3.912 1.349 6.511 6.511 0 01-.75-.037z" fill="#fff"/></svg>
                                </a>
                            </Mousable>
                        </div>
                        <div className={ props.loaded ? 'appear-a-6 appear' : 'appear' }>
                            <Mousable radius="4px">
                                <a href="https://instagram.com/giovannicardamone/" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path data-name="Path 1" d="M12 6.6a5.345 5.345 0 105.345 5.345A5.355 5.355 0 0012 6.6zm0 8.769a3.424 3.424 0 113.424-3.424A3.44 3.44 0 0112 15.369z" fill="#fff"/><circle data-name="Ellipse 1" cx="1.608" cy="1.608" r="1.608" transform="translate(16.703 4.128)" fill="#fff"/><path data-name="Path 2" d="M22.065 1.984A6.891 6.891 0 0016.984 0H7.016A6.629 6.629 0 000 7.016v9.919a6.962 6.962 0 002.032 5.177A7.061 7.061 0 007.065 24h9.871a7.145 7.145 0 005.081-1.887A6.927 6.927 0 0024 16.984V7.016a6.936 6.936 0 00-1.935-5.032zm-.194 15a4.728 4.728 0 01-1.4 3.532 5 5 0 01-3.532 1.258H7.065a5 5 0 01-3.532-1.258 4.864 4.864 0 01-1.306-3.581V7.016a4.824 4.824 0 011.305-3.532 4.921 4.921 0 013.532-1.258h9.968a4.824 4.824 0 013.532 1.306 4.993 4.993 0 011.306 3.484v9.968z" fill="#fff"/></svg>
                                </a>
                            </Mousable>
                        </div>
                        <div className={ props.loaded ? 'appear-a-7 appear' : 'appear' }>
                            <Mousable radius="4px">
                                <a href="https://www.facebook.com/G.Cardamone2" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4a4.139 4.139 0 00-4-4H4a4.139 4.139 0 00-4 4v16a4.139 4.139 0 004 4h8v-9.067H9.067v-4H12V9.387c0-2.693 2.027-5.12 4.507-5.12h3.227v4h-3.227a.983.983 0 00-.773 1.067v1.6h4v4h-4V24H20a4.139 4.139 0 004-4z" fill="#fff" data-name="Group 1"/></svg>
                                </a>
                            </Mousable>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}


export default Aside