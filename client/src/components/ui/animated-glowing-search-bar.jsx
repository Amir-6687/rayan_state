import React from "react";

const SearchComponent = ({
  value = "",
  onChange,
  onFocus,
  onBlur,
  placeholder = "Search...",
}) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="absolute z-[-1] w-full h-min-screen"></div>
      <div
        id="poda"
        className="relative flex items-center justify-center group"
        style={{ borderRadius: "12px" }}
      >
        <div
          className="absolute z-[-1] overflow-hidden h-full w-full max-h-[70px] max-w-[314px] blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[999px] before:h-[999px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-60
                        before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-120deg] group-focus-within:before:rotate-[420deg] group-focus-within:before:duration-[4000ms]"
          style={{ borderRadius: "12px" }}
        ></div>
        <div
          className="absolute z-[-1] overflow-hidden h-full w-full max-h-[65px] max-w-[312px] blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]"
          style={{ borderRadius: "12px" }}
        ></div>
        <div
          className="absolute z-[-1] overflow-hidden h-full w-full max-h-[65px] max-w-[312px]  blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]"
          style={{ borderRadius: "12px" }}
        ></div>
        <div
          className="absolute z-[-1] overflow-hidden h-full w-full max-h-[65px] max-w-[312px]  blur-[3px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[82deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0),#18116a,rgba(0,0,0,0)_10%,rgba(0,0,0,0)_50%,#6e1b60,rgba(0,0,0,0)_60%)] before:transition-all before:duration-2000
                        group-hover:before:rotate-[-98deg] group-focus-within:before:rotate-[442deg] group-focus-within:before:duration-[4000ms]"
          style={{ borderRadius: "12px" }}
        ></div>

        <div
          className="absolute z-[-1] overflow-hidden h-full w-full max-h-[63px] max-w-[307px]  blur-[2px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-[83deg]
                        before:bg-[conic-gradient(rgba(0,0,0,0)_0%,#a099d8,rgba(0,0,0,0)_8%,rgba(0,0,0,0)_50%,#dfa2da,rgba(0,0,0,0)_58%)] before:brightness-140
                        before:transition-all before:duration-2000 group-hover:before:rotate-[-97deg] group-focus-within:before:rotate-[443deg] group-focus-within:before:duration-[4000ms]"
          style={{ borderRadius: "12px" }}
        ></div>

        <div
          className="absolute z-[-1] overflow-hidden h-full w-full max-h-[59px] max-w-[303px]  blur-[0.5px] 
                        before:absolute before:content-[''] before:z-[-2] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-70
                        before:bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)] before:brightness-130
                        before:transition-all before:duration-2000 group-hover:before:rotate-[-110deg] group-focus-within:before:rotate-[430deg] group-focus-within:before:duration-[4000ms]"
          style={{ borderRadius: "12px" }}
        ></div>

        <div id="main" className="relative group">
          <input
            placeholder={placeholder}
            type="text"
            name="text"
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className="bg-[#010201] border-none w-[301px] h-[56px] px-[59px] text-lg focus:outline-none"
            style={{
              borderRadius: "12px",
              color: "#ffffff",
            }}
            onFocus={(e) => {
              e.target.style.setProperty("--placeholder-color", "#e5e7eb");
            }}
            placeholder={placeholder}
          />
          <div
            id="input-mask"
            className="pointer-events-none w-[100px] h-[20px] absolute bg-gradient-to-r from-transparent to-black top-[18px] left-[70px] group-focus-within:hidden"
          ></div>
          <div
            className="absolute h-[42px] w-[40px] overflow-hidden top-[7px] right-[7px]
                          before:absolute before:content-[''] before:w-[600px] before:h-[600px] before:bg-no-repeat before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-90
                          before:bg-[conic-gradient(rgba(0,0,0,0),#3d3a4f,rgba(0,0,0,0)_50%,rgba(0,0,0,0)_50%,#3d3a4f,rgba(0,0,0,0)_100%)]
                          before:brightness-135 before:animate-spin-slow"
            style={{ borderRadius: "12px" }}
          ></div>
          <div
            id="filter-icon"
            className="absolute top-[7px] right-[7px] flex items-center justify-center z-[2] h-[42px] w-[40px] [isolation:isolate] overflow-hidden bg-gradient-to-b from-[#161329] via-black to-[#1d1b4b] border border-transparent"
            style={{ borderRadius: "12px" }}
          >
            <svg
              preserveAspectRatio="none"
              height="27"
              width="27"
              viewBox="4.8 4.56 14.832 15.408"
              fill="none"
            >
              <path
                d="M8.16 6.65002H15.83C16.47 6.65002 16.99 7.17002 16.99 7.81002V9.09002C16.99 9.56002 16.7 10.14 16.41 10.43L13.91 12.64C13.56 12.93 13.33 13.51 13.33 13.98V16.48C13.33 16.83 13.1 17.29 12.81 17.47L12 17.98C11.24 18.45 10.2 17.92 10.2 16.99V13.91C10.2 13.5 9.97 12.98 9.73 12.69L7.52 10.36C7.23 10.08 7 9.55002 7 9.20002V7.87002C7 7.17002 7.52 6.65002 8.16 6.65002Z"
                stroke="#d6d6e6"
                strokeWidth="1"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
          <div
            id="search-icon"
            className="absolute top-[15px]"
            style={{ left: "20px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
              height="24"
              fill="none"
              className="feather feather-search"
            >
              <circle stroke="url(#search)" r="8" cy="11" cx="11"></circle>
              <line
                stroke="url(#searchl)"
                y2="16.65"
                y1="22"
                x2="16.65"
                x1="22"
              ></line>
              <defs>
                <linearGradient gradientTransform="rotate(50)" id="search">
                  <stop stopColor="#f8e7f8" offset="0%"></stop>
                  <stop stopColor="#b6a9b7" offset="50%"></stop>
                </linearGradient>
                <linearGradient id="searchl">
                  <stop stopColor="#b6a9b7" offset="0%"></stop>
                  <stop stopColor="#837484" offset="50%"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
