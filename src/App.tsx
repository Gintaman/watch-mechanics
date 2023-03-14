import "./styles.css";
import spongebob from "./spongebob.png";

export const App = () => {
    return (
        <>
            <h1>
                React Template {process.env.NODE_ENV} {process.env.name}{" "}
            </h1>
            <img src={spongebob} alt="spongebob" />
        </>
    );
};
