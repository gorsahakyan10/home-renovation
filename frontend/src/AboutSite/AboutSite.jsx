import React from "react";
import "./AboutSite.css";

function AboutSite() {
    return (
        <div className="AboutSite mt-3">
            <div className="row d-flex align-items-center">
                <div className="col-sm-12 col-md-6">
                    <h2 className="display-5">О нас</h2>
                    <p>
                        этот сайт был создан как для людей которые хотят сделать
                        ремонт по дому и ищут хороших мастеров, так и для
                        мастеров которые хотят выставить свои работы на
                        нашем сайте и тем самым привлекать больше клиентов.<br/>
                        Здесь вы можете найти хорошего мастера с вашего города .
                    </p>
                </div>
                <div className="col-sm-12 col-md-6">
                    <img src="https://remont.fm/wp-content/uploads/2022/11/%C2%A7%E2%80%A2-%E2%89%A0%E2%80%A0%C2%A9v%C2%AE-%C2%B0a%C2%AE%E2%80%A0%C2%A7g_1.jpg" alt="..."/>
                </div>
            </div>
        </div>
    );
}

export default AboutSite;
