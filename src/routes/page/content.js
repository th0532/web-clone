import React,{useState} from "react";
import "./css/content.css";
import Search  from "./component/search";
import ContentContainer from "./component/contentContainer";
import NewInformation from "./component/newInformation";
import SiteMap from "./component/sitemap";

const Content = () =>{
        return (
            <div className="content">
                <Search></Search>
                <ContentContainer></ContentContainer>
                <NewInformation></NewInformation>
                <SiteMap></SiteMap>
            </div>
        )
}


export default Content;