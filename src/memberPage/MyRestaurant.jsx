import { React, useState } from "react";
import { FiChevronsLeft } from 'react-icons/fi'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

import styles from "./MyRestaurant.module.css";



function MyRestaurant(props) {


    /* TODO: 리스트 클릭 시 식당정보창 뜨게 하기 */

    /* TODO: 식당표시창에서 << 누르면 식당표시창 사라지기 */



    const { markerPositions, setPosition } = props;

    const list = markerPositions.map((item) =>
        <>
            <div className={styles.MyRestaurant_content} onClick={() => {
                setPosition([item.x, item.y]);
                setTimeout(() => item.place.show(), 300);
                props.setToggleTab(7);
                props.setIndex(item.id);
            }}>
                <div className={styles.MyRestaurant_image}><FaMapMarkerAlt /></div>
                <div className={styles.MyRestaurant_info}>
                    <div className={styles.MyRestaurant_name}>{item.name}</div>
                    <div className={styles.MyRestaurant_address}>{item.address}</div>
                    <div className={styles.MyRestaurant_roadNumberAddress}>{item.roadNumberAddress}</div>
                </div>
            </div>
            <hr />
        </>)



    return (
        <div className={styles.MyRestaurant}>
            <div className={styles.MyRestaurant_top}>
                <div className={styles.doubleLeft} onClick={() => {
                    props.setToggleTab(1);
                    props.nowPosition();
                }}><FiChevronsLeft /></div>
                <div className={styles.MyRestaurant_title}>나의맛집</div>
                <div className={styles.MyRestaurant_search}><BsSearch /></div>
            </div>
            <div>
                {list}
            </div>
        </div >
    );
}



export default MyRestaurant;
