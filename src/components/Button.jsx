import React from 'react';

function Button({ title, px, py }) {
  return (
    <button className={`text-white bg-[#DB4444] px-${px} py-${py} rounded-md hover:bg-[#b2140e] transition-all duration-300 cursor-pointer`}>
      {title}
    </button>
  );
}

export default Button;