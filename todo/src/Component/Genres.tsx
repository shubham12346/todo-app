import { NavLink } from "react-router-dom";

const Genres = () => {
    return (
        <div>
            <div className="list-group">
                <NavLink
                    to={"/home/"}
                    className="list-group-item list-group-item-action "
                >
                    All
                </NavLink>
                <NavLink
                    to={"/home/completed"}
                    className="list-group-item list-group-item-action "
                >
                    {" "}
                    Completed{" "}
                </NavLink>

                <NavLink
                    to={"/home/pending"}
                    className="list-group-item list-group-item-action"
                >
                    {" "}
                    Pending{" "}
                </NavLink>
            </div>
        </div>
    );
};

export default Genres;
