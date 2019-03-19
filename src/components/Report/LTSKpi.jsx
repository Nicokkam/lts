import React from 'react';

export function LTSKpi(props) {
  const { result } = props;
  return (
    <div className="report-lts-container">

      <div className="report-lts-percentage"> LTS DIRECT RUN {result.percentage} % </div>

      <div className="report-lts-sum">
        <div className="report-lts-total" > TOTAL: {result.total}</div>
        <div className="report-lts-ok"> OK: {result.ok}</div>
      </div>

    </div>

  )
}
