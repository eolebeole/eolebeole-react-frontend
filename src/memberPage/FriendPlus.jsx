import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import Pagination from "./Pagination";

import "./FriendPlus.css";
import "./PlusPin.css";

const fetchData = async () => {
  let response = await axios.get('http://localhost:4000/users');
  return response.data;
}

function FriendPlus() {
  const [modalOpen, setModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // 페이징 처리
  const [limit, setLimit] = useState(5); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const offset = (page - 1) * limit;

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const handleChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:4000/users",
    }).then((response) => setUsers(response.data));
  }, []);

  const filtered = users.filter((user) => user.nick.includes(search));
  const list = filtered.slice(offset, offset + limit).map((item) => <>
    <div id="FriendPlus_content" key={item.id}>
      <div id="FriendPlus_person">
        <IoPersonCircleSharp />
      </div>
      <div id="FriendPlus_name">
        {item.nick}#{item.code}
      </div>
    </div>
    <hr />
  </>);

  return (
    <div>
      <div id="MatMate_plus" onClick={openModal}>
        <BiPlus />
      </div>
      <div className={modalOpen ? "openModal modal" : "modal"}>
        {modalOpen ? (
          <section>
            <header>
              <button className="close" onClick={closeModal}>
                &times;
              </button>
              <h2>친구 등록</h2>
            </header>
            <div id="FriendPlus_search">
              <VscSearch />
            </div>
            <input
              id="MatMate_friend"
              type="text"
              placeholder="닉네임을 입력해주세요."
              onChange={handleChange}
            />
            <div>{list}</div>
            <div>
              <Pagination
                total={filtered.length}
                limit={limit}
                page={page}
                setPage={setPage}
              />
            </div>
            <input id="MatMate_friendBtn" type="button" value="친구 등록" />
          </section>
        ) : null}
      </div>
    </div>
  );
}

export default FriendPlus;
