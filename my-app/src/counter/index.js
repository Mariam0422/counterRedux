import { increment, decrement } from "./slice";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
    const state = useSelector(state => state.counter);
    console.log(state);
    const dispatch = useDispatch();
    return ( 
        <div style={{display: "flex", gap: "10px", justifyContent: "center"}}>
        <button onClick={() => dispatch(decrement())} >-</button>
        <span>{state}</span>
        <button onClick={() => dispatch(increment())}>+</button>
        </div>
     );
}
 
export default Counter;