import React from 'react';

function App() {
  // const answer:string[] = ['M', 'A', 'G', 'I', 'C'];
  // const inputValue = ['M', 'A', 'G', 'B', 'B'];
  // const currentRow:number = 1;
  // const state:string[] = ['gray', 'green', 'yellow', 'active'];

  const stateClassName: { [key: string]: string } = {
    gray: 'text-white border-[#787c7e] bg-[#787c7e]',
    green: 'text-white bg-[#6aaa64] border-[#6aaa64]',
    yellow: 'text-white bg-[#c9b458] border-[#c9b458]',
    active: 'bg-white border-black',
  };

  const allInputData = [
    [
      { letter: 'M', state: 'green' },
      { letter: 'A', state: 'green' },
      { letter: 'I', state: 'yellow' },
      { letter: 'Z', state: 'gray' },
      { letter: 'C', state: 'green' },
    ],
    [
      { letter: 'M', state: 'active' },
      { letter: 'A', state: 'active' },
      { letter: 'G', state: 'active' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
    [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
    [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
    [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
    [
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
      { letter: '', state: '' },
    ],
  ];

  return (
    <div className="box-border ">
      <div className="text-3xl text-center flex justify-center items-center h-20 border-b border-gray-600">
        Yumy's Wordle
      </div>
      <div className="mb-14 mt-14 flex flex-col h-[400px] w-[330px] justify-between mr-auto ml-auto">
        {allInputData.map((item, i) => (
          <div key={i} className="flex flex-wrap justify-between">
            {item.map((letter, j) => (
              <div
                key={j}
                className={`w-[62px] h-[62px] border-2 flex justify-center items-center text-2xl text-center ${
                  stateClassName[letter.state]
                }`}>
                {letter.letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
