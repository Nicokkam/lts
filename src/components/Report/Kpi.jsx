import React from 'react';

export function Kpi(props) {

    const { kpi } = props;
    return (
        <div className="report-kpis-head">

            <div className="report-prod-day">
                <div className="report-key"> PRODUÇÃO DO DIA: </div>
                <div className="report-value"> {kpi.produced} </div>
            </div>

            <div className="report-objective-day">
                <div className="report-key"> OBJETIVO DO DIA: </div>
                <div className="report-value"> {kpi.objective} </div>
            </div>

            <div className="report-stoptime-day">
                <div className="report-key"> STOP TIME  </div>
                <div className="report-value"> {kpi.stopTime} </div>
            </div>

            <div className="report-drun-chassis">
                <div className="report-key">DIRECT RUN CHASSIS: </div>
                <div className="report-value"> {kpi.directRunChassis}  %</div>
            </div>

            <div className="report-drun-general">
                <div className="report-key">DIRECT RUN GERAL: </div>
                <div className="report-value"> {kpi.directRunGeral}  %</div>
            </div>

        </div>
    )
}
