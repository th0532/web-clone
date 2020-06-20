import React, {usestate} from "react";
import "./componentCSS/sitemap.css"

const SiteMap = () =>{
    return(
        <div className="siteMapSection">
        <SiteMapSection subTitle="소개" list1="다양성 및 소속감" list2="접근성" list3="신뢰와 안전" list4="Airbnb Citizen" list5="올림픽" list6="뉴스룸"></SiteMapSection>
        <SiteMapSection subTitle="커뮤니티" list1="에어비앤비 매거진" list2="에어비앤비 어소시에이트" list3="에어비앤비 비즈니스 프로그램" list4="친구 초대하기" list5="채용정보"></SiteMapSection>
        <SiteMapSection subTitle="호스팅하기" list1="숙소 호스팅" list2="온라인 체험 호스팅하기" list3="브라이언 체스키 CEO의 메시지" list4="책임감 있는 호스팅" list5="Open Homes" list6="자료 센터" list7="커뮤니티 센터"></SiteMapSection>
        <SiteMapSection subTitle="에어비앤비 지원" list1="코로나19 관련 업데이트" list2="도움말 센터" list3="예약 취소 옵션" list4="에어비앤비 이웃 민원 지원"></SiteMapSection>
            
        </div>
    )
}

const SiteMapSection = (props) =>{
    return (
            <section>
                <h5>{props.subTitle}</h5>
                <ul>
                    <li>{props.list1}</li>
                    <li>{props.list2}</li>
                    <li>{props.list3}</li>
                    <li>{props.list4}</li>
                    <li>{props.list5}</li>
                    <li>{props.list6}</li>
                    <li>{props.list7}</li>
                </ul>
            </section>
    )
}

export default SiteMap;