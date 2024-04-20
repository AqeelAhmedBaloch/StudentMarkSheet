console.log("\tClass Assignment As On 19 Mar 2024\n");

let StudentPercentage = (RollNo: number,  StName: string,  IMark: number,
  UMark: number, // Subject Urdu & Marks
  EMark: number, // Subject English & Marks
  MMark: number, // Subject Math & Marks
  SMark: number // Subject Science & Marks
) => {
  console.log("************ Marksheet ************");
  console.log("Roll Number:", RollNo);
  console.log("Name:", StName);
  console.log("***********************************");
  console.log("Subject\t\tMarks Obtained");
  console.log("***********************************");
  console.log(`Islamiat: \t ${IMark}`);
  console.log(`Urdu    : \t ${UMark}`); // Urdu Marks
  console.log(`English : \t ${EMark}`); // English Marks
  console.log(`Math    : \t ${MMark}`); // Math Marks
  console.log(`Science : \t ${SMark}`); // Science Marks
  const TotalSbbMark = 500;
  let TotalMarks = IMark + UMark + EMark + MMark + SMark;
  
  console.log("***********************************");
  console.log(`Marks Out Of  : ${TotalSbbMark}`);
  console.log(`Total Marks   : ${TotalMarks}`);
  console.log("Percentage    :", (TotalMarks / TotalSbbMark) * 100, "%");
  
  if(TotalMarks >= 450 && TotalMarks <= 500){
    console.log("Student Grade : A-One")
  } else if(TotalMarks >= 300){
    console.log("Student Grade : A-Plus");
  } else if(TotalMarks > 200 && TotalMarks < 300) {
    console.log("Student Grade : B");
  } else if(TotalMarks >= 100 && TotalMarks < 200){
    console.log("Student Grade : C");
  } else { 
    console.log("Fail");
  }
  console.log("***********************************");
};
StudentPercentage(102, "Aqeel Ahmed ", 70, 80, 75, 55, 80);
