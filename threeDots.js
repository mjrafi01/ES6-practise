const ages=[12,14,16,13,17];
const ages2=[15,16,12];
const allAges =ages.concat([5]).concat(ages2);
const allAges2=[ages,ages2,5,6];
const allAges3=[ ...ages, ...ages2, 5, 6]
console.log(allAges);
console.log(allAges2);
console.log(allAges3);
const business =655;
const business1 =755;
const business2 =86545;

const money=[650,45,250];
const maximum =Math.max(money);
const maximum1 =Math.max(...money);
const maximum2 =Math.max(business,business1,business2);

console.log(maximum);
console.log(maximum1);
console.log(maximum2);