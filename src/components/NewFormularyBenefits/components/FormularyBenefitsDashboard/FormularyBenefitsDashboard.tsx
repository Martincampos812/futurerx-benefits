import React from 'react';
import Paper from '@material-ui/core/Paper';
import FormularyDashboardStatsCard from './FormularyBenefitsDashboardStatsCard/FormularyBenefitsDashboardStatsCard';
import FormularyDashboardStatsChart from './FormularyBenefitsDashboardStatsChart/FormularyBenefitsDashboardStatsChart';

import './FormularyBenefitsDashboard.scss';

const FormularyBenefitsDashboard = () => {
  return (
    <div className="formulary-dashboard-stats-outer-container">
      <Paper elevation={0}>
        <div className="title">FORMULARY BENEFITS COMPONENT DASHBOARD</div>
        <div className="inner-container">
          <FormularyDashboardStatsChart/>
          
          <div className="stats-card-container">  
            <FormularyDashboardStatsCard title="MEDICARE" variant="1"/>
            <FormularyDashboardStatsCard title="MEDICAID" variant="2"/>
            <FormularyDashboardStatsCard title="COMMERCIAL" variant="3"/>
            <FormularyDashboardStatsCard title="EXCHANGE" variant="4"/>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default FormularyBenefitsDashboard
