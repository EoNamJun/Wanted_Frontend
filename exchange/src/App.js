import React, { useState } from "react";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setRate, setDate } from "./redux/slice";
import styled from "styled-components";
const months = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

function App() {
  const country = ["USD", "CAD", "KRW", "HKD", "JPY", "CNY"];
  const [cost, setCost] = useState("");
  const [choose, setChoose] = useState("USD");
  const [choose2, setChoose2] = useState("CAD");
  const [date2, setDate2] = useState("날짜를 선택해주세요");

  const dispatch = useDispatch();
  const { rate, date } = useSelector((state) => state.exchange);

  const costChanged = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCost(value); // 숫자만 저장
  };

  const countryChanged = (e) => {
    const newCountry = e.target.value;
    setChoose(newCountry);
    setChoose2(newCountry === "USD" ? "CAD" : "USD");
  };

  const countryClick = (e) => {
    setChoose2(e.target.value);
  };

  const dateChanged = async (e) => {
    const newDate = e.target.value;
    dispatch(setDate(newDate));
  
    // 'months' 배열을 사용하여 날짜 포맷을 변경하는 로직
    const dateObj = new Date(newDate);
    const formattedDate = `${dateObj.getFullYear()}-${months[dateObj.getMonth()]}-${String(dateObj.getDate()).padStart(2, '0')}`;
    setDate2(formattedDate);  // 'setDate2' 함수를 사용하여 상태 업데이트
  
    try {
      const response = await Axios.get(
        `https://api.apilayer.com/exchangerates_data/${newDate}?base=USD&symbols=${country.join(",")}`,
        {
          headers: {
            "Content-Type": "application/json",
            "apikey": process.env.REACT_APP_API_KEY,
          },
        }
      );
      dispatch(setRate(response.data.rates));
    } catch (error) {
      console.error(error);
    }
  };
  const calculateExchange = () => {
    // 입력값과 환율 데이터를 콘솔에 출력하여 확인
    console.log("Cost:", cost);
    console.log("Rate From:", rate[choose]);
    console.log("Rate To:", rate[choose2]);
  
    const numericCost = parseFloat(cost);
    const rateFrom = parseFloat(rate[choose]);
    const rateTo = parseFloat(rate[choose2]);
  
    // 유효한 숫자인지 확인합니다.
    if (!isNaN(numericCost) && !isNaN(rateFrom) && !isNaN(rateTo) && rateFrom !== 0) {
      const result = (numericCost / rateFrom * rateTo).toFixed(2);
      console.log("Calculated Exchange:", result);
      return result;
    }
  
    return "0.00";
  };
  return (
    <StyledAppContainer>
      <StyledInnerContainer>
        <StyledInputContainer>
          <StyledInput
            id="costInput"
            type="text"
            value={cost}
            onChange={costChanged}
            placeholder={choose}
          />
          <StyledSelect
            id="countryIn"
            onChange={countryChanged}
            value={choose}
          >
            {country.map((country1) => (
              <option key={country1} value={country1}>{country1}</option>
            ))}
          </StyledSelect>
        </StyledInputContainer>

        <StyledButtonContainer>
          {country.filter(c => c !== choose).map((country2) => (
            <StyledButton
              key={country2}
              value={country2}
              onClick={countryClick}
            >
              {country2}
            </StyledButton>
          ))}
        </StyledButtonContainer>

        <StyledResultRow>
          <StyledResultText>{choose2}:</StyledResultText>
          <StyledResultText>
            {calculateExchange()}
          </StyledResultText>
        </StyledResultRow>

        <StyledDateRow>
          <StyledDateText>{date2}</StyledDateText>
          <StyledInput
            id="dateIn"
            type="date"
            value={date}
            onChange={dateChanged}
          />
        </StyledDateRow>
      </StyledInnerContainer>
    </StyledAppContainer>
  );
}

const StyledAppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f7f7f7;
  font-family: 'Arial', sans-serif;
`;

const StyledInnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px; // 조정된 너비
  margin-top: 100px; // 상단 여백
  padding: 20px;
  border: 2px solid black; // 조정된 테두리 굵기
  background-color: #fff;
`;

const StyledInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%; // 전체 너비 사용
`;

const StyledButtonContainer = styled(StyledInputContainer)` // 위와 동일한 스타일
  margin-top: 10px;
`;

const StyledInput = styled.input`
  font-size: 1.25em; // 크기 조정
  flex: 1; // 가능한 모든 공간 차지
  margin-right: 10px; // 오른쪽 여백
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledSelect = styled.select`
  font-size: 1.25em;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyledButton = styled.button`
  font-size: 1em;
  padding: 10px;
  margin-left: 10px; // 왼쪽 여백
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  background-color: #fff;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const StyledResultRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; // 위 여백 조정
  width: 100%;
`;

const StyledResultText = styled.p`
  font-size: 2em;
  color: #000; // 결과 텍스트 색상 조정
  margin: 0;
`;

const StyledDateRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const StyledDateText = styled.p`
  font-size: 1.5em;
  margin: 0;
`;


export default App;