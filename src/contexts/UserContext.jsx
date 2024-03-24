import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({'username':"Log In", "name":"", "avatar_url":"https://upload.wikimedia.org/wikipedia/commons/f/f7/Rie_Black_Icon_User.png"});
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
  };