import React from 'react';
import './MainPage.css';
import { Link } from 'react-router-dom';

function MainPage() {

  return (
    <>
      <div id="main-page">
        <nav id="main-nav">
          <img className="main-logo" src="./img/test-bemeal-logo.png" alt="bemeal지도"></img>
          <ul>
            <li>
              <button id="loginclick" data-toggle="modal" data-target="#loginModal">로그인</button>
              <div className="modal fade" id="loginModal" role="dialog">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title">로그인</h1>
                    </div>
                    <div className="modal-body"></div>
                  </div>
                </div>
              </div>
            </li>
            <li><button><Link to = './SignUp.jsx'/></button></li>
          </ul >
          <div id="goingTop" onClick={() => { window.scrollTo(0, 0) }}> ↑ </div>
        </nav >
        <section className="main-banner" >
          <header>
            <h1>꼭꼭 숨겨놓았던<br />
              나만의 맛집이 있나요?</h1>
            <p>
              나만 알고싶었던 맛집<br />
              친한 사람들과만 몰래 나누고 싶었던 맛집<img src="./img/marker.png" width="35px" alt="마커" /><br />
              우리의 bemeal 지도로 완성해보세요.
            </p>
          </header>
        </section >
        <div className="main-car1" >
          <p> 설명 </p>
        </div>
        <div className="main-car2" >
          <p> 설명 </p>
        </div >
        <div className="main-car3" >
          <p> 설명 </p>
        </div>
      </div >
    </>
  )

}


export default MainPage;

