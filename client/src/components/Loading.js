import React, { useState, useEffect } from "react";

import { LoadingProps } from "../utils/type";

import "../assets/style/sass/components/loading.sass";

function Loading(props) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(!loading), 2000);

    return () => clearTimeout(timeout);
  }, []);

  return <div className={props.className}>Loading</div>;
}

Loading.propTypes = LoadingProps;

export default React.memo(Loading);
