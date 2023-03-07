import { React, useState } from 'react';
import axios from 'axios';
import './MainPage.css';



function SignUp() {

  const [requestResult, setRequestResult] = useState ("");

  const signUpHandler = () => {
    const data = {
      //TODO: 값 찾아넣기
      email: "test@naver.com",
      pwd: "1234",
      name: "test",
      birth: "2023 - 03 - 03",
      gender: 1,
      nick: "test",
      code: 1234,
    };
    axios.post('http://localhost:4000/user', data)
      .then((res) => {
        setRequestResult('Success!!');
      })
      .catch((error) => {
        setRequestResult('Failed!!');
      })
  }

  return <>
    <div className="wrapper" style={{ width: '100vw', marginLeft: '20px' }}>
      <div className="title">
        <h1>회원가입</h1>
      </div>

      <div className="email">
        <input id="email" type="text" placeholder="이메일을 입력해 주세요." />
        <div id="emailError" className="error"></div>
      </div>

      <div className="name">
        <input id="name" type="text" placeholder="성함을 입력해 주세요." />
        <div id="nameError" className="error"></div>
      </div>

      <div className="password">
        <input id="password" type="password" placeholder="비밀번호를 입력해 주세요." />
        <div id="passwordError" className="error"></div>
      </div>

      <div className="passwordCheck">
        <input id="passwordCheck" type="password" placeholder="비밀번호를 다시 입력해 주세요." />
        <div id="passwordCheckError" className="error"></div>
      </div>

      <div className="phone">
        <h4>핸드폰 번호를 입력해 주세요</h4>
        <input id="phone1" type="text" size="1" maxlength="3" oninput="changePhone1()" /> -
        <input id="phone2" type="text" size="3" maxlength="4" oninput="changePhone2()" /> -
        <input id="phone3" type="text" size="3" maxlength="4" oninput="changePhone3()" />

      </div>
      <div className="gender">
        <input id="gender_man" type="radio" name="gender"></input>남성
        <input id="gender_woman" type="radio" name="gender"></input>여성
        <div id="genderError" className="error"></div>
      </div>

      <div className="line">
        <hr />
      </div>
      <div className="signUp">
        {/* TODO: signUpCheck() 과정 거치기 */}
        <button id="signUpButton" disabled onClick={signUpHandler}>가입하기</button>
      </div>
    </div>
  </>
}


export default SignUp;






