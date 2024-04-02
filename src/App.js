import React from 'react';

function PersonalWebsite() {
    return (
        <div>
            <header>
                <h1>Sai Chanda</h1>
                <h2>Personal Website</h2>
            </header>

            <section>
                <h2>About Me</h2>
                <p>
                    I am a computer science major at the University of Maryland: College Park, and love everything about it.
                    I grew up in Northern Virginia and went to Thomas Jefferson High School for Science and Technology in Alexandria, VA.
                    While currently looking for internships and more professional experiences in CS,
                    I am working on many projects on my own time, with some of them being displayed on this website.
                </p>
            </section>

            <section>
                <h2>Interests</h2>
                {}
            </section>

            <section>
                <h2>Contact</h2>
                <p>
                    <br /><strong>Phone: 571-536-0140</strong>
                    <br /><strong><a href="https://www.linkedin.com/in/sai-chanda/">Linkedin</a></strong>
                    <br /><strong>Email: Smchanda2244@gmail.com</strong>
                </p>
            </section>

            <footer>
                &copy; 2024 Sai Chanda
            </footer>
        </div>
    );
}

export default PersonalWebsite;

