import React from 'react';
import profilePic from '../assets/20240828_141756.jpg';

export default function About() {
  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <img src={profilePic} alt="Luis Perez" style={styles.image} />
        <div>
          <h2 style={styles.name}>Luis Perez</h2>
          <h4 style={styles.title}>Full-Stack Developer | UI/UX Designer | Technical Mentor</h4>
        </div>
      </div>

      <div style={styles.bio}>
        <p>
          I'm a Florida-based developer who blends creativity with code. With a strong foundation in 
          <strong> React, FastAPI, Node.js, and modern UI/UX principles</strong>, I build performant, responsive applications that solve real-world problems.
        </p>
        <p>
          As a self-starter and lifelong learner, I’ve worked on projects ranging from dating apps to real-time games and financial tools. I’m especially passionate about clean design, interactive user interfaces, and creating scalable backend APIs.
        </p>
        <p>
          In addition to development, I have experience as a trainer and mentor, guiding new developers through full-stack workflows and deployment strategies. I enjoy contributing to collaborative teams and continuously leveling up my skills.
        </p>
        <p>
          Outside of coding, you’ll find me analyzing stock trends, studying game mechanics, or helping others navigate tech careers.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    backgroundColor: '#fefefe',
    color: '#222',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: '2rem',
  },
  image: {
    width: '180px',
    borderRadius: '50%',
    border: '4px solid #0077cc',
    boxShadow: '0 0 10px rgba(0,0,0,0.15)',
  },
  name: {
    fontSize: '2rem',
    marginBottom: '0.25rem',
    color: '#0077cc',
  },
  title: {
    color: '#444',
    fontWeight: 'normal',
  },
  bio: {
    marginBottom: '2rem',
  },
  resume: {
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: '2px solid #0077cc',
  },
  link: {
    color: '#0077cc',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    display: 'inline-block',
  },
};
