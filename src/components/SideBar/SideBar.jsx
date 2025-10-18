// src/components/SideBar/SideBar.jsx
import React from "react";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css";

/* ===== Icon wrapper ===== */
const IconWrap = ({ children, className = "" }) => (
  <span className={`sb-icon ${className}`} aria-hidden>
    {children}
  </span>
);

/* ==== ICONES SELON LE DESIGN ==== */

/* Home */
const IHome = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  </IconWrap>
);

const IProfile = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M5 19.5a7 7 0 0 1 14 0" />
    </svg>
  </IconWrap>
);

const IAvailability = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <circle cx="12" cy="15" r="2" />
    </svg>
  </IconWrap>
);

const IAppointments = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="M9 14h6M9 17h3" />
    </svg>
  </IconWrap>
);

const IMessages = () => (
  <IconWrap>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M2.992 16.342C3.13904 16.7129 3.17178 17.1193 3.086 17.509L2.021 20.799C1.98668 20.9658 1.99556 21.1387 2.04678 21.3011C2.09799 21.4636 2.18986 21.6103 2.31367 21.7273C2.43747 21.8443 2.58911 21.9277 2.7542 21.9697C2.91929 22.0116 3.09236 22.0107 3.257 21.967L6.67 20.969C7.03772 20.8961 7.41853 20.9279 7.769 21.061C9.90439 22.0582 12.3234 22.2692 14.5992 21.6567C16.8749 21.0442 18.8613 19.6477 20.2077 17.7134C21.5541 15.7791 22.1741 13.4314 21.9583 11.0845C21.7425 8.73769 20.7047 6.54247 19.0281 4.88619C17.3514 3.22992 15.1437 2.21904 12.7944 2.0319C10.4451 1.84475 8.10514 2.49338 6.18744 3.86334C4.26975 5.23329 2.89753 7.23654 2.31289 9.51964C1.72826 11.8027 1.96877 14.219 2.992 16.342Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </IconWrap>
);

const IPatients = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  </IconWrap>
);

const IPharmacy = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <path d="M10.5 20.5L20.5 10.5C20.9673 10.0421 21.3391 9.49606 21.5941 8.89352C21.849 8.29099 21.982 7.64389 21.9853 6.98965C21.9886 6.33541 21.8622 5.687 21.6133 5.08192C21.3645 4.47684 20.9982 3.92709 20.5355 3.46447C20.0729 3.00184 19.5232 2.63552 18.9181 2.38668C18.313 2.13783 17.6646 2.01141 17.0104 2.01471C16.3561 2.01802 15.709 2.15098 15.1065 2.40593C14.5039 2.66087 13.9579 3.03273 13.5 3.5L3.5 13.5C3.03273 13.9579 2.66087 14.5039 2.40593 15.1065C2.15098 15.709 2.01802 16.3561 2.01471 17.0104C2.01141 17.6646 2.13783 18.313 2.38668 18.9181C2.63552 19.5232 3.00184 20.0729 3.46447 20.5355C3.92709 20.9982 4.47684 21.3645 5.08192 21.6133C5.687 21.8622 6.33541 21.9886 6.98965 21.9853C7.64389 21.982 8.29099 21.849 8.89352 21.5941C9.49606 21.3391 10.0421 20.9673 10.5 20.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M8.5 8.5L15.5 15.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </IconWrap>
);

const IClinics = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <rect x="4" y="11" width="4" height="9" rx="1" />
      <rect x="16" y="11" width="4" height="9" rx="1" />
      <rect x="8" y="7" width="8" height="13" rx="2" />
      <path d="M12 9v4M10 11h4" />
    </svg>
  </IconWrap>
);

const IAnalysisLab = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <path d="M14 2V8C13.9999 8.33548 14.0841 8.66561 14.245 8.96L19.755 19.04C19.9217 19.3446 20.0062 19.6874 20.0002 20.0345C19.9942 20.3817 19.8979 20.7213 19.7208 21.02C19.5437 21.3187 19.2919 21.5661 18.9902 21.7379C18.6885 21.9098 18.3472 22.0001 18 22H6.00001C5.65278 22.0001 5.31152 21.9098 5.0098 21.7379C4.70807 21.5661 4.45628 21.3187 4.2792 21.02C4.10211 20.7213 4.00584 20.3817 3.99984 20.0345C3.99385 19.6874 4.07834 19.3446 4.24501 19.04L9.75501 8.96C9.9159 8.66561 10.0001 8.33548 10 8V2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M6.453 15H17.547" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.5 2H15.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </IconWrap>
);

const INurses = () => (
  <IconWrap>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 14H15" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 17V11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </IconWrap>
);

const IMedicalQuestions = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  </IconWrap>
);

const ISettings = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="2" />
      <path d="M19 12a7 7 0 0 0-.08-1l1.62-1.26-1.5-2.6-1.98.5a7 7 0 0 0-1.7-1L15 3.6H9l-.36 2.04a7 7 0 0 0-1.7 1l-1.98-.5-1.5 2.6L6.08 11a7 7 0 0 0 0 2l-1.62 1.26 1.5 2.6 1.98-.5a7 7 0 0 0 1.7 1L9 20.4h6l.36-2.04a7 7 0 0 0 1.7-1l1.98.5 1.5-2.6L18.92 13c.05-.33.08-.66.08-1Z" />
    </svg>
  </IconWrap>
);

const ILogout = () => (
  <IconWrap>
    <svg viewBox="0 0 24 24">
      <path d="M10 5H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4" />
      <path d="M13 12h7" />
      <path d="M18 9l3 3-3 3" />
    </svg>
  </IconWrap>
);

export default function SideBar({ collapsed = false }) {
  const location = useLocation();
  const navigate = useNavigate();

  // Menu items selon le design fourni
  const itemsTop = [
    { key: "/Home", icon: <IHome />, label: "Home" },
    { key: "/profile", icon: <IProfile />, label: "Profile" },
    { key: "/availability", icon: <IAvailability />, label: "Availability" },
    { key: "/appointments", icon: <IAppointments />, label: "Appointments" },
    { key: "/messages", icon: <IMessages />, label: "Messages" },
    { key: "/patients", icon: <IPatients />, label: "Patients" },
    { key: "/pharmacy", icon: <IPharmacy />, label: "Pharmacy" },
    { key: "/clinics", icon: <IClinics />, label: "Clinics" },
    { key: "/analysis-lab", icon: <IAnalysisLab />, label: "Analysis Lab" },
    { key: "/nurses", icon: <INurses />, label: "Nurses" },
    { key: "/medical-questions", icon: <IMedicalQuestions />, label: "Medical Questions" },
  ];

  const itemsBottom = [
    { key: "/settings", icon: <ISettings />, label: "Settings" },
    { key: "/logout", icon: <ILogout />, label: "Log out" },
  ];

  const pathname = location.pathname;
  const selectedKey =
    itemsTop.find((i) => i.key !== "/" && pathname === i.key)?.key ||
    itemsTop.find((i) => pathname.startsWith(String(i.key).replace(/\/:.*$/, "")))?.key ||
    itemsBottom.find((i) => pathname === i.key)?.key ||
    "/Home"; // Home sélectionné par défaut

  const handleMenuClick = ({ key }) => {
    if (!key) return;
    navigate(key);
  };

  return (
    <aside className={`sb ${collapsed ? "sb--collapsed" : ""}`}>
      <div className="sb__header">
        <span className="sb__header-title">{collapsed ? "M" : "MEDILINK"}</span>
      </div>

      {/* CONTAINER GROUPE MENUS */}
      <div className="sb__menu-group">
        {/* TOP MENU */}
        <div style={{ paddingBottom: '60px' }}>
          <Menu
            className="sb__menu sb__menu--top"
            mode="inline"
            inlineCollapsed={false}
            selectedKeys={[selectedKey]}
            onClick={handleMenuClick}
            items={itemsTop.map((i) => ({
              key: i.key,
              icon: i.icon,
              disabled: i.disabled,
              label: (
                <span className="sb__menu-label">
                  {i.label}
                </span>
              ),
              className: selectedKey === i.key ? "menu-item-selected" : "",
              "data-menu-id": i.key,
            }))}
          />
        </div>

        {/* BOTTOM MENU */}
        <Menu
          className="sb__menu sb__menu--bottom"
          mode="inline"
          inlineCollapsed={false}
          selectedKeys={[selectedKey]}
          onClick={handleMenuClick}
          items={itemsBottom.map((i) => ({
            key: i.key,
            icon: i.icon,
            label: (
              <span className="sb__menu-label">
                {i.label}
              </span>
            ),
            className: selectedKey === i.key ? "menu-item-selected" : "",
            "data-menu-id": i.key,
          }))}
        />
      </div>
    </aside>
  );
}