import { useParams } from "react-router-dom";
import Header from "./Shared/Header/Header";
import RightSideNav from "./Shared/RightsideNav/RightSideNav";
import Navber from "./Shared/Navber/Navber";


const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <h2 className="text-2xl mt-4 font-semibold">Dragon News</h2>

            <div className="grid md:grid-cols-4">
                <div className="col-span-3 border">
                    <h2 className="text-5xl">News Details</h2>
                    <p>{id}</p>
                </div>
                <div className="-mt-11">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;