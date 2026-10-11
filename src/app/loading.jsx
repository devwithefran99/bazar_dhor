import React from "react";

const loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>
    </div>
  );
};

export default loading;