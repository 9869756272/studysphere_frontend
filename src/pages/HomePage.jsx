import React from 'react';

const HomePage = () => {
  const categories = ['Development', 'Design', 'Business', 'Marketing', 'Photography'];
  const courses = [
    { title: 'React for Beginners', instructor: 'Jane Doe', price: '$49.99' },
    { title: 'UI/UX Design Masterclass', instructor: 'John Smith', price: '$59.99' },
    { title: 'Full Stack Web Dev', instructor: 'Alice Johnson', price: '$79.99' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        height: '100vh',
        background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Segoe UI, sans-serif',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to StudySphere</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
          Learn from the best instructors. Upskill, reskill, and grow your career with courses across tech, business, and more.
        </p>
        <button
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: '#fff',
            color: '#000DFF',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: '0.3s'
          }}
          onClick={() => alert('Explore courses coming soon!')}
        >
          Browse Courses
        </button>
      </div>

      {/* Categories Section */}
      <section style={{ padding: '3rem 2rem', backgroundColor: '#f4f4f4' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Popular Categories</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          {categories.map((cat, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              padding: '1rem 2rem',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: '0.3s',
              fontSize: '1.1rem'
            }}>
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section style={{ padding: '3rem 2rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Featured Courses</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {courses.map((course, index) => (
            <div key={index} style={{
              backgroundColor: '#fff',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              maxWidth: '300px'
            }}>
              <h3>{course.title}</h3>
              <p>By {course.instructor}</p>
              <p><strong>{course.price}</strong></p>
              <button style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#000DFF',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer style={{
        backgroundColor: '#000DFF',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        marginTop: '3rem'
      }}>
        <p>&copy; {new Date().getFullYear()} StudySphere. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
