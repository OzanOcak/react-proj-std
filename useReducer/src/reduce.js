const studs = [
  { name: "Jennifer", grade: 80 },
  { name: "Tom", grade: 70 },
  { name: "Donald", grade: 60 },
  { name: "Jane", grade: 90 },
];

// let total=0;
/*
  studs.forEach(stud=>{
    total+=stud.grade;
  })
  */
const totalGrade = studs.reduce((total, stud) => {
  console.log(`total: ${total}`);
  console.log(`stud grade: ${stud.grade}`);

  return total + stud.grade;
}, 0);

console.log(`mean is ${totalGrade / studs.length}`);
