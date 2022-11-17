import React from "react";
import '../stylesheets/Button.css'

//Props pueden ser pasadas de forma desestructurada de forma que sea mas explicito
//Se pueden pasar funciones como props
function Button({text,isClickButton,handleClick}){
  return(
    <button 
      className={isClickButton ? "click-button" : "restart-button"}
      onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;