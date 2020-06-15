import React,{useState} from "react";
import "./css/content.css";
import Search  from "./component/search";
import ContentContainer from "./component/contentContainer";

const Content = () =>{
        return (
            <div className="content">
                <Search></Search>
                <ContentContainer></ContentContainer>

            </div>
        )
}


export default Content;