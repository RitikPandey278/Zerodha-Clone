import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({ name: "", userId: "", phone: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const rawName = localStorage.getItem("userName");
    const name =
      !rawName || rawName === "undefined" || rawName === "null"
        ? ""
        : rawName;

    const rawUserId = localStorage.getItem("userId");
    const userId =
      !rawUserId || rawUserId === "undefined" || rawUserId === "null"
        ? ""
        : rawUserId;

    const rawPhone = localStorage.getItem("phone");
    const phone =
      !rawPhone || rawPhone === "undefined" || rawPhone === "null"
        ? ""
        : rawPhone;

    setUser({ name, userId, phone });
  }, []);

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #eef2f3, #dfe9f3)",
      fontFamily: "Segoe UI, sans-serif",
    },
    card: {
      background: "#fff",
      width: "100%",
      maxWidth: "420px",
      padding: "30px",
      borderRadius: "16px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    },
    title: {
      textAlign: "center",
      marginBottom: "25px",
      fontSize: "22px",
      fontWeight: "600",
      color: "#333",
    },
    field: {
      marginBottom: "18px",
      padding: "12px",
      borderRadius: "10px",
      backgroundColor: "#f7f9fc",
      border: "1px solid #e0e6ed",
    },
    label: {
      fontSize: "13px",
      color: "#6c757d",
      marginBottom: "4px",
    },
    value: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#212529",
      wordBreak: "break-word",
    },
    button: {
      width: "100%",
      padding: "10px",
      fontSize: "15px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#387ed1",
      color: "#fff",
      cursor: "pointer",
      marginTop: "15px",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Profile</h2>

        <div style={styles.field}>
          <div style={styles.label}>Name</div>
          <div style={styles.value}>{user.name || "—"}</div>
        </div>

        <div style={styles.field}>
          <div style={styles.label}>User ID</div>
          <div style={styles.value}>{user.userId || "—"}</div>
        </div>

        <div style={styles.field}>
          <div style={styles.label}>Phone</div>
          <div style={styles.value}>{user.phone || "—"}</div>
        </div>

        <button
          style={styles.button}
          onClick={() => {
            navigate("/");
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default Profile;