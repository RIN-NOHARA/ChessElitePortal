import { FaRegTired } from "react-icons/fa";
import Login from "./components/login/login";
import { useState } from "react";
import Cookies from "js-cookie";
function IndexComp() {
    function Greet() {
        return (
            <h1>Hello</h1>
        )
    }
    function Logbtn() {
        return (
            <div>
                <button onClick={() => { setLoginStat(true); }}>Login</button>
            </div>
        )
    }
    const [login_stat, setLoginStat] = useState(false);
    
    return (
        <>
            {login_stat ? <Greet /> : <Logbtn />}
        </>
    )
}

export default IndexComp;