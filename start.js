const userDataDump = [
  "1,Joel Peltonen,1921,Users|Admin|Sudo",
  "2,Joeltest Peltonentest,1921,Users",
  "3,Joeltest Peltonentest,,Users",
  "4,Leoj Nenotlep,,Users|Admin",
  "5,root,,Sudo|System",
  "6,Ryukahr,1901,Users|Admin",
  "7,Adamantium Claws,1332,Users",
  "8,The benevolent malevolence,,Users",
  "9,Jim Carrey,1961,Users|Admin",
  "A,Bela Lugosi,1666,Users",
  "B,Robert Smith,,Users|Admin|Sudo",
  "C,Fsh,,Users",
  "D,Racher Carson,,Users",
  "D,Cheesedude51,1951,Users",
  "E,cron,,System",
];

function toObject (dataDumpInfo) {
  let arrayOfUserObjects = [];
  for (i = 0; i < userDataDump.length; i++) {
    const text = userDataDump[i];
    let splitText = text.split(",");
    let myObject = {id: splitText[0], name: splitText[1], dob: splitText[2], departments: splitText[3]};
  //   let splitArrays = userDataDump.splice(" ");
  //   arrayOfUserObjects = splitArrays[i];
    console.log(arrayOfUserObjects);
// How does JS know that the dob should be empty if no number is given. If "user" is in position [2], why does JS (correctly) assign it to 'departments' and not 'dob'?
}
  return 0;

};

console.log(toObject(userDataDump));


// split each array into smaller strings?
// assign each part of separated strings to properties ????
// idfk 

// loop thru Array
// look at each line / Stringsplit string into Array
// use parts of array to create Object
// TouchEvent.apply.apply. ???