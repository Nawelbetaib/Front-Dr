import React from 'react';
import clinicIcon from '../../../assets/icons/clinicc.png';
import './DocumentPreview.css';

const DocumentPreview = ({ prescriptionContent, onPrintRecord }) => {
  return (
    <div className="document-preview-container">
      <div className="document-preview-header">
        <h3 className="document-preview-title">Document preview</h3>
      </div>
      
      <div className="document-preview-description">
        This feature simplifies the entire process of managing prescriptions. You can easily view, write, and update medication orders, dosages, and instructions with complete accuracy.
      </div>

      <div className="document-preview-content">
        <div className="prescription-document">
          {/* Header du document */}
          <div className="prescription-header">
            <div className="doctor-info">
              <div className="clinic-logo">
                <img src={clinicIcon} alt="Clinic" className="clinic-icon" />
              </div>
              <div className="doctor-details">
                <h4>DR.INES GHARBI</h4>
                <p>General Practitioner</p>
              </div>
            </div>
            <div className="doctor-info-arabic">
              <h4>الدكتورة إيناس الغربي</h4>
              <p>طبيبة عامة</p>
            </div>
          </div>

          {/* Zone de contenu principal du document */}
          <div className="prescription-content">
            {prescriptionContent && (
              <div className="prescription-text-content">
                {prescriptionContent}
              </div>
            )}
          </div>

          {/* Footer du document */}
          <div className="prescription-footer">
            <div className="contact-info">
              <div className="contact-left">
                <p>Phone: +216 71 234 567</p>
                <p>Email: contact@example.com</p>
                <p>Address: Avenue Habib</p>
                <p>Bourguiba, Tunis, Tunisia</p>
              </div>
              <div className="contact-right">
                <p>الهاتف: 567 234 71 216+</p>
                <p>البريد الإلكتروني:</p>
                <p>contact@example.com</p>
                <p>العنوان: شارع الحبيب بورقيبة، تونس، تونس</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bouton Print Record - En dessous de l'ordonnance */}
      <div className="document-preview-actions">
        <button className="print-record-btn-document-preview" onClick={onPrintRecord}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 7V3C5 2.73478 5.10536 2.48043 5.29289 2.29289C5.48043 2.10536 5.73478 2 6 2H14C14.2652 2 14.5196 2.10536 14.7071 2.29289C14.8946 2.48043 15 2.73478 15 3V7" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V9C2 8.73478 2.10536 8.48043 2.29289 8.29289C2.48043 8.10536 2.73478 8 3 8H17C17.2652 8 17.5196 8.10536 17.7071 8.29289C17.8946 8.48043 18 8.73478 18 9V13C18 13.2652 17.8946 13.5196 17.7071 13.7071C17.5196 13.8946 17.2652 14 17 14H15" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M15 11H5V17C5 17.2652 5.10536 17.5196 5.29289 17.7071C5.48043 17.8946 5.73478 18 6 18H14C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11Z" stroke="#6B7280" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Print Record
        </button>
      </div>
    </div>
  );
};

export default DocumentPreview;
