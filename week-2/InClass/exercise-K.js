const students = [
    "Artur",
    "Keti",
    "Simon",
    "Kimberly",
    "Kris",
    "Manuel",
    "Yogi",
  ];
  
  for (let i = 0; i < students.length; i++) {
    const studentMessage = "Student: " + students[i];
    const indexMessage = "index is: " + i;
    console.log(indexMessage, studentMessage);
  }