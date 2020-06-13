import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return (
            <div className="navigation">
                <div className="logo">
                    <Link to ="/"></Link>
                </div>
                <div className="nav_list">
                    <ul>
                        <li className="language">
                            <div>
                                <div className="language_img"><img src={"https://toppng.com/uploads/preview/globe-earth-icon-icon-internet-free-11553469590q0vs340qlw.png"}/></div>
                                <svg width="9" height="6" viewBox="0 0 9 6" fill="none"><path d="M1 1L4.5 4.5L8 1" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            </div>
                        </li>
                        <li><Link to ="/">숙소 호스트 되기</Link></li>
                        <li><Link to ="/">체험 호스팅하기</Link></li>
                        <li><Link to ="/">도움말</Link></li>
                        <li><Link to ="/">로그인</Link></li>
                        <li className="signup"><Link to ="/">회원가입</Link></li>
                    </ul>
                
                    </div>
            </div>
        )
    }
}

export default Header;