import Student from "./components/Student.jsx";

export default function App() {
  const students = [
    { name: "Aditi Tiwari", course: "Computer Science", marks: 85 },
    { name: "Bhavya Singh", course: "AIML", marks: 92 },
    { name: "Aditi Yadav", course: "DS", marks: 78 }
  ];

  return (
    <div className="container">
      <h1>Student Information</h1>

      {students.map((s, i) => (
        <Student
          key={i}
          name={s.name}
          course={s.course}
          marks={s.marks}
        />
      ))}
    </div>
  );
}