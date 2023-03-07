import axios from 'axios';
import React, { useEffect, useState } from "react";
import { FiChevronsLeft } from "react-icons/fi";
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import FriendPlus from './FriendPlus';
import Pagination from "./Pagination";

import './MatMate.css';

function MatMate(props) {
  const [friends, setFriends] = useState([]); // "초코#0001","얼레벌레#0301","달팽이#1041","민초#1664","체리#5310","감자탕#4787","쿠쿠다스#1456"
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(9); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const offset = (page - 1) * limit;

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:4000/users",
    }).then(response => setFriends(response.data));
  }, []);

  const handleChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const filtered = friends.filter((user) => user.nick.includes(search));
  const list = filtered.slice(offset, offset + limit)
    .map((item) => (
      <>
        <div id="MatMate_content" key={item.id}>
          <div id="MatMate_person">
            <IoPersonCircleSharp />
          </div>
          <div id="MatMate_name">
            {item.nick}#{item.code}
          </div>
        </div>
        <hr />
      </>
    ));

  return (
    <div id="MatMate">
      <div id="MatMate_top">
        <div className="doubleLeft icon" onClick={() => props.setToggleTab(1)}>
          <FiChevronsLeft />
        </div>
        <div id="MatMate_title">맛메이트 ({friends.length})</div>
      </div>

      <div id="MatMate_body">
        <div id="MatMate_search">
          <VscSearch />
        </div>
        <input className="input"
          id="MatMate_findInput"
          type="text"
          placeholder="친 구  검 색"
          onChange={handleChange}
        />
      </div>
      <div>{list}</div>
      <FriendPlus />
      <Pagination
        total={filtered.length}
        limit={limit}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default MatMate;
