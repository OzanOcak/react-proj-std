import { useEffect, useState } from "react";
import { createName, getNames, removeName } from "./api";
import { toast } from "react-toastify";
import Loading from "./Loading";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import Input from "./Input";
import { Link } from "react-router-dom";

const Crud = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState([]);

  useEffect(() => {
    loadNames();
  }, []);

  const loadNames = () => getNames().then((name) => setNames(name.data));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    createName({ name })
      .then((res) => {
        setLoading(false);
        setName("");
        toast.success(`"${res.data.name}" is created`);
        loadNames();
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === 400) toast.error(err.response.data);
      });
  };

  const handleRemove = (id, name) => {
    if (window.confirm("Are you sure wanted to delete ?")) {
      setLoading(true);
      removeName(id)
        .then((res) => {
          setLoading(false);
          toast.error(`${name} is deleted`);
          loadNames();
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setLoading(false);
            toast.error(err.response.data);
          }
        });
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          {loading ? (
            <Loading />
          ) : (
            <>
              <h4 className="text-center">CRUD with JSON Server</h4>
              <Input
                handleSubmit={handleSubmit}
                name={name}
                setName={setName}
              />
              <ul>
                {names &&
                  names.map((t) => (
                    <li
                      className="border row mx-2 align-items-center"
                      key={t.id}
                    >
                      <div className="list-group">
                        <p className="list-group-item">{t.name}</p>
                      </div>
                      <span
                        onClick={() => handleRemove(t.id, t.name)}
                        className="btn btn-sm float-right"
                      >
                        <AiOutlineDelete className="text-danger" />
                      </span>
                      <Link to={`/update/${t.id}`}>
                        <span className="btn btn-sm float-right">
                          <AiOutlineEdit className="text-warning" />
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Crud;
