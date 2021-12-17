import React from 'react';

import SectionStyled from '../styled/LearnMore';
import useScroll from '../../utils/useScroll';
import useSpacing from '../../utils/useSpacing';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faNodeJs, faGit, faNpm, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

export default function LearnMore() {
    const { padding } = useSpacing();
    const scrollYOffset = useScroll();
    return (
        <SectionStyled id="learn-more" scrollYOffset={scrollYOffset} padding={padding}>
            <h2 className="container-md">UI/UX Unique<span className="scanner" aria-hidden="true"></span><div></div></h2>
            <hr />
            <div className="overview">
                <div className="container-md">
                    <blockquote cite="https://www.brainyquote.com/topics/tools-quotes">
                        <h3>"We become what we behold. We shape our tools and then our tools shape us."</h3>
                        - Marshall McLuhan
                    </blockquote>
                    <div className="icons">
                        
                    </div>
                    <h4 className="container-xsm">Toolkit</h4>
                    <div className="toolkit">
                        <ul>
                            <li>HTML5<FontAwesomeIcon icon={faHtml5} /></li>
                            <li>CSS3<FontAwesomeIcon icon={faCss3} /></li>
                            <li>JavaScript<FontAwesomeIcon icon={faJs} /></li>
                            <li>React.js<FontAwesomeIcon icon={faReact} /></li>
                        </ul>
                        <ul>
                            <li>Node.js<FontAwesomeIcon icon={faNodeJs} /></li>
                            <li>Express<FontAwesomeIcon icon={faNodeJs} /></li>
                        </ul>
                        <ul>
                            <li>Git<FontAwesomeIcon icon={faGit} /></li>
                            <li>NPM<FontAwesomeIcon icon={faNpm} /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </SectionStyled>
    )
}
