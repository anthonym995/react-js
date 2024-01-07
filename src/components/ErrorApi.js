const ErrorApi = ({msg}) => {
  return (
    <div className="error-container">
      <div className="error-box">
        <span className="error-icon">⚠️</span>
        <p className="error-message">{msg}</p>
      </div>
    </div>
  );
};

export default ErrorApi;
