"use client";
import Spline from '@splinetool/react-spline';
import '../contact/contact.css';

export default function ContactPage() {
    return (
      <div className="background-wrapper">
      <Spline
        scene="https://prod.spline.design/svOey8dx7oUJUeXc/scene.splinecode" 
        className="spline-background"
      />
      <div className="content-overlay">
       
       <h1 className="h1_Contact_us">Contact Us</h1>
       <p>Photography &  videography for <br></br> <strong>food</strong>, <strong>events</strong>, <strong>commercials</strong>, <strong>weddings</strong> <br></br> & <strong>social media</strong>.</p>
       <br></br>
       <p>
          <a href="mailto:contact@cinefirm.in">contact@cinefirm.in</a> <strong>|</strong>{" "}
          <a href="tel:+919885859637">+91-98858 59637</a>
        </p> 
        <br></br>
        <h2>Why Choose Us?</h2>
        <p>
          High-quality photography & videography <br></br>
          Professional & creative experience <br></br>
          Custom packages <br></br>
          Quick delivery & exceptional customer service <br></br>
        </p>
        <br></br>
        <h2>Our Services Include</h2>
        <p>
          Event Coverage<br></br>
          Commercials & Brand Films<br></br>
          Food Photography & Videography<br></br>
          Social Media Content <br></br>
          Documentary & Short Films <br></br>
          Drone Photography & Videography <br></br>
          Product Photography <br></br>
          Event Livestreaming <br></br>
          Fashion Photography <br></br>
          360° Virtual Tours <br></br>
          & Moreeeeee
        </p>
      </div>
    </div>
    )
  }