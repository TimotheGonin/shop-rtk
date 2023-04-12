import tv from "../../../images/tv.png";
import { useDispatch, useSelector } from "react-redux";
import { tvs as tvsAction } from "./tvSlice";

function TvView() {
	const { tvs } = useSelector((state) => state.tv);
	const dispatch = useDispatch();

	return (
		<div className="container">
			<img src={tv} alt="phone" />
			<p>
				Disponibilité: <span className="count">{tvs}</span>
			</p>
			<div className="btnContainer">
				<button onClick={() => dispatch(tvsAction())}>Acheter</button>
			</div>
		</div>
	);
}

export default TvView;
