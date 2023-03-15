import React, { useState, useRef, useEffect } from 'react';

function App() {
  // const allInputData = table(6, 5);
  // const [inputData, setInputData] = useState(allInputData);
  // function table(colLength: number, rowLength: number) {
  //   const col = [];
  //   for (let i = 0; i < rowLength; i++) {
  //     col.push({ letter: '', status: '' });
  //   }
  //   const table = [];
  //   for (let i = 0; i < colLength; i++) {
  //     table.push(col);
  //   }
  //   return table;
  // }
  const answer: string[] = ['I', 'N', 'P', 'U', 'T'];
  const [currentRow, setCurrentRow] = useState(0);
  const stateClassName: { [key: string]: string } = {
    gray: 'text-white border-[#787c7e] bg-[#787c7e]',
    green: 'text-white bg-[#6aaa64] border-[#6aaa64]',
    yellow: 'text-white bg-[#c9b458] border-[#c9b458]',
    active: 'bg-white border-black',
  };

  const [allInputData, setAllInputData] = useState([
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
    [
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
      { letter: '', status: '' },
    ],
  ]);
  const inputRefs = useRef<(HTMLInputElement | null)[][]>([[]]);

  useEffect(() => {
    inputRefs.current[0][0]?.focus();
  }, []);

  function handleInputChange(i: number, j: number, input: string, e: any) {
    const newData = [...allInputData];
    const letter = input.trim().toUpperCase();
    if (letter.length !== 1 || (!/^[A-Z]$/.test(letter) && i !== currentRow)) {
      return;
    }
    newData[i][j] = { letter, status: 'active' };
    setAllInputData(newData);
    if (
      e.key === 'Enter' &&
      j === 4 &&
      allInputData[i].every((item) => item.letter !== '')
    ) {
      setCurrentRow((row) => (row += 1));
      if (i === allInputData.length - 1) {
        // 如果是最後一列
        checkAnswer(i, j);
      } else {
        // 如果不是最後一列
        inputRefs.current[i + 1][0]?.focus();
        checkAnswer(i, j);
      }
    } else if (j < 4) {
      inputRefs.current[i][j + 1]?.focus();
    }
    if (e.key === 'Backspace') {
      if (j > 0) {
        inputRefs.current[i][j - 1].focus();
        console.log(1);
      } else {
        inputRefs.current[i][0].focus();
        console.log(2);
      }
      console.log(3);
      const newData = [...allInputData];
      setAllInputData(newData);
      newData[i][j] = { letter: '', status: '' };
    }
  }

  function checkAnswer(i: number, j: number) {
    const currentInputData = allInputData[i];
    const currentAnswer = answer.slice(0, currentInputData.length);
    for (let k = 0; k < currentInputData.length; k++) {
      if (currentInputData[k].letter === currentAnswer[k]) {
        currentInputData[k].status = 'green';
      } else if (currentAnswer.includes(currentInputData[k].letter)) {
        currentInputData[k].status = 'yellow';
      } else {
        currentInputData[k].status = 'gray';
      }
    }
    setAllInputData([...allInputData]);
  }

  console.log(currentRow);
  console.log(allInputData);
  console.log(allInputData[currentRow]);
  return (
    <div className="box-border ">
      <div className="text-3xl text-center flex justify-center items-center h-20 border-b border-gray-600">
        ε(*´･∀･｀)зﾞ Yumy's Wordle ε(´･∀･｀*)зﾞ
      </div>
      <div className="mb-14 mt-14 flex flex-col h-[400px] w-[330px] justify-between mr-auto ml-auto">
        {allInputData.map((item, i) => (
          <div key={i} className="flex flex-wrap justify-between">
            {item.map((letterData, j) => (
              <input
                key={j}
                type="text"
                className={`w-[62px] h-[62px] border-2 text-2xl text-center ${
                  stateClassName[letterData.status]
                }`}
                value={letterData.letter}
                ref={(el: HTMLInputElement | null) => {
                  if (!inputRefs.current[i]) {
                    inputRefs.current[i] = [];
                  }
                  inputRefs.current[i][j] = el;
                }}
                onChange={(e) => {
                  if (
                    (i === currentRow && i === 0) ||
                    (i === currentRow &&
                      allInputData[i - 1].every(
                        (item) => item.status !== 'green'
                      ))
                  ) {
                    handleInputChange(i, j, e.target.value, e);
                  }
                }}
                onKeyDown={(e) => {
                  if (i === currentRow) {
                    handleInputChange(i, j, allInputData[i][j].letter, e);
                  }
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
