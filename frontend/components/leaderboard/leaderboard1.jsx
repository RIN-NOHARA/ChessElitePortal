import "../../styles/leaderboard1.css";
import React, { useEffect, useState } from "react";
import { Coda } from "coda-js";
import logo from "../../images/logo.jpg";

const coda = new Coda("ba6b9d0c-3c4c-4d0d-ab21-3f4bbc39f633");

export default function Leaderboard1() {
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
      <div className="leaderboard1-leaderboard">
        <div>
          <img
            className="leaderboard1-logo-gen1"
            alt="logo"
            src={logo}
          />
        </div>
      </div>
    );

  return (
    <div className="leaderboard1-leaderboard">
 
      <div
        className="leaderboard1-bg-white leaderboard1-shadow overflow-hidden leaderboard1-sm:rounded-lg"
        style={{ marginBottom: "20px", maxWidth: "1200px" }}
      >
        <div className="leaderboard1-header-title">
          
          <p className="leaderboard1-mt-1 leaderboard-max-w-2xl leaderboard1-text-sm leaderboard1-text-gray-500 leaderboard1-smaller-font1">
            Country Club, Culiacán.
          </p>
          
        </div>
        <div className="leaderboard1-table-lead">
          <div className="leaderboard1-table-header leaderboard1-font-medium">
            <div className="leaderboard1-table-row-item leaderboard1-white leaderboard1-one1 leaderboard1-small-font1">POS</div>
            <div
              className="leaderboard1-table1-row-item leaderboard1-white1 leaderboard1-two1 leaderboard1-small-font"
              style={{ paddingLeft: "20px" }}
            >
              PLAYER
            </div>
            <div className="leaderboard1-table-row-item leaderboard1-white leaderboard1-three leaderboard1-small-font">TOTAL</div>
          </div>
        </div>
        {rows.map((row) => (
          <div key={row.id} className="leaderboard1-table-lead-white leaderboard1-border-t leaderboard1-border-gray-200">
            <div className="leaderboard1-table-header leaderboard1-bg-white leaderboard1-px-4 leaderboard1-py-5 ">
              <div className="leaderboard1-one1 leaderboard1-table-row-item leaderboard1-font-medium leaderboard-text-gray-500">
                {row.values["Rank"]}
              </div>
              <div className="leaderboard1-two1 leaderboard1-table-row-item">{row.values["Team"]}</div>
              <div className="leaderboard1-three1 leaderboard1-table-row-item">
                {row.values["Total"]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
