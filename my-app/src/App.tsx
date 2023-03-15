import React, { useState } from 'react';

function App() {
  // const answer:string[] = ['M', 'A', 'G', 'I', 'C'];
  // const inputValue = ['M', 'A', 'G', 'B', 'B'];
  // const currentRow:number = 1;
  // const state:string[] = ['gray', 'green', 'yellow', 'active'];
  const allInputData = table(6, 5);
  const [inputData, setInputData] = useState(allInputData);

  const stateClassName: { [key: string]: string } = {
    gray: 'text-white border-[#787c7e] bg-[#787c7e]',
    green: 'text-white bg-[#6aaa64] border-[#6aaa64]',
    yellow: 'text-white bg-[#c9b458] border-[#c9b458]',
    active: 'bg-white border-black',
  };

  // const allInputData = [
  //   [
  //     { letter: 'M', state: 'green' },
  //     { letter: 'A', state: 'green' },
  //     { letter: 'I', state: 'yellow' },
  //     { letter: 'Z', state: 'gray' },
  //     { letter: 'C', state: 'green' },
  //   ],
  //   [
  //     { letter: 'M', state: 'active' },
  //     { letter: 'A', state: 'active' },
  //     { letter: 'G', state: 'active' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //   ],
  //   [
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //   ],
  //   [
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //   ],
  //   [
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //   ],
  //   [
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //     { letter: '', state: '' },
  //   ],
  // ];
  function table(colLength: number, rowLength: number) {
    const col = [];
    for (let i = 0; i < rowLength; i++) {
      col.push({ letter: '', state: '' });
    }
    const table = [];
    for (let i = 0; i < colLength; i++) {
      table.push(col);
    }
    return table;
  }

  function handleInputChange(i: number, j: number, e: any) {
    const newValue = e.target.value;
    // setInputData((prev) => {
    //   const newInputData = [...prev];
    //   console.log(newInputData);
    //   newInputData[i][j] = {
    //     ...newInputData[i][j],
    //     letter: newValue,
    //   };
    //   return newInputData;
    // });
  }

  console.log(inputData);
  return (
    <div className="box-border ">
      <div className="text-3xl text-center flex justify-center items-center h-20 border-b border-gray-600">
        Yumy's Wordle
      </div>
      <div className="mb-14 mt-14 flex flex-col h-[400px] w-[330px] justify-between mr-auto ml-auto">
        {inputData.map((item, i) => (
          <div key={i} className="flex flex-wrap justify-between">
            {item.map((letterData, j) => (
              <input
                key={j}
                type="text"
                className={`w-[62px] h-[62px] border-2 text-2xl text-center ${
                  stateClassName[letterData.state]
                }`}
                value={letterData.letter}
                onChange={(e) => handleInputChange(i, j, e)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
