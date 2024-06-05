import { CssBaseline } from '@mui/material';
import { useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "./firebase";

export default function Performer(){
    const [user, setUser] = useState<any>(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const addres = "@gmail.com";

    const handleSubmit = async() =>{
      alert(`Email: ${email + addres}, Password: ${password}`);
      const auth =getAuth();
      try{
        await signInWithEmailAndPassword(
          auth,
          email + addres,
          password
        );
      }catch (error){
        alert("IDまたはパスワードが間違っています。");
      }finally{
        setLoading(false);
      }
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });

      return () => unsubscribe(); //クリーンアップ
    }, []);

    return(
        <>
        {/*ログインしている場合に情報を表示する設定*/}
        {user ? (
          <>
          <h1>Login成功</h1>
          ようこそ！{user}さん
          </>
        ) : (
        <>
        <CssBaseline />
        <h1>Login</h1>
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
        />
        <button onClick={handleSubmit} disabled={loading} >Login</button>
        </>
        )}
        </>
    )
}