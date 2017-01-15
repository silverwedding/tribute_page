import {render} from "react-dom";
require('./sass/style.scss');

const App = () => (
    <div className="test" >
    	ALALALALA
    	<p className="another">
    		LALALALAL
    	</p>
    </div>
);

render(<App />, document.getElementById("app"));
