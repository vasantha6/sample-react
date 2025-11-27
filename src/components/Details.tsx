import React from "react";

export default function Details(): React.ReactElement {
  return (
    <div>
      <h2>Details Page</h2>
      <p>
        This is the details page available at <code>/details</code>.
      </p>
      <p>
        You can show more information here based on route params or fetched
        data.
      </p>
    </div>
  );
}
