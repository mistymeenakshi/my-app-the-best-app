import { React } from "react";

export default function Alert(props) {
  const captialize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    // "alert alert-${props.alert.type} alert-dismissible fade show"
    props.alert && (
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        <strong>{captialize(props.alert.type)}</strong>:{props.alert.msg}
      
      </div>
    )
  );
}
