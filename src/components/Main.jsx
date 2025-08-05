import React from "react";

function Main() {
    return (
        <div>
            <h1>For SDRs to Book</h1>
            <h1>Meetings that Drive Revenue</h1>
            <p>Our Pipeline Generation Platform eliminates tedious tasks, so your sales reps focus on building human connections that generate revenue.</p>

            <div>
                <input type={"email"} name={"work-email"} maxLength={30} placeholder={"Work Email"} />
                <button type={"submit"}>Join Waitlist</button>
            </div>
        </div>
    );

}

export default Main;