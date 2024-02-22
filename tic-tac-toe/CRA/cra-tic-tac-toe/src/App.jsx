import { useState } from "react";
import styled from "styled-components";

export default function App() {
  const [side, setSide] = useState("A");
  const [positionA, setPositionA] = useState([]);
  const [positionB, setPositionB] = useState([]);

  const onClickBox = ({ x, y }, e) => {
    // e.target.innerText;
    // e.target.innerText = 111;
    //alert(x + ":" + y);
    if (side === "A" && e.target.innerText === "") {
      e.target.innerText = "O";
      setPositionA((prev) => [...prev, { x, y }]);
      // console.log("A", positionA);
      setSide("B");
    } else {
      if (side === "B" && e.target.innerText === "") {
        e.target.innerText = "X";
        setPositionB((prev) => [...prev, { x, y }]);
        // console.log("B", positionB);
        setSide("A");
      }
    }

    const Awin = showWhoWins(positionA);
    const Bwin = showWhoWins(positionB);

    if (Awin) {
      alert("A플레이어가 이겼습니다.");
    }

    if (Bwin) {
      alert("B플레이어가 이겼습니다.");
    }
  };

  const showWhoWins = (array) => {
    let row1 = 0,
      row2 = 0,
      row3 = 0,
      col1 = 0,
      col2 = 0,
      col3 = 0,
      x1 = 0,
      x2 = 0;

    array.forEach((box) => {
      if (box.y === 1) row1 += box.x;
      if (box.y === 2) row2 += box.x;
      if (box.y === 3) row3 += box.x;
      if (box.x === 1) col1 += box.y;
      if (box.x === 2) col2 += box.y;
      if (box.x === 3) col3 += box.y;
    });
    if (
      array.includes({ x: 1, y: 1 }) &&
      array.includes({ x: 2, y: 2 }) &&
      array.includes({ x: 3, y: 3 })
    ) {
      x1 = true;
    }
    if (
      array.includes({ x: 3, y: 1 }) &&
      array.includes({ x: 2, y: 2 }) &&
      array.includes({ x: 1, y: 3 })
    ) {
      x2 = true;
    }
    return (
      row1 === 6 ||
      row2 === 6 ||
      row3 === 6 ||
      col1 === 6 ||
      col2 === 6 ||
      col3 === 6 ||
      x1 === true ||
      x2 === true
    );
  };

  return (
    <>
      <BoxContainer>
        <RowContainer1>
          <Box1 name="11" onClick={(e) => onClickBox({ x: 1, y: 1 }, e)} />
          <Box2 onClick={(e) => onClickBox({ x: 2, y: 1 }, e)} />
          <Box3 onClick={(e) => onClickBox({ x: 3, y: 1 }, e)} />
        </RowContainer1>
        <RowContainer2>
          <Box4 onClick={(e) => onClickBox({ x: 1, y: 2 }, e)} />
          <Box5 onClick={(e) => onClickBox({ x: 2, y: 2 }, e)} />
          <Box6 onClick={(e) => onClickBox({ x: 3, y: 2 }, e)} />
        </RowContainer2>
        <RowContainer3>
          <Box7 onClick={(e) => onClickBox({ x: 1, y: 3 }, e)} />
          <Box8 onClick={(e) => onClickBox({ x: 2, y: 3 }, e)} />
          <Box9 onClick={(e) => onClickBox({ x: 3, y: 3 }, e)} />
        </RowContainer3>
      </BoxContainer>
      <button>reset</button>
      <br />
      <p1>
        {"A : " +
          positionA.map((item) => {
            return ` {${item.x}, ${item.y}}`;
          })}
      </p1>
      <br />
      <p1>
        {"B : " +
          positionB.map((item) => {
            return ` {${item.x}, ${item.y}}`;
          })}
      </p1>
    </>
  );
}
const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: gray;
`;

const RowContainer1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const RowContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const RowContainer3 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const Box1 = styled.h1`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin: 10px;
  font-size: 30;
`;

const Box2 = styled.h1`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin: 10px;
  font-size: 30;
`;

const Box3 = styled.h1`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin: 10px;
  font-size: 30;
`;

const Box4 = styled.h1`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin: 10px;
  font-size: 30;
`;

const Box5 = styled.h1`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin: 10px;
  font-size: 30;
`;

const Box6 = styled.h1`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin: 10px;
  font-size: 30;
`;

const Box7 = styled.h1`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin: 10px;
  font-size: 30;
`;

const Box8 = styled.h1`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin: 10px;
  font-size: 30;
`;

const Box9 = styled.h1`
  width: 50px;
  height: 50px;
  background-color: blue;
  margin: 10px;
  font-size: 30;
`;
