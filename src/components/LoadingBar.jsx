import React from "react";

export default function LoadingBar() {
  return (
    <div className="d-flex justify-content-center">
      <button className="btn btn-primary m-4" type="button" disabled>
        Loading...
        <span
          className="spinner-border mx-3 spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      </button>
    </div>
  );
}
