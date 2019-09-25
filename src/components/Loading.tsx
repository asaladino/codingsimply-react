import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Loading = () => {
    return <span className="loading">
        <FontAwesomeIcon icon="spinner" size="3x" spin />
        <span className="sr-only">Loading...</span>
    </span>
}

export default Loading;
