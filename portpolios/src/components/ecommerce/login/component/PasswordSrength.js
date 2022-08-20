import React from "react";
import zxcvbn from "zxcvbn";

function PasswordSrength({ password }) {
    // console.log(password);
    const testresult = zxcvbn(password);
    // console.log(testresult);
    const num = (testresult.score * 100) / 4;

    const changeColorSet = () => {
        switch (testresult.score) {
            case 0:
                return "red";
            case 1:
                return "blue";
            case 2:
                return "orange";
            case 3:
                return "yellow";
            case 4:
                return "green";
            default:
                return "none";
        }
    };
    const ContentText = () => {
        switch (testresult.score) {
            case 0:
                return "very Bad";
            case 1:
                return (
                    <p>😥</p>
                );
            case 2:
                return (
                    <p>😟</p>
                );
            case 3:
                return (
                    <p>😄</p>
                );
            case 4:
                return (
                    <p>😎</p>
                );
            default:
                return "none";
        }
    };
    const ChangePasswordColor = () => ({
        width: `${num}%`,
        backgroundColor: changeColorSet(),
    });
    return (
        <>
            <div className="progress" style={{ height: "9px" }}>
                <div
                    className="progress-bar"
                    style={ChangePasswordColor()}
                ></div>
            </div>
            <p
                className="mt-2"
                style={{
                    display: "felx",
                    textAlign: "text-end",
                    float: "right",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "black",
                }}
            >
                {ContentText()}
            </p>
        </>
    );
}

export default PasswordSrength;
