import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import PrintObject from './components/PrintObject';

function App() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <Button />
      </div>
      <div>
        <PrintObject />
      </div>
    </div>
  );
}

export default App;

// const randomColor = require('randomcolor');
// const chalk = require('chalk');

// const hueColor = process.argv[2];
// const luminosityColor = process.argv[3];

// const selectColor = randomColor({
//   hue: hueColor,
//   luminosity: luminosityColor,
// });

// if (process.argv[2] === 'ask') {
//   console.log('gimme color and luminosity');
// } else {
//   let x = 31;
//   const y = 9;
//   let square = '';
//   for (let row = 1; row <= y; row++) {
//     for (let column = 1; column <= x; column++) {
//       if (column === 14 && row === 5) {
//         square += chalk.hex(selectColor)(selectColor);
//         column += 6;
//       } else if (column > 3 && column < 29 && row > 3 && row < 7) {
//         square += ' ';
//       } else {
//         square += chalk.hex(selectColor)('#');
//       }
//     }
//     square += '\n';
//   }

//   console.log(square);
// }
