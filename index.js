console.log("working...");

//1.
// "let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] "
// "Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

// ['JOHN', 'BABA', 'YAGA', 'WICK']
// "
let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ]

          console.log(studentRecords.map(a => a.name.toUpperCase()));

        //   "Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

        //   [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"        //   

        const those = studentRecords.filter( (x)=> {

          return x.marks > 50
        });
          
        console.log(those);
// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
       const students = studentRecords.filter((item)=>{
           return item.marks>50 && item.id>120 ;
       });
       console.log(students);
    //    Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
    const sum = those.reduce(((red,car)=> red + car.marks ),0 );  //173
    console.log(sum);

    // Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
    console.log(those.map(b => b.name));
    //  Question 6: This time we are required to print the sum of marks of the students with id > 120.
    const record = studentRecords.filter((z) => {
        return z.id>120;
       })
       let sum1 = record.reduce(((a,b)=>a+b.marks),0);
       console.log(sum1);

    //    Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

    const record1 = studentRecords.filter((z) => {
        return z.marks<50;
       })
    //    console.log(record1);
    let record2 = record1.map(y => y.marks = y.marks + 15);
    console.log(record1);
let sum3 = studentRecords.filter(w => w.marks>50).reduce(((r,t)=>r+t.marks),0 );
console.log(sum3);//233

// Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
function Student5 (name1,classs,roll){
this.name = name1;
this.classs = classs;
this.roll = roll;
}

let me = new Student5 ("ravikant","10","93");
let you = new Student5 ("saurav","10","14");
let kamlesh = new Student5 ("kamlesh","10","18");
let suresh = new Student5 ("suresh","10","35");
let mahesh = new Student5 ("mahesh","10","75");
let ramesh = new Student5 ("ramesh","10","87");
console.log(me);
console.log(you);
console.log(kamlesh);
console.log(suresh);
console.log(mahesh);
console.log(ramesh);
   



