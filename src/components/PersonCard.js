import React from "react";
// this import usually built in now, but may be needed

const PersonCard = (props) => {
  // destructuring
  const { firstName, lastName, age, hairColor } = props;

  return (
    //single parent React element <div>everything(props:vals) inside</div>
    <div className="border">
      <h1>
        {lastName}, {firstName}
      </h1>
      {/* <h1>Last Name: {lastName}</h1> */}
      <h2>Age: {age}</h2>
      <h2>Hair Color: {hairColor}</h2>
    </div>
  );
};

export default PersonCard;
