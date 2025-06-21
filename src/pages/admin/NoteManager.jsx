import React, { useState } from 'react';

const NotesManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedVisibility, setSelectedVisibility] = useState('all');

  const notes = [
    {
      id: '1',
      title: 'Java Variables and Data Types',
      content: 'Function in Java: Variables are containers for storing data values...',
      course: 'Java Course',
      user: 'Alice Johnson',
      updatedAt: '2024-01-20',
      tags: ['variables', 'data-types', 'basics'],
      isPublic: true,
      likes: 24,
    },
    {
      id: '2',
      title: 'Python List Comprehensions',
      content: 'List comprehensions provide a concise way to create lists...',
      course: 'Python',
      user: 'Bob Smith',
      updatedAt: '2024-01-22',
      tags: ['lists', 'comprehensions', 'advanced'],
      isPublic: false,
      likes: 18,
    },
  ];

  const courses = ['all', 'Java Course', 'Python'];
  const visibilityOptions = ['all', 'public', 'private'];

  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.user.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCourse = selectedCourse === 'all' || note.course === selectedCourse;
    const matchesVisibility =
      selectedVisibility === 'all' ||
      (selectedVisibility === 'public' && note.isPublic) ||
      (selectedVisibility === 'private' && !note.isPublic);

    return matchesSearch && matchesCourse && matchesVisibility;
  });

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', marginBottom: '20px' }}>Notes Manager</h1>

      {/* Filters */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', marginRight: '10px', width: '200px' }}
        />
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        >
          {courses.map((course) => (
            <option key={course} value={course}>
              {course === 'all' ? 'All Courses' : course}
            </option>
          ))}
        </select>
        <select
          value={selectedVisibility}
          onChange={(e) => setSelectedVisibility(e.target.value)}
          style={{ padding: '8px' }}
        >
          {visibilityOptions.map((option) => (
            <option key={option} value={option}>
              {option === 'all' ? 'All Notes' : option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Notes List */}
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => (
          <div
            key={note.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '15px',
              marginBottom: '15px',
            }}
          >
            <h3 style={{ marginBottom: '5px' }}>{note.title}</h3>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>{note.content}</p>
            <p style={{ fontSize: '13px' }}>
              <strong>Course:</strong> {note.course} | <strong>User:</strong> {note.user}
            </p>
            <p style={{ fontSize: '13px' }}>
              <strong>Visibility:</strong> {note.isPublic ? 'Public' : 'Private'} | <strong>Likes:</strong> {note.likes}
            </p>
            <p style={{ fontSize: '12px', color: 'gray' }}>
              Updated: {new Date(note.updatedAt).toLocaleDateString()}
            </p>
          </div>
        ))
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
};

export default NotesManager;
