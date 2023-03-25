import React from "react";

const Button = (props) => {
  if (props.type === "Rounded") {
    return (
      <div>
        <button onClick={props.onClick} className={` text-Celadon text-xl`}>
          {props.children}
        </button>
      </div>
    );
  } else if (props.type === "Flat") {
    return (
      <div>
        <button
          onClick={props.onClick}
          className={`bg-slate-50 p-4 font-normal text-black hover:bg-slate-200`}
        >
          {props.children}
        </button>
      </div>
    );
  } else if (props.type == "Link") {
    return (
      <button
        onClick={props.onClick}
        className={`${props.color?props.color:'text-gray-200'} text-base hover:text-white`}
      >
        {props.children}
      </button>
    );
  }else if(props.type=='dark-modern'){
    return (
      <button onClick={props.onClick}>{props.children}</button>
    )
  } else {
    return (
      <div>
        <button
          onClick={props.onClick}
          className={`text-gray-200 text-sm hover:text-white`}
        >
          {props.children}
        </button>
      </div>
    );
  }
};

export default Button;