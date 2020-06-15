import React,{useState} from "react";
import "./componentCSS/search.css";
// search 
const Search = () => {
    const [search1, setClick1] = useState("isNotActive")
    const [search2, setClick2] = useState("isNotActive")
    const [search3, setClick3] = useState("isNotActive")
    const [display, setDisplay] = useState("none");

    const [guest_sum_value, setGuestValue] = useState(0)

    const [guest_adult, setGuestAdult] = useState(0)
    const [guest_child, setGuestChild] = useState(0)
    const [guest_etc, setGuestEtc] = useState(0)

    const [guest_button_adult_minus, setGuestAdultMinusButton] = useState("button_isNotActive")
    const [guest_button_adult_plus, setGuestAdultButton] = useState("button_isActive")
    const [guest_button_child_minus, setGuestChildMinusButton] = useState("button_isNotActive")
    const [guest_button_child_plus, setGuestChildButton] = useState("button_isActive")
    const [guest_button_etc_minus, setGuestEtcMinusButton] = useState("button_isNotActive")
    const [guest_button_etc_plus, setGuestEtcButton] = useState("button_isActive")

    const handleClick1 = () =>{
        setClick1("isActive");
        setClick2("isNotActive");
        setClick3("isNotActive");
        setDisplay("none");
    }
    const handleClick2 = () =>{
        setClick1("isNotActive");
        setClick2("isActive");
        setClick3("isNotActive");
        setDisplay("none");
    }
    const handleClick3 = () =>{
        setClick1("isNotActive");
        setClick2("isNotActive");
        setClick3("isActive");
        setDisplay("block");
    }
   
    const guest_plus = (type,currentValue) =>{
        if(type === "adult"){
            setGuestAdult(currentValue);
            setGuestAdultMinusButton("button_isActive");
            setGuestValue(guest_sum_value+1)
        }else if (type === "child"){
            setGuestChild(currentValue);
            setGuestChildMinusButton("button_isActive");
            setGuestValue(guest_sum_value+1)
        }else{
            setGuestEtc(currentValue);
            setGuestEtcMinusButton("button_isActive");
            setGuestValue(guest_sum_value+1)
        }
    }
    const guest_minus = (type,currentValue) =>{
        if(type === "adult"){
            if(currentValue>=0){
                setGuestAdult(currentValue);
                setGuestValue(guest_sum_value-1)
                if(currentValue === 0){
                    setGuestAdultMinusButton("button_isNotActive");
                }
            }
        }else if (type === "child"){
            if(currentValue>=0){
                setGuestChild(currentValue);
                setGuestValue(guest_sum_value-1)
                if(currentValue === 0){
                    setGuestChildMinusButton("button_isNotActive");
                }
            }
        }else{
            if(currentValue>=0){
                setGuestEtc(currentValue);
                setGuestValue(guest_sum_value-1)
                if(currentValue === 0){
                    setGuestEtcMinusButton("button_isNotActive");
                }
            }
        }
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
                    <div className={"location "+ search1 } onClick={handleClick1}>
                        <p>위치</p>
                        <input placeholder="어디로 여행가세요?"></input>
                    </div>
                    <div className={"check_date "+ search2} onClick={handleClick2}>
                        <p>체크인/체크아웃</p>
                        <input placeholder="날짜추가"></input>
                    </div>

                    <div className={"personnel "+ search3} onClick={handleClick3}>
                        <div className="personnel_div">
                            <p>인원</p>
                            {guest_sum_value === 0
                                ?<div className={"guest_sum_value_zero"}>게스트 추가</div>
                                :<div className={"guest_sum_value"}>{"게스트 "+guest_sum_value+"명"}</div>
                            }
                        </div>
                        <div className={"guest_item "+display}>
                            <ul>
                                <li>
                                    <div className="guest_info">
                                        <h2>성인</h2>
                                        <span>만 13세 이상</span>
                                    </div>
                                    <div className="guest_count">
                                        <button className={guest_button_adult_minus} onClick={()=>guest_minus("adult",guest_adult-1)}>-</button>
                                        <span>{guest_adult}</span>
                                        <button className={guest_button_adult_plus} onClick={()=>guest_plus("adult",guest_adult+1)}>+</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="guest_info">
                                        <h2>어린이</h2>
                                        <span>2~12세</span>
                                    </div>
                                    <div className="guest_count">
                                        <button className={guest_button_child_minus} onClick={()=>guest_minus("child",guest_child-1)}>-</button>
                                        <span>{guest_child}</span>
                                        <button className={guest_button_child_plus} onClick={()=>guest_plus("child",guest_child+1)}>+</button>
                                    </div>
                                </li>
                                <li>
                                    <div className="guest_info">
                                        <h2>유아</h2>
                                        <span>2세 미만</span>
                                    </div>
                                    <div className="guest_count">
                                        <button className={guest_button_etc_minus} onClick={()=>guest_minus("etc",guest_etc-1)}>-</button>
                                        <span>{guest_etc}</span>
                                        <button className={guest_button_etc_plus} onClick={()=>guest_plus("etc",guest_etc+1)}>+</button>
                                    </div>
                                </li>
                            </ul>
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