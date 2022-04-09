import Bath from "./Bath";
import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";

function FloorPlan(props) {
    return (
        <div id="FloorPlan">
            <div id='bed1Bath'>
            <Bedroom bedNum='Bedroom 1'/>
            <Bath size='Half Bath'/>
            </div>
            <LivingRoom/>
            <Kitchen/>
            <Bath size='Full Bath'/>
            <Bedroom bedNum='Bedroom 2'/>
            <Bedroom bedNum='Bedroom 3'/>
            
        </div>
    );
}

export default FloorPlan;