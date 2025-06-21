// import { Link, useLocation } from 'react-router-dom';

// function Sidebar() {
//   const location = useLocation();

//   const menuItems = [
//     { name: 'Dashboard', path: '/dashboard' },
//     { name: 'Courses', path: '/courses' },
  
//     { name: 'Content', path: '/content' },
//     { name: 'Notes', path: '/notes' },
//     { name: 'Schedule', path: '/schedule' },
//     { name: 'Assignments', path: '/assignments' },
 
//     { name: 'Settings', path: '/settings' },
//   ];

//   return (
//     <nav className="w-64 bg-white shadow-lg">
//       <ul>
//         {menuItems.map(item => (
//           <li key={item.path} className={location.pathname === item.path ? 'bg-gray-200' : ''}>
//             <Link to={item.path} className="block p-4">
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }

// export default Sidebar;


import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard' }, // placeholder
    { name: 'Courses', path: '/admin/coursemanager' },
    { name: 'Notes', path: '/admin/notemanager' },
    { name: 'Content', path: '/admin/content' },
    { name: 'Schedule', path: '/admin/schedulemanager' },
    { name: 'Assignments', path: '/admin/assignmentmanager' },
    { name: 'Settings', path: '/admin/settings' },
  ];

  return (
    <nav className="w-64 bg-white shadow-lg h-screen">
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.path}
            className={`${
              location.pathname === item.path ? 'bg-gray-200' : ''
            }`}
          >
            <Link to={item.path} className="block p-4 hover:bg-gray-100">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
