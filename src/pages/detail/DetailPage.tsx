import React from "react";
import { RouteComponentProps, useParams, useRouteMatch } from "react-router-dom";

interface MatchParams {
  touristRouteId: string
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (props) => {
  console.log(useParams())
  console.log(useRouteMatch())
  return <h1>旅游路线的id为: {props.match.params.touristRouteId}</h1>
}