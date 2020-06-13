import React from "react"
import "./css/content.css";
class Content extends React.Component{
    render(){
        return (
            <div className="content">
                <Search></Search>
            </div>
        )
    }
}

class Search extends React.Component{
    render(){
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
                        <div className="location">
                            <p>위치</p>
                            <input placeholder="어디로 여행가세요?"></input>
                        </div>
                        <div className="check_date">
                            <p>체크인/체크아웃</p>
                            <input placeholder="날짜추가"></input>
                        </div>
                        <div className="personnel">
                            <p>인원</p>
                            <input placeholder="게스트 추가"></input>
                        </div>
                        <div className="search_button">
                            <button><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" size="18" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> 검색</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Content;