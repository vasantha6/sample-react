export interface StudentData {
  id: number;
  name: string;
  // age may be missing from API, default to 18 in the model
  age?: number | null;
  // marksPercentage may be missing or null in the API response
  marksPercentage?: number | null;
}

export class Student {
  id: number;
  name: string;
  age: number;
  marksPercentage: number | null;

  constructor(data: StudentData) {
    this.id = data.id;
    this.name = data.name;
    // default age to 18 if not provided or invalid
    this.age = data.age && data.age > 0 ? data.age : 18;
    this.marksPercentage =
      data.marksPercentage !== undefined && data.marksPercentage !== null
        ? Number(data.marksPercentage)
        : null;
  }

  isPassing(): boolean {
    if (this.marksPercentage === null) return false;
    return this.marksPercentage >= 40;
  }

  gradeLetter(): string {
    const p = this.marksPercentage;
    if (p === null || Number.isNaN(p)) return 'N/A';
    if (p >= 90) return 'A+';
    if (p >= 80) return 'A';
    if (p >= 70) return 'B';
    if (p >= 60) return 'C';
    if (p >= 50) return 'D';
    return 'F';
  }
}

export default Student;
