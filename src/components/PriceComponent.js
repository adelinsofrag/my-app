import React from "react";

const priceWrapperComponent = {
  display: "flex",
  justifyContent: "center",
  maxWidth: "1200px",
  gap: "20px",
  paddingTop: "20px",
};

const priceCard = {
  padding: "20px",
  border: "1px solid black",
  borderRadius: "10px",
};

function PriceCardComponent({ title, description, footer }) {
  return (
    <div style={priceCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{footer}</p>
    </div>
  );
}

function PriceComponent() {
  return (
    <div style={priceWrapperComponent}>
      <PriceCardComponent
        title={"Standard Plan"}
        description={"Standard plan description $10"}
        footer={"$10 / month"}
      />
      <PriceCardComponent
        title={"Advanced Plan"}
        description={"Advanced plan description $25"}
        footer={"$25 / month"}
      />
      <PriceCardComponent
        title={"Business Plan"}
        description={"Contact us for more details"}
        footer={"To be decided"}
      />
    </div>
  );
}

export default PriceComponent;
