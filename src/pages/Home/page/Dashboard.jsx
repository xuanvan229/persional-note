import React, { useState } from 'react';
import { post, get, put, download } from '../../../utils/api';
import 'react-quill/dist/quill.snow.css';
import { format, compareAsc } from 'date-fns';

import { FaFacebookSquare, FaGithub } from 'react-icons/fa';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  NavLink,
  Link,
  withRouter,
} from 'react-router-dom';
import { useEffect } from 'react';

const getNotes = () => {
  const url = `/api/note`;
  return get({ url });
};

const Home = (props) => {
  const [data, setData] = useState([]);
  const [note, setNote] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const toHex = (v) => {
    var hash = 0;
    if (v.length === 0) return hash;
    for (var i = 0; i < v.length; i++) {
      hash = v.charCodeAt(i) + ((hash << 5) - hash);
      hash = hash & hash;
    }
    var color = '#';
    for (var i = 0; i < 3; i++) {
      var value = (hash >> (i * 8)) & 255;
      color += ('00' + value.toString(16)).substr(-2);
    }
    return color;
  };

  const categoryToList = (value) => {
    return value.split(' ');
  };

  const getData = async () => {
    const result = await getNotes();
    if (result.status === 200) {
      setData(result.data.data.reverse());
    }
    console.log('result', result);
  };
  return (
    <div className="flex w-screen min-h-screen text-black">
      <div className="w-1/3 p-4 border-r h-screen overflow-auto">
        {data.map((item) => (
          <div
            className="mb-4 cursor-pointer"
            onClick={() => setNote(item)}
            key={item.id}
          >
            <h2 className="text-blue-500 font-bold ">{item.title}</h2>
            <div className="mt-1">
              {categoryToList(item.category).map((v) => (
                <span
                  key={v}
                  className="p-1 text-xs rounded-md mr-2 mt-1 text-white"
                  style={{ backgroundColor: `${toHex(v)}` }}
                >
                  {v}
                </span>
              ))}
            </div>
            <div className="mt-1    ">
              {format(new Date(item.created_at), 'MM/dd/yyyy')}
            </div>
          </div>
        ))}
      </div>
      <div className="w-2/3 p-4 border-r h-screen overflow-auto">
        {note ? (
          <div>
            <h1 className="text-blue-500 font-bold ">{note.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: note.content }}></div>
          </div>
        ) : (
          <div>
            <h2>
              Hi there 👋 <br /> My name is Van Hong Xuan. I am a Front End
              Developer.
            </h2>
            <hr />
            <p className="mt-2">
              I am a cheerful, sociable and carries many aspirations and goals.
              Learning new languages and technologies is what I am passionate
              about. I willing help people and work well with group.
            </p>
            <ul className="pl-4 mt-4">
              <li className="text-xl">
                🔭 I’m currently working on Reactjs, Fluter, Golang...
              </li>
              <li className="text-xl">
                🌱 I’m currently learning on Competitive Programming.
              </li>
            </ul>

            <h3 className="mt-4">What is this?</h3>
            <hr />
            <p className="mt-2">
              This is my persional note. This is a place I put everything I see
              recently.
            </p>
            <h3 className="mt-4">Contact me</h3>
            <hr />
            <div className="flex mt-4">
              <a
                className="text-black"
                href="https://www.facebook.com/xuanyeuloan"
                target="_blank"
              >
                <FaFacebookSquare className="text-4xl mr-4" />
              </a>
              <a
                className="text-black"
                href="https://www.github.com/xuanvan229"
                target="_blank"
              >
                <FaGithub className="text-4xl mr-4" />
              </a>
            </div>
            <p className="mt-2">Cheer !!! 🍺</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default withRouter(Home);
