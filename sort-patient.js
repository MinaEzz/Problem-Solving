// you are developinig a system for a hospital to prioritize the patients based on their severity level, each patiant has an ID, severity level (1-10), and arrival time.
// the hospital wants to process the patients in the order of their severity first.
// but if there are patients with the same severity level, they should be processed in the order of their arrival time.
// write a function that takes an array of patients and returns an array of patient IDs in the order they should be processed

function sortPatient(patients) {
  const sortedPatients = patients.sort((a, b) => {
    if (a.severity === b.severity) {
      return new Date(a.arrivalTime) - new Date(b.arrivalTime);
    } else {
      return b.severity - a.severity;
    }
  });

  return sortedPatients.map((patient) => patient.id);
}

const patients = [
  { id: "P1", severity: 5, arrivalTime: "10:00" },
  { id: "P2", severity: 3, arrivalTime: "11:00" },
  { id: "P3", severity: 8, arrivalTime: "12:00" },
  { id: "P4", severity: 3, arrivalTime: "13:00" },
  { id: "P5", severity: 7, arrivalTime: "14:00" },
  { id: "P6", severity: 6, arrivalTime: "15:00" },
];

console.log(sortPatient(patients));
