import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getAccessTokenSilently({
      authorizationParams: {
        audience: process.env.REACT_APP_AUTH0_AUDIANCE,
        scope: "profile",
        prompt: "consent",
      },
    })
      .then((accessToken) => {
        setToken(accessToken);

        return axios.get(`/api/topics`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      })
      .then((res) => {
        const newTopics = res.data;
        setTopics(newTopics);
        setLoading(false);
      });
  }, [getAccessTokenSilently, user?.sub]);

  const value = { loading, token, topics, setTopics };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
