import React from 'react';
import cl from './Main.module.css'; // Импортируем стили из модуля CSS
import ReactPlayer from "react-player";
import Footer from './Footer';
import BtnCU from '../widgets/BtnCU';

const MainPage: React.FC = () => {
    return (
        <div className={cl.pageContainer}>
            <div className={cl.main}>
                <div className={cl.mainPoster}>
                    <span>
                        <h1 className={cl.sectionTitle}>Most important title on the page</h1>
                        <p className={cl.sectionText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis,
                            leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
                        </p>
                    </span>
                    <div className={cl.videoPlaceholder}>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                            width="100%"
                            height="100%"
                            playing={true}
                            controls={true}
                        />
                    </div>
                </div>

                <div className={cl.midlleBlock}>
                    <h2 className={cl.sectionTitleMidlleBlock}>Also very important title</h2>
                    <div className={cl.midlleBlockFlex}>
                        {Array(6).fill(null).map((_, index) => (
                            <span key={index}>
                                <h3 className={cl.sectionTitle}>Title</h3>
                                <p className={cl.sectionText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.
                                </p>
                            </span>
                        ))}
                    </div>
                    <div className={cl.btnCU}>
                        <BtnCU />
                    </div>
                </div>
                <div className={cl.underBlock}>
                    <h2>Less important title</h2>
                    <BtnCU />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;
