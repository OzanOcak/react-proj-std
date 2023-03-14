import { useEffect, useState } from "react";
import { getNames } from "./api";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

const Crud = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [names, setNames] = useState([]);
  useEffect(() => {
    loadNames();
  }, []);

  const loadNames = () => getNames().then((name) => setNames(name.data));

  const nameList =
    names &&
    names.map((i) => (
      <div key={i.id}>
        <ul>
          <li>{i.name}</li>
        </ul>
        <span onClick={() => console.log("")}>
          <AiOutlineEdit />
        </span>
        <link to={`/update/${i.id}`}>
          <span onClick={() => console.log(" ")}>
            <AiOutlineDelete />
          </span>
        </link>
      </div>
    ));

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ul className="item">
          {names &&
            names.map((i) => (
              <li key={i.id} className="list-item">
                <p>{i.name}</p>
                <div>
                  <span onClick={() => console.log("")} className="btn">
                    <AiOutlineEdit />
                  </span>
                  <Link to={`/update/${i.id}`} className="btn">
                    <span onClick={() => console.log(" ")}>
                      <AiOutlineDelete />
                    </span>
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default Crud;
