// NoResultFound.js
import React from "react";

const NoResultFound = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "calc(100vh - 180px)",
      background: "#f8f8f8",
    },
    content: {
      textAlign: "center",
    },
    heading: {
      fontSize: "2rem",
      color: "#333",
      marginBottom: "10px",
    },
    message: {
      fontSize: "1rem",
      color: "#666",
    },
  };
  return (
    <div className="w-full h-[450px] flex justify-center items-center">
      <div style={styles.content}>
        <h2 style={styles.heading}>No Result Found</h2>
        <p style={styles.message}>
          Sorry, but we couldn't find any results for your query.
        </p>
      </div>
    </div>
  );
};

export default NoResultFound;
