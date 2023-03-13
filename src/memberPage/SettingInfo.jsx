import axios from 'axios';
import { React, useState } from 'react';
import { useQuery } from 'react-query';
import './SettingInfo.css';

const fetchData = async (id) => {
  let response = await axios.get(`http://localhost:4000/users/${id}`);
  return response.data;
}

function SettingInfo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [gender, setGender] = useState('');

  const { isLoading, error, data } = useQuery('profile', () => fetchData(1));

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    setGender({
      selectValue: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log([...formData.keys()]);
    console.log([...formData.values()]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="button"
        id="Setting_info"
        value="회원정보 수정"
        onClick={openModal}
      ></input>
      <div id="SettingInfo" onClick={openModal}></div>
      <div className={modalOpen ? 'openModal modal' : 'modal'}>
        {modalOpen ? (
          <section>
            <header>
              <button className="close" onClick={closeModal}>
                &times;
              </button>
              <h2>회원정보 수정</h2>
            </header>

            <div id="SettingInfo_body">
              <div id="notice">*표시는 필수 입력 항목입니다.</div>
              <div id="SettingInfo_items">
                <label>이메일</label>
                <label class="must">*</label>
                <input name="SettingInfo_email" placeholder={data?.email}></input>
              </div>
              <div id="SettingInfo_items">
                <label>현재 비밀번호</label>
                <label class="must">*</label>
                <input name="SettingInfo_password" type="password"></input>
              </div>
              <div id="SettingInfo_items">
                <label>새비밀번호</label>
                <label class="must">*</label>
                <input name="SettingInfo_npassword" type="password"></input>
              </div>
              <div id="SettingInfo_items">
                <label>비밀번호 확인</label>
                <label class="must">*</label>
                <input name="SettingInfo_passwordch" type="password"></input>
              </div>
              <div id="SettingInfo_items">
                <label>이름</label>
                <input name="SettingInfo_name" placeholder={data?.name}></input>
              </div>
              <div id="SettingInfo_items">
                <label>생년월일</label>
                <div id="info_birth">
                  <BirthYearSelect />
                  <BirthMonthSelect />
                  <BirthDaySelect />
                </div>
              </div>

              <div id="SettingInfo_items">
                <label>성별</label>
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
            </div>
            <div id="SettingInfo_footer">
              <button>저장</button>
            </div>
          </section>
        ) : null}
      </div>
    </form>
  );
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


function Radio(props) {
  return <input name="gender" type="radio" {...props} />;
}

export default SettingInfo;
