import { React, useState } from 'react';
import { DateSelects, Select } from './DateSelects';
import './SettingInfo.css';

function SettingInfo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [gender, setGender] = useState('');

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

  const modal = <section>
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
        <input name="SettingInfo_email" placeholder="hea@mail.com"></input>
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
        <input name="SettingInfo_name" placeholder="박세영"></input>
      </div>
      <div id="SettingInfo_items">
        <label>생년월일</label>
        <DateSelects
          id="info_birth"
          maxAge={100}
          minAge={12}
        />
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

  return <form onSubmit={handleSubmit}>
    <input
      type="button"
      id="Setting_info"
      value="회원정보 수정"
      onClick={openModal}
    ></input>
    <div id="SettingInfo" onClick={openModal}></div>
    <div className={modalOpen ? 'openModal modal' : 'modal'}>
      {modalOpen && modal}
    </div>
  </form>
}

function Radio(props) {
  return <input name="gender" type="radio" {...props} />;
}

export default SettingInfo;
