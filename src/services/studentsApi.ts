import type { StudentData } from '../models/student';

// Fake students API service. Returns StudentData[] or null to simulate API
// behaviour where the response might be empty.
export function fetchStudents(): Promise<StudentData[] | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        // normal entry
        { id: 1, name: 'Alice Johnson', age: 18, marksPercentage: 91.5 },
        // missing marksPercentage -> should display Data not found
        { id: 2, name: 'Ben Thomas', age: 19 },
        // missing age -> model should default to 18
        { id: 3, name: 'Cameron Lee', marksPercentage: 64.0 },
        // null marks and null age -> marks Data not found, age default 18
        { id: 4, name: 'Diana Park', age: null, marksPercentage: null },
        // all fields present
        { id: 5, name: 'Ethan Miller', age: 18, marksPercentage: 58.7 },
      ]);
    }, 350);
  });
}
