import React from 'react';

export default function Project({ title, image, deployedLink, githubLink }) {
  const fallbackImage = '/assets/default-project.png'; // Make sure this image exists in public/assets or src/assets

  return (
    <div style={styles.card}>
      <img
        src={image || fallbackImage}
        alt={`${title} screenshot`}
        style={styles.image}
      />
      <h3 style={styles.title}>{title}</h3>
      <div style={styles.links}>
        {deployedLink && (
          <a href={deployedLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
            🚀 Live Demo
          </a>
        )}
        <a href={githubLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
          💻 GitHub
        </a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '1rem',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease-in-out',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '0.75rem',
  },
  title: {
    marginBottom: '0.5rem',
    fontSize: '1.2rem',
    color: '#222',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.2rem',
    marginTop: '0.5rem',
  },
  link: {
    color: '#0077cc',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
  },
};
