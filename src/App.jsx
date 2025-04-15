import { useState } from "react";
import "./App.css";

function App() {
  const [domain, setDomain] = useState("naver.com");

  const domains = ["naver.com", "gmail.com", "hanmail.net"];

  return (
    <>
      <div>
        <div>
          <input type="text" />
          {domain === "" ? null : "naver.com"}
          <select name="" id="">
            {domains.map((d) => {
              return (
                <option key={d} value={d}>
                  {d}
                </option>
              );
            })}
            <option value="">직접입력</option>
          </select>
          <input type="text" />
        </div>
        <input type="password" />
        <button>로그인</button>
      </div>
      <div>회원가입</div>
    </>
  );
}

export default App;
