import EmployeeCard from "@/components/EmployeeCard/EmployeeCard";
import React from "react";
const employee = {
  role: "Software Engineer",
  name: "John Doe",
  email: "porebskifilip@wp.pl",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image: "",
  phoneNumber: "123123123",
};
export default function test() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      test
      <EmployeeCard {...employee} />
    </div>
  );
}
