import React, {useState , useRef, useEffect} from "react";
// grid grid-cols-2 divide-x divide-blue-500
function Calculator(){

    const inputRef = useRef();
    //useEffect
    useEffect(() => {
        document.body.style.backgroundColor = "#DAF7A6";
    }, []);

    return (
        <div className="text-center">
            <div className="bg-gray-300 ml-96 mr-96 mt-8 rounded-lg shadow-2xl">
                <div  className="mt-8 text-center bg-blue-300 h-24 rounded-lg">
                    <div id="screen" className="mt-4 text-3xl rounded-md"></div>
                </div>
                <div className="bg-green-200 h-16 text-center">
                    <div className=" text-3xl" id="output">0</div>
                </div>
                <div>
                    <div className="flex flex-row">
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> 1 </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> 2 </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> 3 </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> * </div>
                    </div>
                    <hr className="w-full"/>
                    <div className="flex flex-row">
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> 4 </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> 5 </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> 6 </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> /</div>
                    </div>
                    <hr className="w-full"/>
                    <div className="flex flex-row">
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> 7 </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> 8 </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> 9 </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> % </div>
                    </div>
                    <hr className="w-full"/>
                    <div className="flex flex-row">
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center ">+</div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center">=</div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={onClick} className="h-16 w-48 p-14 text-center"> - </div>
                        <div onMouseOver={(event) => {
                            event.target.style.backgroundColor = "#B3B7D6";
                        }} onMouseOut={(event) => {
                            event.target.style.backgroundColor = ""
                        }} onClick={clr} className="h-16 w-48 p-14 text-center"> Clear </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-2xl">Made with <span className="text-red-500 text-4xl">&#9829;</span> By Shivanshu Panwar</div>
        </div>
    );

    function onClick(e){
        e.target.style.backgroundColor = "#5BD18A";
        setTimeout(() => {
            e.target.style.backgroundColor = "";
        }, 100);
        const number = document.getElementById("screen");
        if(e.target.innerHTML !== "=") {
            number.innerText += e.target.innerText;
        }
        const value = e.target.innerText;

        if(value === "="){
            var result = eval(number.innerText);
            document.getElementById("output").innerText = result;
        }
    }

    function clr(){
        document.getElementById("screen").innerHTML = "";
        document.getElementById("output").innerHTML = "0";
    }

}

export default Calculator;