import React, { useState } from 'react';

const AssignmentManager = () => {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const assignments = [
    {
      id: '1',
      title: 'Java Variables Assignment',
      description: 'Write a program using different variable types in Java.',
      course: 'Java Course',
      dueDate: '2025-06-25',
      status: 'pending',
    },
    {
      id: '2',
      title: 'Python Loops',
      description: 'Solve 5 loop-based problems in Python.',
      course: 'Python Basics',
      dueDate: '2025-06-24',
      status: 'submitted',
    },
    {
      id: '3',
      title: 'Flutter Layout Challenge',
      description: 'Recreate a mobile UI using Flutter widgets.',
      course: 'Flutter Intro',
      dueDate: '2025-06-28',
      status: 'pending',
    },
  ];

  const courses = ['all', 'Java Course', 'Python Basics', 'Flutter Intro'];
  const statuses = ['all', 'pending', 'submitted', 'graded'];

  const filteredAssignments = assignments.filter((a) => {
    const matchesCourse = selectedCourse === 'all' || a.course === selectedCourse;
    const matchesStatus = selectedStatus === 'all' || a.status === selectedStatus;
    return matchesCourse && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'submitted':
        return 'bg-blue-100 text-blue-800';
      case 'graded':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📝 Assignments</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mb-6">
        <select
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
        >
          {courses.map((course) => (
            <option key={course} value={course}>
              {course === 'all' ? 'All Courses' : course}
            </option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Assignment List */}
      {filteredAssignments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAssignments.map((a) => (
            <div key={a.id} className="bg-white p-6 rounded-xl shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{a.title}</h3>
              <p className="text-gray-700 mb-2">{a.description}</p>
              <p className="text-sm text-gray-600">
                📘 <strong>Course:</strong> {a.course}
              </p>
              <p className="text-sm text-gray-600">
                📅 <strong>Due Date:</strong> {a.dueDate}
              </p>
              <span
                className={`inline-block mt-3 px-3 py-1 text-sm rounded-full font-medium ${getStatusColor(
                  a.status
                )}`}
              >
                {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">No assignments found.</p>
      )}
    </div>
  );
};

export default AssignmentManager;
