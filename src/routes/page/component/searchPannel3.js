import React,{useState} from "react";

const SearchPannel3 = (props) =>{
    console.log(props);
        
    const guest_plus = (type,currentValue) =>{
        if(type === "adult"){
            setGuestAdult(currentValue);
            setGuestAdultMinusButton("button_isActive");
            props.plus()
        }else if (type === "child"){
            setGuestChild(currentValue);
            setGuestChildMinusButton("button_isActive");
            props.plus()
        }else{
            setGuestEtc(currentValue);
            setGuestEtcMinusButton("button_isActive");
            props.plus()
        }
    }
    const guest_minus = (type,currentValue) =>{
        if(type === "adult"){
            if(currentValue>=0){
                setGuestAdult(currentValue);
                if(currentValue === 0){
                    setGuestAdultMinusButton("button_isNotActive");
                }
                props.minus()
            }
        }else if (type === "child"){
            if(currentValue>=0){
                setGuestChild(currentValue);
                if(currentValue === 0){
                    setGuestChildMinusButton("button_isNotActive");
                }
                props.minus()
            }
        }else{
            if(currentValue>=0){
                setGuestEtc(currentValue);
                if(currentValue === 0){
                    setGuestEtcMinusButton("button_isNotActive");
                }
                props.minus()
            }
        }
    }
    const [guest_adult, setGuestAdult] = useState(0)
    const [guest_child, setGuestChild] = useState(0)
    const [guest_etc, setGuestEtc] = useState(0)

    const [guest_button_adult_minus, setGuestAdultMinusButton] = useState("button_isNotActive")
    const [guest_button_adult_plus, setGuestAdultButton] = useState("button_isActive")
    const [guest_button_child_minus, setGuestChildMinusButton] = useState("button_isNotActive")
    const [guest_button_child_plus, setGuestChildButton] = useState("button_isActive")
    const [guest_button_etc_minus, setGuestEtcMinusButton] = useState("button_isNotActive")
    const [guest_button_etc_plus, setGuestEtcButton] = useState("button_isActive")

    return(
        <div className={"search_item_list"}>
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
                        <span id="asd">{guest_child}</span>
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
    )
}

export default SearchPannel3;