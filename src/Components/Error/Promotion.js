import React from "react";

const Promotion = ({ msg }) => {
  return (
    <div class="relative bg-blackColor px-4 py-3 pr-14 text-primary">
      <p class="text-left text-sm font-medium sm:text-center capitalize">
        {msg}
      </p>
    </div>
  );
};

export default Promotion;
