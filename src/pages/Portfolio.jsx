import React, { useEffect, useState } from 'react';

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.github.com/users/LPerez21/repos')
      .then((res) => res.json())
      .then((data) => {
        const sorted = data
          .filter((repo) => !repo.fork) // Exclude forks
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        setRepos(sorted);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load repos:', err);
        setLoading(false);
      });
  }, []);

  return (
    <section style={styles.section}>
      <h2 style={styles.header}>My GitHub Repositories</h2>

      {loading ? (
        <p>Loading repositories...</p>
      ) : repos.length === 0 ? (
        <p>No public repositories found.</p>
      ) : (
        <ul style={styles.list}>
          {repos.map((repo) => (
            <li key={repo.id} style={styles.card}>
              <h3 style={styles.title}>{repo.name}</h3>
              <p style={styles.desc}>
                {repo.description
                  ? repo.description.length > 100
                    ? repo.description.slice(0, 100) + '...'
                    : repo.description
                  : 'No description provided.'}
              </p>
              <p style={styles.meta}>
                🕒 Last updated:{' '}
                {new Date(repo.updated_at).toLocaleDateString(undefined, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  🔗 View on GitHub
                </a>
                {repo.homepage && (
                  <>
                    {' | '}
                    <a href={repo.homepage} target="_blank" rel="noopener noreferrer" style={styles.link}>
                      🚀 Live Demo
                    </a>
                  </>
                )}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

const styles = {
  section: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    color: '#333',
  },
  header: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#0077cc',
    borderBottom: '2px solid #0077cc',
    paddingBottom: '0.5rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  card: {
    backgroundColor: '#fdfdfd',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '1.2rem',
    marginBottom: '1.5rem',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
  },
  title: {
    marginBottom: '0.4rem',
    fontSize: '1.25rem',
    color: '#222',
  },
  desc: {
    marginBottom: '0.5rem',
    color: '#555',
    fontStyle: 'italic',
  },
  meta: {
    fontSize: '0.9rem',
    marginBottom: '0.75rem',
    color: '#888',
  },
  link: {
    color: '#0077cc',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};
