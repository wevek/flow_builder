import reportWebVitals from './reportWebVitals';
import "./index.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BodyWidget } from './components/BodyWidget';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<BodyWidget/>
);

reportWebVitals();


