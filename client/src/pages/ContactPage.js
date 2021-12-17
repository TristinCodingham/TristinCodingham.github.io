import React from 'react';

export default function ContactPage() {
    return (
        <main>
            <section className="container-md">
                <h2>Contact</h2>
                <hr />
                <div className="container-md">
                    <h3>Drop an email and I'll get back to you ASAP!</h3>
                    <form name="contact" netlify="true">
                        <p>
                            <label>Name <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Email <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
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
