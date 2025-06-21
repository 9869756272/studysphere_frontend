import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../pages/admin/sidebar';
import CoursesManager from '../pages/admin/CourseManager';
import NotesManager from '../pages/admin/NoteManager';
import ScheduleManager from '../pages/admin/ScheduleManager';
import AssignmentManager from '../pages/admin/AssignmentManager';
// ... import other components as needed

function AppRouter() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/admin/coursemanager" />} />
            <Route path="/admin/coursemanager" element={<CoursesManager />} />
            <Route path="/admin/notemanager" element={<NotesManager />} />
            <Route path="/admin/scheduleManager" element={<ScheduleManager/>}/>
            <Route path='/admin/assignmentmanager' element={<AssignmentManager/>}/>
            {/* Add more admin routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRouter;
