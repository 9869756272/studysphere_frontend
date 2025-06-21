import React, { useState } from 'react';

const ScheduleManager = () => {
  const [selectedDay, setSelectedDay] = useState('all');

  const schedule = [
    {
      id: '1',
      course: 'Java Course',
      instructor: 'Dr. Sarah Johnson',
      date: '2025-06-22',
      time: '10:00 AM - 11:30 AM',
      day: 'Monday',
    },
    {
      id: '2',
      course: 'Python Basics',
      instructor: 'Mark Thompson',
      date: '2025-06-23',
      time: '1:00 PM - 2:00 PM',
      day: 'Tuesday',
    },
    {
      id: '3',
      course: 'Flutter Intro',
      instructor: 'Prof. Michael Brown',
      date: '2025-06-24',
      time: '3:00 PM - 4:30 PM',
      day: 'Wednesday',
    },
  ];

  const days = ['all', 'Monday', 'Tuesday', 'Wednesday'];

  const filteredSchedule =
    selectedDay === 'all'
      ? schedule
      : schedule.filter((s) => s.day === selectedDay);

  return (
    <div className="p-8 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📅 Class Schedule</h1>

      {/* Filter */}
      <div className="mb-6">
        <select
          value={selectedDay}
          onChange={(e) => setSelectedDay(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm"
        >
          {days.map((day) => (
            <option key={day} value={day}>
              {day === 'all' ? 'All Days' : day}
            </option>
          ))}
        </select>
      </div>

      {/* Schedule List */}
      {filteredSchedule.length > 0 ? (
        <div className="space-y-4">
          {filteredSchedule.map((item) => (
            <div
              key={item.id}
              className="bg-white p-5 rounded-xl shadow border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-blue-600">
                  {item.course}
                </h3>
                <span className="text-sm text-gray-500">{item.day}</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>Instructor:</strong> {item.instructor}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Date:</strong> {item.date}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Time:</strong> {item.time}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No classes scheduled.</p>
      )}
    </div>
  );
};

export default ScheduleManager;
