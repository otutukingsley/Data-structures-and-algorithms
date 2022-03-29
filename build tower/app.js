// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

//so proud of the program i wrote here

['  *  ', ' *** ', '*****'][
  // And a tower with 6 floors looks like this:
  ('     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********')
];

function towerBuilder(nFloors) {
  const initArr = Array(nFloors + (nFloors - 1)).fill('*');
  let floorArr = initArr;

  let ansArr = [initArr.join('')];

  for (let i = 0; i < Math.floor(floorArr.length / 2); i++) {
    floorArr[floorArr.indexOf('*')] = ' ';
    floorArr[floorArr.lastIndexOf('*')] = ' ';
    ansArr.push(floorArr.join(''));
  }
  return ansArr.reverse();
}

// towerBuilder(5);

console.log(towerBuilder(9));
