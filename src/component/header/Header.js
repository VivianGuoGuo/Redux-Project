import "bootstrap/dist/css/bootstrap.css";
import { useRef } from "react";
// import { useDispatch } from "react-redux";
import {useAppleDispatch} from '../../redux/hooks';
import { actions } from "../../redux/actionCreator";

function Header() {
  const fileInput = useRef(null);
  const dispatch = useAppleDispatch();

  const openFile = (e) => {
    fileInput.current.click();
  };

  const changeHandler = (e) => {
    dispatch(actions.setFile(e.target.files[0]));
  };

  return (
    <nav data-testid="header" className="navbar">
      <span>
        AI Labs | <b>Frontend case study</b>
      </span>
      <input
        type="file"
        id="file-input"
        accept=".csv"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={changeHandler}
      />
      <button onClick={openFile}>Open</button>
    </nav>
  );
}
export { Header };
