import React from "react";

function WelcomePage() {
  return (
    
    <div style={styles.container}>
        <h1 style={styles.header}>Welcome to Library Management System</h1>
        <p style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
        </p>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: "https://educationtribe.in/wp-content/uploads/2020/07/Library-Management-System-1318x840.jpg",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  header: {
    fontSize: "3em",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  description: {
    fontSize: "1.5em",
    textAlign: "center",
  },
};

export default WelcomePage;