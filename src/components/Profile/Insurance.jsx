import React from 'react';
import './Insurance.css';
import iconEm from '../../assets/icons/icon-em.png';

const Insurance = ({ insuranceData }) => {
  return (
    <div className="insurance-container">
      <div className="insurance-circle">
        <img src={iconEm} alt="Insurance icon" className="insurance-icon-img" />
      </div>
      <h4 className="insurance-title">Insurance</h4>
      <p className="insurance-company">
        {insuranceData?.company || 'CNAM Caisse Nationale d\'Assurance Maladie'}
      </p>
      <p className="insurance-policy">
        Policy No. {insuranceData?.policyNumber || '54872936'}
      </p>
    </div>
  );
};

export default Insurance;
