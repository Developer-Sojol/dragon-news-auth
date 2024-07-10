import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold">Al Categories</h2>
            <button className="text-xl bg-[#E7E7E7] py-4 px-7">National News</button>

            {
                categories.map(category => <NavLink
                    className="block text-xl font-light px-4 text-[#9F9F9F]"
                    key={category.id}
                    to={`/category/${category.id}`}
                >{category.name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;