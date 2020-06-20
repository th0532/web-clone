import React from "react"
import "./css/footer.css"
class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
                <div className="leftMenu">
                    <div className="copyright">© 2020 Airbnb, Inc. All rights reserved</div>
                    <div className="footerList">
                        <ul>
                            <li>개인정보 처리방침</li>
                            <li>이용약관</li>
                            <li>사이트맵</li>
                            <li>한국의 변경된 환불 정책</li>
                        </ul>
                    </div>
                </div>
                
                <div className="rightMenu">
                    <div className="country">
                        <a><span>한국어</span></a>
                        <a><span>KRW</span></a>
                    </div>
                    <div className="SNS">
                        <ul>
                            <li><a><img src = "https://cdn.pixabay.com/photo/2017/06/22/06/22/facebook-2429746_960_720.png" alt="facebook" width="25px" height="25px"></img></a></li>
                            <li><a><img src = "https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_960_720.png" alt="instagram" width="25px" height="25px"></img></a></li>
                            <li><a><img src = "https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_960_720.png" alt="youtube" width="25px" height="25px"></img></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;