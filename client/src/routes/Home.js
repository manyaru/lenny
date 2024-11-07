import React from 'react';
import heroImg from '../assets/hero-img.png';
import '../styles/Home.css';


const Home = () => {
    return (
        <div className="hero">
            <div className="hero-text">
            
            <p>
    Welcome to Task Master Pro, your ultimate tool for creating, managing, and completing tasks with ease! Task Master Pro empowers you to take control of your day by allowing you to break down projects, set deadlines, and stay on top of every task, big or small.
</p><br />
<p>
    With Task Master Pro, you can easily create and organize tasks, helping you maintain a clear and structured approach to your goals. Whether you’re managing work projects, school assignments, or personal tasks, our app is designed to streamline your workflow and support your journey toward productivity and success.
</p><br />
<p>
    To get started, simply go to the top right corner of the page and click the three dashed lines (menu icon). This will guide you through the login process and help you set up your account.
</p>


            </div>
            <img src={heroImg} alt="Hero desc" />
        </div>
    );
}

export default Home;