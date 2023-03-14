const FormElement = ({ handleSubmit, name, setName }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Input
        type="text"
        placeHolder="enter name"
        value={name}
        style={{ width: "50%" }}
        autoFocus
        required
      />
      <br />
      <button>Submit</button>
      <button onClick={() => setName("")}>Cancel</button>
    </div>
  </form>
);
