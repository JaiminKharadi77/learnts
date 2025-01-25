import React from "react";

function Status(props: StatusProps) {
  const { status } = props;

  let message = "";

  if (status === "loading") message = "loading";
  if (status === "success") message = "Data Fetched";
  if (status === "error") message = "Error While Fetching data";

  return <div>{message}</div>;
}

export default Status;

type StatusProps = {
  status: "loading" | "success" | "error";
};
