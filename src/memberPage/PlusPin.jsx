import axios from 'axios';
import { React, useState, useEffect } from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import { VscSearch } from "react-icons/vsc";
import { useQuery } from 'react-query';

import { Error, Loading } from '../components'
import Pagination from "./Pagination";

import './PlusPin.css';

  const fetchData = async (query,[x, y]) => {
    let response = await axios.get('http://localhost:4000/places', { params: { x, y, query } });
    return response.data;
  }

function PlusPin() {

  const [position, setPosition] = useState([127.48742638905269, 36.64394808472207]);
  const [query, setQuery] = useState("");
  const [limit] = useState(4); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const offset = (page - 1) * limit;
  const [filtered, setFiltered] = useState([]);

  const { isLoading, error, data: restaurants } = useQuery(['restaurants', position, query], () => fetchData(query,position));
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  const handleChange = (e) => {
    setPage(1);
    setQuery(e.target.value);
   };

  useEffect(() => {
    if (isLoading) return;
    const filtered = restaurants.filter((place) => place.place_name.includes(query));
    setFiltered(filtered);
  },[restaurants]);

  // if (isLoading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <>{error}</>
  // }
  const list = filtered.slice(offset, offset + limit)
    .map((item) => (
      <>
        <div id="PlusPin_content" key={item.id} onClick={() => console.log(item.y)}>
          <div id="PlusPin_person" key={item.id}>
            <IoPersonCircleSharp />
          </div>
          <div id="PlusPin_name">
            {item.place_name} <br />
            {item.road_address_name}
          </div>
        </div>
        <hr />
      </>
    ));


  return (
    <div>
      <img id="plusBtn" src="./img/plusBtn.png" alt="추가" onClick={openModal} />
      <div className={modalOpen ? 'openModal modal' : 'modal'}>
        {modalOpen ? (
          <section>
            <header>
              <button className="close" onClick={closeModal}>
                &times;
              </button>
              <h1>맛집 등록</h1>
            </header>

            <div id="PlusPin_body">
              <div id="PlusPin_search">
                <VscSearch />
              </div>
              <input className="input"
                id="PlusPin_findInput"
                type="text"
                placeholder="맛 집  검 색"
                onChange={handleChange}
              />
            </div>
            <div>{list}</div>
            <Pagination
              total={filtered.length}
              limit={limit}
              page={page}
              setPage={setPage}
            />
          </section>
        ) : null}
      </div>
    </div >
  );
}



export default PlusPin;
