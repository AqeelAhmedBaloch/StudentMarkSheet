console.log("\tClass Assignment As On 19 Mar 2024\n");
var StudentPercentage = function (RollNo, StName, IMark, UMark, // Subject Urdu & Marks
EMark, // Subject English & Marks
MMark, // Subject Math & Marks
SMark // Subject Science & Marks
) {
    console.log("************ Marksheet ************");
    console.log("Roll Number:", RollNo);
    console.log("Name:", StName);
    console.log("***********************************");
    console.log("Subject\t\tMarks Obtained");
    console.log("***********************************");
    console.log("Islamiat: \t ".concat(IMark));
    console.log("Urdu    : \t ".concat(UMark)); // Urdu Marks
    console.log("English : \t ".concat(EMark)); // English Marks
    console.log("Math    : \t ".concat(MMark)); // Math Marks
    console.log("Science : \t ".concat(SMark)); // Science Marks
    var TotalSbbMark = 500;
    var TotalMarks = IMark + UMark + EMark + MMark + SMark;
    console.log("***********************************");
    console.log("Marks Out Of  : ".concat(TotalSbbMark));
    console.log("Total Marks   : ".concat(TotalMarks));
    console.log("Percentage    :", (TotalMarks / TotalSbbMark) * 100, "%");
    if (TotalMarks >= 450 && TotalMarks <= 500) {
        console.log("Student Grade : A-One");
    }
    else if (TotalMarks >= 300) {
        console.log("Student Grade : A-Plus");
    }
    else if (TotalMarks > 200 && TotalMarks < 300) {
        console.log("Student Grade : B");
    }
    else if (TotalMarks >= 100 && TotalMarks < 200) {
        console.log("Student Grade : C");
    }
    else {
        console.log("Fail");
    }
    console.log("***********************************");
};
StudentPercentage(102, "Aqeel Ahmed ", 70, 80, 75, 55, 80);
