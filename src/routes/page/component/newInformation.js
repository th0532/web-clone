import React, {useState} from "react";
import "./componentCSS/newInformation.css"
const NewInformation = () =>{
    return (
        <div className="newInfomation">
            <h1>최신 정보 확인하기</h1>
            <div className ="newInfomation_wrap">
                <NewInformationSection subTitle="게스트를 위한 정보" desc1="여행 관련 업데이트" desc2="알아두어야 할 사항" desc3="예약 취소 옵션" desc4="취소 가능 대상 및 환불 범위 알아보기" desc5="도움말 센터" desc6="필요한 도움받기"></NewInformationSection>
                <NewInformationSection subTitle="호스트를 위한 정보" desc1="브라이언 체스키 CEO의 메시지" desc2="에어비앤비 CEO의 영상 메시지 보기" desc3="호스팅에 도움이 되는 자료" desc4="코로나19로 인한 영향" desc5="구호 인력을 위한 숙소 제공하기" desc6="구호 인력 지원 방법 알아보기"></NewInformationSection>
                <NewInformationSection subTitle="코로나19 구호 인력을 위한 정보" desc1="구호 인력을 위한 숙소" desc2="프로그램에 대해 알아보기" desc3="숙소 신청" desc4="숙소 옵션 확인하기" desc5="기부하기" desc6="비영리 단체 지원하기"></NewInformationSection>
                <NewInformationSection subTitle="기타" desc1="에어비앤비 뉴스룸" desc2="최근 발표한 사항" desc3="세계보건기구" desc4="관련 정보 및 업데이트"></NewInformationSection>
            </div>
        </div>
    )
}

const NewInformationSection = (props) =>{
    return (
                <section>
                    <h2>{props.subTitle}</h2>
                    <a>
                        <span>{props.desc1}</span>
                        <span>{props.desc2}</span>
                    </a>
                    <a>
                        <span>{props.desc3}</span>
                        <span>{props.desc4}</span>
                    </a>
                    <a>
                        <span>{props.desc5}</span>
                        <span>{props.desc6}</span>
                    </a>
                </section>
           )

}

export default NewInformation;