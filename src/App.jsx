import { Bar } from './comps/Bar';
import { ButtonBox } from './comps/ButtonBox';
import { Button } from './comps/Button';
import { Screen } from './comps/Screen';
import { Wrapper } from './comps/Wrapper';
import { useState } from 'react';
import { Layout } from './comps/Layout';


const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

const removeSpaces = (num) => num.toString().replace(/\s/g, "");

function App() {
  const btnValues = [
    [7, 8, 9, 'DEL'],
    [4, 5, 6, '+'],
    [1, 2, 3, '-'],
    ['.', 0, '/', 'x'],
    ["+-", "RESET", '=']
  ]

  const [theme, setTheme] = useState("")

  const changeTheme = () => {
    if (theme === "")
      setTheme("theme2")
    else if (theme === "theme2")
      setTheme("theme3")
    else if (theme === "theme3")
      setTheme("")
  }

  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  })

  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (removeSpaces(calc.num).length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? "0"
            : removeSpaces(calc.num) % 1 === 0
            ? toLocaleString(Number(removeSpaces(calc.num + value)))
            : toLocaleString(calc.num + value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
  }

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  }

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  }

  const equalsClickHandler = () => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "x"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't divide with 0"
            : toLocaleString(
                math(
                  Number(removeSpaces(calc.res)),
                  Number(removeSpaces(calc.num)),
                  calc.sign
                )
              ),
        sign: "",
        num: 0,
      });
    }
  }

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(removeSpaces(calc.num) * -1) : 0,
      res: calc.res ? toLocaleString(removeSpaces(calc.res) * -1) : 0,
      sign: "",
    });
  }

  const resetClickHandler = () => {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };

  const deleteClickHandle = () => {
    setCalc({
      ...calc,
      num: calc.num ? toLocaleString(Math.floor(Number(removeSpaces(calc.num)) / 10)) : calc.num,
      res: calc.res && !calc.num ? toLocaleString(Math.floor(Number(removeSpaces(calc.res)) / 10)) : calc.res
    })
  }

  return (
    <>
    <div className={"w-full h-full " + theme}>
    <Layout>
        <Wrapper>
          <Bar changeTheme={changeTheme} />
          <Screen value={calc.num ? calc.num : calc.res} />
          <ButtonBox>
            {
              btnValues.flat().map((btn) => {
                return (
                  <Button value={btn} 
                    onClick={
                      btn === "RESET"
                        ? resetClickHandler
                        : btn === "DEL"
                        ? deleteClickHandle
                        : btn === "+-"
                        ? invertClickHandler
                        : btn === "="
                        ? equalsClickHandler
                        : btn === "/" || btn === "x" || btn === "-" || btn === "+"
                        ? signClickHandler
                        : btn === "."
                        ? commaClickHandler
                        : numClickHandler
                    }
                  />
                )
              })
            }
          </ButtonBox>
        </Wrapper>
        </Layout>
    </div>
    </>
  );
}

export default App;
