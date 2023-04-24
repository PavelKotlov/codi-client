import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const { user, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState();

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          authorizationParams: {
            audience: process.env.REACT_APP_AUTH0_AUDIANCE,
          },
        });

        setToken(accessToken);

        await axios.get("/api/user/authorized", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  const value = { token };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
