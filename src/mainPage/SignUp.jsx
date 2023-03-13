import axios from 'axios';
import React, { useState } from 'react';
import { BsXLg } from 'react-icons/bs'
import './SignUp.css';



function SignUp() {

  function Radio(props) {
    return <input name="gender" type="radio" {...props} />;
  }

  function BirthYearSelect() {
    const [years, setYears] = useState([]);

    function handleFocus(e) {
      if (!years.length) {
        const years = Array.from({ length: 84 }, (_, i) => 1940 + i);
        const yearOptions = years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ));
        setYears(yearOptions);
      }
    }

    return (
      <select name="birth_year" onFocus={handleFocus}>
        <option disabled selected>
          출생년도
        </option>
        {years}
      </select>
    );
  }

  function BirthMonthSelect() {
    const [months, setMonths] = useState([]);

    function handleFocus(e) {
      if (!months.length) {
        const months = Array.from({ length: 12 }, (_, i) => 1 + i);
        const monthOptions = months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ));
        setMonths(monthOptions);
      }
    }

    return (
      <select name="birth_month" onFocus={handleFocus}>
        <option disabled selected>
          월
        </option>
        {months}
      </select>
    );
  }

  function BirthDaySelect() {
    const [days, setDays] = useState([]);

    function handleFocus(e) {
      if (!days.length) {
        const days = Array.from({ length: 31 }, (_, i) => 1 + i);
        const dayOptions = days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ));
        setDays(dayOptions);
      }
    }

    return (
      <select name="birth_day" onFocus={handleFocus}>
        <option disabled selected>
          일
        </option>
        {days}
      </select>
    );
  }


  const [gender, setGender] = useState('');

  const handleChange = (e) => {
    setGender({
      selectValue: e.target.value,
    });
  };

  const saveHandler = (e) => {
    // e.preventDefault();
    // console.log(email);
    // console.log(password);
    // console.log(name);
    // console.log(gender.selectValue);
    // console.log(birthYear.value);
    // console.log(birthMonth.value);
    // console.log(birthDay.value);
    // const body = {
    //   email: email,
    //   password: password,
    //   name: name,
    //   gender: gender.selectValue,
    //   birth_year: birthYear.value,
    //   birth_month: birthMonth.value,
    //   birth_day: birthDay.value,
    // };
    // console.log(body);
    // axios.post("http://localhost:8080/register", body)
    //   .then((res) => console.log(res));
  }

  // 화면 구성 return
  return <>
    <section className="signupSection">
      <header>
        <img className="signUpLogo" src="./img/logo.png" alt="bemeal지도"></img>
        <div className="signupClose" onClick={(e) => window.location.href = '/'}>
          <BsXLg />
        </div>
      </header>

      <div id="SignUp_body">
        <div id="notice">*표시는 필수 입력 항목입니다.</div>
        <form onSubmit={saveHandler}>
          <formgroup>
            <label htmlFor="email">이메일</label>
            <input type="email" name="email" id="email" required />
            <div id="email_notice">*이메일을 입력해주세요.</div>
          </formgroup>
        </form>

        {/* <div id="SignUp_items">
          <label className="SignUp_item">이메일</label>
          <label className="must">*</label>
          <input className="SignUp_input" name="SignUp_email" placeholder="내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>
        </div> */}
        <div id="SignUp_items">
          <label className="SignUp_item">비밀번호</label>
          <label className="must">*</label>
          <input className="SignUp_input" name="SignUp_password" type="password" placeholder="내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>
        </div>
        <div id="SignUp_items">
          <label className="SignUp_item">비밀번호 확인</label>
          <label className="must">*</label>
          <input className="SignUp_input" name="SignUp_passwordch" type="password" placeholder="내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>
        </div>
        <br />
        <div id="SignUp_items">
          <label className="SignUp_item">이름</label>
          <input className="SignUp_input" name="SignUp_name" placeholder="내용을 입력해주세요" style={{ width: "400px", height: "50px" }}></input>
        </div>
        <br />
        <div id="SignUp_items"> {/* 생년월일 입력 후 성별을 선택하면 생년월일 입력이 사라진다. -> 성별과 생년월일의 위치 변경 */}
          <label className="SignUp_item">성별</label>
          <div id="info_gender">
            <Radio
              id="female"
              value="female"
              checked={gender.selectValue === 'female'}
              onChange={handleChange}
            />
            여성
            <Radio
              id="male"
              value="male"
              checked={gender.selectValue === 'male'}
              onChange={handleChange}
            />
            남성
            <Radio
              id="gender_not"
              value="not"
              checked={gender.selectValue === 'not'}
              onChange={handleChange}
            />
            무응답
          </div>
        </div>
        <br />
        <br />
        <div id="SignUp_items">
          <label className="SignUp_item">생년월일</label>
          <div id="info_birth">
            <BirthYearSelect />
            <BirthMonthSelect />
            <BirthDaySelect />
          </div>
        </div>
      </div>
      <div id="SignUp_footer">
        <button>회 원 가 입</button>
      </div>
    </section>
  </>
}


export default SignUp;
