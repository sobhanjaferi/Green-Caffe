import React from "react";
import Header from "../../Components/Header/Header";
import Soshi from "../../Components/Discription/Soshi/Soshi";
import CoffeOpsions from "../../Components/CoffeOpsions/CoffeOpsions";
import Slider from "../../Components/Slider/Slider";
import Date from "../../Components/Footer/Footer";
import NextPage from "../../Components/NextPage/NextPage";

function Home() {
    return (
        <>
            <Header />
            <Soshi />
            <CoffeOpsions />
            <Slider />
            <Date />
            <NextPage />
        </>
    );
}

export default Home;