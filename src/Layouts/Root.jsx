import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-[1240px] mx-auto font-poppins">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;