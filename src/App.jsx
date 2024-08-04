import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function App() {
  const [mydata, setmydata] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setmydata(res.data);
    });
  }, []);
  return (
    <>
      <main className="bg-slate-400 w-[800px] mr-auto ml-auto  h-fit p-5">
        <h1 className="text-3xl font-bold text-center text-shadow mb-4">
          AXIOS TEST
        </h1>
        <div className="grid grid-cols-3 gap-5">
          {mydata.map((post) => {
            const { id, title, body } = post;
            return (
              <div
                className="flex flex-col p-8 rounded-lg cursor-pointer duration-500 hover:scale-105  hover:black-shadow mb-7 border border-black"
                key={id}
              >
                <h2 className="text-center font-bold">
                  {title.slice(0, 15).toUpperCase()}
                </h2>
                <p className="text-center  ">{body.slice(0, 100)}</p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
