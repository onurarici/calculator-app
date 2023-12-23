import React, { useState } from "react";

function Calc() {
  let [number, setNumber] = useState(0);
  let [numberList, setNumberList] = useState([]);
  let [operationList, setOperationList] = useState([]);

  function clearClick() {
    setNumber(0);
    setNumberList([]);
    setOperationList([]);
  }

  function changePositive() {
    let copyOfList = numberList;
    let number = copyOfList.join("");

    if (/^\d/.test(number) === true && Math.abs(number) !== 0) {
      setNumberList((prevValue) => {
        return ["-", ...prevValue];
      });
    } else if (/^\D/.test(copyOfList) === true) {
      numberList.splice(0, 1);
      let newNumberList = copyOfList;
      return setNumberList([newNumberList]);
      // console.log(copyOfList);
    }
  }

  function numberClick(event) {
    let chosenNumber = event.target.innerHTML;

    if (numberList.length === 0 && chosenNumber === "0") {
      setNumber(0);
      setNumberList([]);
    } else {
      setNumber();
      setNumberList((prevNumber) => {
        return [...prevNumber, chosenNumber];
      });
    }
  }

  function printDecimal() {
    if (numberList.length === 0) {
      setNumber("");
      setNumberList(["0", "."]);
    } else if (numberList.includes(".") === false) {
      setNumberList((prevValue) => {
        return [...prevValue, "."];
      });
    }
  }

  function operators(event) {
    let chosenOperator = event.target.innerHTML;
    let copyNumberList = numberList;
    let number = copyNumberList.join("");

    if (operationList.length === 0) {
      if (numberList.length === 0) {
        setOperationList(["0", chosenOperator]);
      } else {
        setOperationList([number, chosenOperator]);
      }
      setNumber(0);
      setNumberList([]);
    } else if (operationList.length === 2) {
      if (numberList.length === 0) {
        setOperationList((prevValue) => {
          return [prevValue[0], chosenOperator];
        });
      } else {
        setOperationList((prevValue) => {
          return [...prevValue, number];
        });
        if (operationList[1] === "+") {
          setNumber(Number(operationList[0]) + Number(number));
          setOperationList([
            Number(operationList[0]) + Number(number),
            chosenOperator
          ]);
        } else if (operationList[1] === "-") {
          setNumber(Number(operationList[0]) - Number(number));
          setOperationList([
            Number(operationList[0]) - Number(number),
            chosenOperator
          ]);
        } else if (operationList[1] === "*") {
          setNumber(Number(operationList[0]) * Number(number));
          setOperationList([
            Number(operationList[0]) * Number(number),
            chosenOperator
          ]);
        } else if (operationList[1] === "/") {
          setNumber(Number(operationList[0]) / Number(number));
          setOperationList([
            Number(operationList[0]) / Number(number),
            chosenOperator
          ]);
        }
      }
      setNumberList([]);
    } else if (operationList.length === 1) {
      setOperationList((prevValue) => {
        return [...prevValue, chosenOperator];
      });
    }
  }
  function equal() {
    let copyNumberList = numberList;
    let number = copyNumberList.join("");

    if (operationList.length === 2 && numberList.length !== 0) {
      if (operationList[1] === "+") {
        setNumber(Number(operationList[0]) + Number(number));
        setOperationList(Number(operationList[0]) + Number(number));
      } else if (operationList[1] === "-") {
        setNumber(Number(operationList[0]) - Number(number));
        setOperationList(Number(operationList[0]) - Number(number));
      } else if (operationList[1] === "*") {
        setNumber(Number(operationList[0]) * Number(number));
        setOperationList(Number(operationList[0]) * Number(number));
      } else if (operationList[1] === "/") {
        setNumber(Number(operationList[0]) / Number(number));
        setOperationList(Number(operationList[0]) / Number(number));
      }
      // setNumber(Number(operationList[0]) + Number(operationList[2]));
      setNumberList([]);
    }
  }

  console.log(operationList);

  return (
    <>
      <div className="calc-bg">
        <div className="screen">
          {number}
          {numberList}
        </div>
        <table>
          <tr>
            <td className="button" onClick={clearClick}>
              AC
            </td>
            <td className="button" onClick={changePositive}>
              +/-
            </td>
            <td className="button operator" onClick={operators}>
              /
            </td>
            <td className="button operator" onClick={operators}>
              *
            </td>
          </tr>
          <tr>
            <td className="button" onClick={numberClick}>
              7
            </td>
            <td className="button" onClick={numberClick}>
              8
            </td>
            <td className="button" onClick={numberClick}>
              9
            </td>
            <td className="button operator" onClick={operators}>
              -
            </td>
          </tr>
          <tr>
            <td className="button" onClick={numberClick}>
              4
            </td>
            <td className="button" onClick={numberClick}>
              5
            </td>
            <td className="button" onClick={numberClick}>
              6
            </td>
            <td className="button operator" onClick={operators}>
              +
            </td>
          </tr>
          <tr>
            <td className="button" onClick={numberClick}>
              1
            </td>
            <td className="button" onClick={numberClick}>
              2
            </td>
            <td className="button" onClick={numberClick}>
              3
            </td>
            <td className="button" rowSpan="2" onClick={equal}>
              =
            </td>
          </tr>
          <tr>
            <td className="button" onClick={numberClick} colSpan="2">
              0
            </td>
            <td className="button" onClick={printDecimal}>
              .
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Calc;
