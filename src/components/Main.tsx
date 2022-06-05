import React from "react";
import { gql, useQuery } from "@apollo/client";

const QueryRocketNames = gql`
  {
    rockets {
      id
      name
    }
  }
`;
const Main = () => {
  const { data, loading, error } = useQuery(QueryRocketNames);

console.log(data)
  return (
  <div>
      


  </div>
  )
};

export default Main;
