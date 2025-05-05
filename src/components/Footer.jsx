import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Luis Perez</p>
      <div style={styles.icons}>
        <a href="https://github.com/LPerez21" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/luis-perez-6a3546171/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: '2rem',
    padding: '1rem',
    backgroundColor: '#111',
    color: 'white',
    textAlign: 'center',
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '0.5rem',
  },
};
