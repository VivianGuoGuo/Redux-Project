// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { actions } from "../../redux/actionCreator";
import { useAppleDispatch } from "../../redux/hooks";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

function Table() {
  const file = useSelector((state) => state.file);
  const csvData = useSelector((state) => state.csvData);
  const dispatch = useAppleDispatch();

  useEffect(() => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const fileData = e.target.result;
      parseData(fileData);
    };
    if (file) {
      fileReader.readAsText(file);
    }
  }, [file]);

  const parseData = (fileData) => {
    const headers = fileData.slice(0, fileData.indexOf("\n")).split(",");
    const rows = fileData.slice(fileData.indexOf("\n") + 1).split("\n");
    const newData = rows.map((row) => {
      const values = row.split(",");
      const eachObject = headers.reduce((obj, header, i) => {
        obj[header.trim()] = values[i];
        return obj;
      }, {});
      return eachObject;
    });
    dispatch(actions.setData(newData));
  };

  const getEmptyTable = () => {
    const emptyCells = [];
    for (let i = 0; i < 20; i++) {
      emptyCells.push({});
      for (let j = 0; j < 6; j++) {
        emptyCells[i][j] = "placeholder";
      }
    }

    return emptyCells.map((row, i) => {
      return (
        <tr className="empty-row" key={i}>
          <td>{row["0"]}</td>
          <td>{row["1"]}</td>
          <td>{row["2"]}</td>
          <td>{row["3"]}</td>
          <td>{row["4"]}</td>
          <td>{row["5"]}</td>
        </tr>
      );
    });
  };

  const getDataTable = () => {
    return csvData.map((entry) => {
      return (
        <tr key={entry.Date + entry.Open + entry.High}>
          <td>{entry.Date}</td>
          <td>{entry.Open}</td>
          <td>{entry.High}</td>
          <td>{entry.Low}</td>
          <td>{entry.Close}</td>
          <td>{entry.Volume}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="container" data-testid="table">
        <table className="table">
          <thead>
            <tr>
              <td>{file ? file.name : "Data"}</td>
            </tr>
          </thead>

          <tbody className="data-table-container">
            <table className="table data-table">
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Open</td>
                  <td>High</td>
                  <td>Low</td>
                  <td>Close</td>
                  <td>Volume</td>
                </tr>
              </thead>

              <tbody className="data">
                {csvData && file ? getDataTable() : getEmptyTable()}
              </tbody>
            </table>
          </tbody>
        </table>
      </div>
    </>
  );
}

export { Table };
