import NoHomework from "./NoHomework";
import data from "../data.json"

function Day (props) {
    return (
        <div className = "day">
            <div className = "textbox"><h1>{props.weekDay}</h1></div>
            <div className = "line"></div>
            <ul>
                <li>{data[props.weekDay][0] || <NoHomework />}</li>
                <li>{data[props.weekDay][1] || <NoHomework />}</li>
                <li>{data[props.weekDay][2] || <NoHomework />}</li>
                <li>{data[props.weekDay][3] || <NoHomework />}</li>
            </ul>
        </div>
    );
}

export default Day;