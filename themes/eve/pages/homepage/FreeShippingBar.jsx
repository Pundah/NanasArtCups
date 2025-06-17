import React from "react";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider">
          <h2>Free Shipping</h2>
          <p>Get Free Shipping on all orders over $75.</p>
        </div>
        <div className="p-2 border-divider">
          <h2>Great Service</h2>
		  <p>We are dedicated to providing exceptional customer service, always putting the need of our customers fist and ensuring their satisfaction with every purchase.</p>
        </div>
        <div className="p-2 border-divider">
		  <h2>Amazing Quality</h2>
          <p>We use the highest quality materials on all of our products.</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
