import React, { useState } from 'react';

const CoursesManager = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const courses = [
    {
      id: '1',
      title: 'Java Course',
      description: 'Learn Java from scratch.',
      instructor: 'Dr. Sarah Johnson',
      category: 'Programming',
      status: 'published',
    },
    {
      id: '2',
      title: 'Python Basics',
      description: 'Intro to Python programming.',
      instructor: 'Mark Thompson',
      category: 'Programming',
      status: 'published',
    },
    {
      id: '3',
      title: 'Flutter Intro',
      description: 'Create mobile apps with Flutter.',
      instructor: 'Prof. Michael Brown',
      category: 'Mobile Development',
      status: 'draft',
    },
  ];

  const categories = ['all', 'Programming', 'Mobile Development'];
  const statuses = ['all', 'published', 'draft', 'archived'];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || course.category === selectedCategory;
    const matchesStatus =
      selectedStatus === 'all' || course.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="p-8 max-w-5xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📚 Course Manager</h1>

      {/* Filters */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all' ? 'All Categories' : category}
            </option>
          ))}
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-400"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status === 'all' ? 'All Statuses' : status}
            </option>
          ))}
        </select>
      </div>

      {/* Course Cards */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{course.title}</h3>
              <p className="text-gray-700 mb-2">{course.description}</p>
              <p className="text-sm text-gray-600 mb-1">
                👨‍🏫 <strong>Instructor:</strong> {course.instructor}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                📂 <strong>Category:</strong> {course.category}
              </p>
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
                  course.status === 'published'
                    ? 'bg-green-100 text-green-700'
                    : course.status === 'draft'
                    ? 'bg-yellow-100 text-yellow-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-gray-500 text-lg">No courses found matching your filters.</p>
        </div>
      )}
    </div>
  );
};

export default CoursesManager;
