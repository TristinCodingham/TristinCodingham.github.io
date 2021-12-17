import React, { useState, useEffect } from 'react';

import Jumbotron from '../components/layout/Jumbotron';
import Container from '../components/styled/Container';

import useSpacing from '../utils/useSpacing';
import LearnMore from '../components/layout/LearnMore';

export default function HomePage() {
    const [offset, setOffset] = useState(window.pageYOffset);
    const { padding } = useSpacing();
    
    const handleScroll = () => {
        setOffset(window.pageYOffset);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [offset]);

    return (
        <main id="page-top">
            <Jumbotron padding={padding} />

            <Container padding={padding}>
                <LearnMore />
            </Container>

            <section className="container-md">
                <h2>Minimalism<span className="scanner" aria-hidden="true"></span><div></div></h2>
                <hr />
                <div className="container-md">
                    <h3>Minimal is Memorable</h3>
                </div>
            </section>

            <section className="container-md">
                <h2>Simple Effective</h2>
                <hr />
                <div className="container-md">
                    <h3>Development</h3>
                    <p>
                        <em>Parallel Universes</em>? Scientists aren't sure, but it exists in other places, such as a <b>website parallel</b> to it's <b>wireframe</b>.
                    </p>
                    <br />
                    <p>
                        With pixel-perfect duplicates of the wireframe counterparts, their <b>HTML</b> is structurally sound using the latest <b>semantics</b> and best practices known to mankind.
                    </p>
                </div>
            </section>

            <section className="container-md">
                <h2>Responsive</h2>
                <hr />
                <div className="container-md">
                    <h3>Mobile-first</h3>
                    <p>
                        &gt; <b>50%</b> of Web traffic comes from <b>mobile devices</b>. 
                    </p>
                    <br />
                    <p>
                        Majority of people browse the Web from their smartphones, making it essential to develop for mobile.
                    </p>
                    <p>
                        Beginning development at the mobile device scale ensures an easy process when scaling up to desktop.
                    </p>
                </div>
            </section>

            <section className="container-md">
                <h2>Semantic Fanatic</h2>
                <hr />
                <div className="container-md">
                    <h3>Divitis</h3>
                    <p>
                        There is a term amongst Web developers known as <em>Divitis</em>, it is given to those who structure <b>everything</b> using <code>&lt;div&gt;</code> tags.
                        I too was once diagnosed with it but I have recovered and since moved on, thanks to <b>HTML5</b>! 
                    </p>
                </div>
            </section>

            <section className="container-md">
                <h2>Accessible</h2>
                <hr />
                <div className="container-md">
                    <h3>Required</h3>
                    <p>
                        Some parts of the world have made it <b>mandatory</b> for the Web to be <b>accessible to as many as possible</b>, such as people with hearing disabilities, colour-blindness or blindness.
                    </p>
                    <br />
                    <p>There are many ways we can address this, thr /ough <b>easy tab navigation</b>, <code>aria</code> attributes for <b>screen-readers and more</b>.</p>
                </div>
            </section>
            
            <section className="container-md">
                <h2>SEO Friendly</h2>
                <hr />
                <div className="container-md">
                    <h3>Seobility</h3>
                    <p>
                        <em>Search Engine Optimisation</em>
                    </p>
                    <p></p>
                    <a className="seo-score" href="https://freetools.seobility.net/en/seocheck/tristincodingham.github.io"><img src="https://freetools.seobility.net/widget/widget.png?url=tristincodingham.github.io" alt="Seobility Score for https://tristincodingham.github.io" /></a>
                </div>
            </section>

            <section className="container-md">
                <h2>FAQ</h2>
                <hr />
                <div className="container-md">
                    <h3>Frequently Asked Questions</h3>
                    <details>
                        <summary>Are you a Web Designer?</summary>
                        <p>No. I take Web Designer workings and translate them into their website equivalents.</p>
                    </details>
                    <details>
                        <summary>Are you an agency?</summary>
                        <p>No.</p>
                    </details>
                    <details>
                        <summary>Are you a business?</summary>
                        <p>No. I'm a Web Developer looking to join a business.</p>
                    </details>
                    <details>
                        <summary>How many years of professional experience do you have?</summary>
                        <p>One year and counting.</p>
                    </details>
                    <details>
                        <summary>How many years did you study for?</summary>
                        <p>Three years and counting.</p>
                    </details>
                    <details>
                        <summary>Do you have a degree?</summary>
                        <p>No. I'm a self-taught Web Developer.</p>
                    </details>
                    <details>
                        <summary>What other technologies do you know?</summary>
                        <p>C# (CSharp); ASP.NET; Java; Node.js;</p>
                    </details>
                </div>
            </section>
        </main>
    )
}
