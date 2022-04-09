import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen(props) {
    return (
        <div id="Kitchen">
            <div id='OvenSink'>
            <Oven/>
            <Sink/>
            </div>
        <p>kitchen</p>
        </div>
    );
}

export default Kitchen;