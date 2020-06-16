import React,{useState, useRef } from "react";
import "./componentCSS/search.css";
import SearchPannel2 from "./searchPannel2";
import SearchPannel3 from "./searchPannel3";

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';

// search 
const Search = () => {
    // datepicker
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 7),
          key: 'selection',
        }
      ]);
      

    // searchpannel Click background css
    const [search1, setClick1] = useState("isNotBackgroundColor")
    const [search2, setClick2] = useState("isNotBackgroundColor")
    const [search3, setClick3] = useState("isNotBackgroundColor")

    // searchpannel Click Submenu on off
    const [searchClickList2, searchList2] = useState(false);
    const [searchClickList3, searchList3] = useState(false);
    
    // search1 클릭시 focus   
    const inputEl = useRef(null);
    
    // search pannel 클릭 이벤트
    const handleClick1 = () =>{
        setClick1("isBackgroundColor");
        setClick2("isNotBackgroundColor");
        setClick3("isNotBackgroundColor");
        searchList2(false);
        inputEl.current.focus();
    }
    const handleClick2 = () =>{
        setClick1("isNotBackgroundColor");
        setClick2("isBackgroundColor");
        setClick3("isNotBackgroundColor");
        searchList2(true);
        searchList3(false);
    }
    const handleClick3 = () =>{
        setClick1("isNotBackgroundColor");
        setClick2("isNotBackgroundColor");
        setClick3("isBackgroundColor");
        searchList2(false);
        searchList3(true);
    }

    //search 인원 선택시 총 인원 표츌
    const [guest_sum_value , setGuestValue] = useState(0)

    const plus = () => {
        setGuestValue(guest_sum_value+1);
    }
    const minus = () => {
        setGuestValue(guest_sum_value-1);
    }


    return(
        <div className="search">
            <form>
                <div className="search_type">
                    <ul>
                        <li className="border_bottom">숙소</li>
                        <li >장기 숙박</li>
                        <li>체험</li>
                        <li>온라인 체험 <span className="new">NEW</span></li>
                    </ul>
                </div>
                <div className="search_content">
                    <div className={"location "+ search1} onClick={handleClick1}>
                        <div className="search_item_wrap">
                            <p className={"search_title"}>위치</p>
                            <input ref={inputEl} placeholder="어디로 여행가세요?"></input>
                        </div>
                    </div>

                    <div className={"check_date "+ search2} onClick={handleClick2}>
                        <div className="search_item_wrap">
                            <p className={"search_title"}>체크인/체크아웃</p>
                            <div className="datepicker"> 
                                {
                                    searchClickList2 && 
                                    <DateRangePicker
                                        onChange={item => setState([item.selection])}
                                        showSelectionPreview={true}
                                        moveRangeOnFirstSelection={false}
                                        months={2}
                                        ranges={state}
                                        direction="horizontal"
                                    />
                                }
                            </div>
                        </div>
                    </div>

                    <div className={"personnel "+ search3} onClick={handleClick3}>
                        <div className="search_item_wrap">
                            <p className={"search_title"}>인원</p>
                            {guest_sum_value === 0
                            ?<div class="guest_sum_value_zero">게스트 선택</div>
                            :<div class="guest_sum_value">게스트 {guest_sum_value}명</div>
                            }
                        </div>
                        <div>
                            {searchClickList3 && <SearchPannel3 plus={plus} minus={minus}></SearchPannel3>}
                        </div>
                    </div>
                        
                    <div className="search_button">
                        <button><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="18" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> 검색</button>
                    </div>
                </div>
            </form>
        </div>
    )
} 


                    
export default Search;