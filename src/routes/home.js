import React from "react";
import Header from "./page/header"
import Content from "./page/content"
import Footer from "./page/footer"

class Home extends React.Component{
    render(){
        return(
            <div>
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home;