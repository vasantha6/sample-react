import React, { useEffect, useState } from 'react';
import { fetchStudents } from '../services/studentsApi';
import Student, { StudentData } from '../models/student';

export default function Students(): React.ReactElement {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchStudents()
      .then((data: StudentData[] | null) => {
        if (!data || data.length === 0) {
          // API returned null/empty: show message and clear students
          setStudents([]);
          setLoading(false);
          return;
        }
        const mapped = data.map((d) => new Student(d));
        setStudents(mapped);
        setLoading(false);
      })
      .catch((err) => {
        setError(err?.message ?? 'Failed to load students');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Students</h2>
      {loading && <p>Loading students...</p>}
      {error && <p className="error">{error}</p>}
      <div className="students-grid">
        {students.map((s) => (
          <div className="student-card" key={s.id}>
            <h4>{s.name}</h4>
            <p>Age: {s.age}</p>
            <p>
              Marks:{' '}
              {s.marksPercentage === null ? <em>Data not found</em> : `${s.marksPercentage}%`}
            </p>
            <p>
              Grade: {s.gradeLetter()} {s.isPassing() ? '✅' : '❌'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
