import "../../styles/leaderboard.css";
import React, { useEffect, useState } from "react";
import { Coda } from "coda-js";
import logo from "../../images/logo.jpg";

const coda = new Coda("ba6b9d0c-3c4c-4d0d-ab21-3f4bbc39f633");

export default function Leaderboard() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const doc = await coda.getDoc("vWPEjqkCZh");
      const table = await doc.getTable("grid-VZ_Ouj8tJ2");
      const rows = await table.listRows({
        useColumnNames: true
      });
      const sortedRows = rows.sort((a, b) => {
        return a.values.Rank - b.values.Rank;
      });
      setRows(sortedRows);
    }
    fetchData();
  }, []);

  if (rows.length < 1)
    return (
      <div style={{ padding: "200px", background: "#f3f4f6" }}>
        <div>
          <center>
          <img
            style={{ maxWidth: "80%", margin: "0 auto" }}
            alt="logo"
            src={logo}
          />
          </center>
        </div>
      </div>
    );

  return (
    <>
    <div className="hell">
    <div className="leaderboard-leaderboard">
 
      <div
        className="leaderboard-bg-white leaderboard-shadow overflow-hidden leaderboard-sm:rounded-lg"
        style={{ marginBottom: "20px", maxWidth: "1200px" }}
      >
        <div className="leaderboard-header-title">
          
          {/* <p className="leaderboard-mt-1 leaderboard-max-w-2xl leaderboard-text-sm leaderboard-text-gray-500 leaderboard-smaller-font">
            TOURNAMENTS LEADERBOARD
          </p> */}
          
        </div>
        <div className="leaderboard-table-lead">
          <div className="leaderboard-table-header leaderboard-font-medium">
            <div className="leaderboard-table-row-item leaderboard-white leaderboard-one leaderboard-small-font">POS</div>
            <div
              className="leaderboard-table-row-item leaderboard-white leaderboard-two leaderboard-small-font"
              style={{ paddingLeft: "20px" }}
            >
              PLAYER
            </div>
            <div className="leaderboard-table-row-item leaderboard-white leaderboard-three leaderboard-small-font">TOTAL</div>
          </div>
        </div>
        {rows.map((row) => (
          <div key={row.id} className="leaderboard-table-lead-white leaderboard-border-t leaderboard-border-gray-200">
            <div className="leaderboard-table-header leaderboard-bg-white leaderboard-px-4 leaderboard-py-5 ">
              <div className="leaderboard-one leaderboard-table-row-item leaderboard-font-medium leaderboard-text-gray-500">
                {row.values["Rank"]}
              </div>
              <div className="leaderboard-two leaderboard-table-row-item">{row.values["Team"]}</div>
              <div className="leaderboard-three leaderboard-table-row-item">
                {row.values["Total"]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}
