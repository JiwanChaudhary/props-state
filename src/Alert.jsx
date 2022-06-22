function Alert() {
  return (
    <div className="alert">
      <p className="sure">Are you sure?</p>
      <div>
        <button type="button" className="cancel">
          Cancel
        </button>
        <button type="submit" className="confirm" >
          Confirm
        </button>
      </div>
    </div>
  );
}

export default Alert;
