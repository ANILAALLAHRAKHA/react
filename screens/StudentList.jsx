import React from 'react';
// import { useStudentContext } from './screens/StudentContext'; // Adjust the path if needed

function StudentList() {
  // const { students } = useStudentContext();

  return (
    <div style={{ justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center' }}>Student List</h1>
      <table
        style={{
          width: '80%',
          margin: '20px auto',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>First Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Last Name</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Class</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Gender</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.firstName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.lastName}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.email}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.className}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{student.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
