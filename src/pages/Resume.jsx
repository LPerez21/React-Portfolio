import React from 'react';

export default function Resume() {
  return (
    <section style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2>📄 Resume</h2>

      {/* View and Download Links */}
      <p style={{ fontSize: '1.1rem' }}>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#007bff', marginRight: '1rem' }}
        >
          🔍 View Resume (PDF)
        </a>
        |
        <a
          href="/resume.pdf"
          download
          style={{ color: '#007bff', marginLeft: '1rem' }}
        >
          ⬇️ Download Resume (DOCX)
        </a>
      </p>

      {/* Embedded PDF Preview */}
      <iframe
        src="/resume.pdf"
        width="100%"
        height="600px"
        title="Resume Preview"
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      ></iframe>

      {/* Proficiencies Sections */}
      <div style={{ display: 'grid', gap: '2rem' }}>
        <div>
          <h3>🎨 Front-End Proficiencies</h3>
          <ul>
            <li>HTML / CSS</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Responsive Design</li>
            <li>Bootstrap / Tailwind CSS / Material UI</li>
          </ul>
        </div>

        <div>
          <h3>🖥️ Back-End Proficiencies</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB & Mongoose</li>
            <li>SQL & Sequelize</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>

        <div>
          <h3>🧰 Tools & Platforms</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Vite / Webpack</li>
            <li>Netlify / Render / Heroku</li>
            <li>Visual Studio Code</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
