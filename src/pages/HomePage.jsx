import React from 'react';

const HomePage = () => {
  const categories = ['Development', 'Design', 'Business', 'Marketing', 'Photography'];
  const courses = [
    { title: 'React for Beginners', instructor: 'Jane Doe', price: '$49.99' },
    { title: 'UI/UX Design Masterclass', instructor: 'John Smith', price: '$59.99' },
    { title: 'Full Stack Web Dev', instructor: 'Alice Johnson', price: '$79.99' },
  ];

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f9f9ff' }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(270deg, #00C9FF, #92FE9D)',
        backgroundSize: '400% 400%',
        animation: 'gradient 10s ease infinite',
        color: '#fff',
        padding: '1rem 2rem',
        textAlign: 'center',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <h1 style={{ margin: 0, fontSize: '2.5rem' }}>StudySphere</h1>
        <p style={{ marginTop: '0.25rem', fontSize: '1rem' }}>By Rahul KC</p>
      </header>

      {/* Hero Section */}
      <section style={{
        height: '90vh',
        background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', animation: 'fadeInUp 1s ease-out' }}>
          Welcome to StudySphere
        </h2>
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
            boxShadow: '0 3px 6px rgba(0,0,0,0.1)'
          }}
          onClick={() => alert('Explore courses coming soon!')}
        >
          Browse Courses
        </button>
      </section>

      {/* Categories */}
      <section style={{ padding: '4rem 2rem', background: '#f0f2ff' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Popular Categories</h2>
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
              boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
              minWidth: '150px',
              textAlign: 'center'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#fff' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Featured Courses</h2>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          {courses.map((course, index) => (
            <div key={index} style={{
              backgroundColor: '#f9f9f9',
              padding: '1.5rem',
              borderRadius: '10px',
              boxShadow: '0 6px 12px rgba(0,0,0,0.05)',
              maxWidth: '300px',
              transition: 'transform 0.3s ease'
            }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
              <h3>{course.title}</h3>
              <p>Instructor: <strong>{course.instructor}</strong></p>
              <p style={{ fontWeight: 'bold', color: '#000DFF' }}>{course.price}</p>
              <button style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#000DFF',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: '0.3s'
              }}
                onMouseEnter={e => e.target.style.backgroundColor = '#3842e0'}
                onMouseLeave={e => e.target.style.backgroundColor = '#000DFF'}>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'linear-gradient(to right, #000DFF, #6B73FF)',
        color: 'white',
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1rem',
        marginTop: '3rem'
      }}>
        <p>&copy; {new Date().getFullYear()} StudySphere. Designed by <strong>Rahul KC</strong>. All rights reserved.</p>
      </footer>

      {/* Animations */}
      <style>{`
        @keyframes gradient {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
