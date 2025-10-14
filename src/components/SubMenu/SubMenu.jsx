import React from "react";
import {
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Dropdown,
  Image,
  Menu,
  Row,
  Col,
  Tooltip,
} from "antd";
import "./SubMenu.css";

// Import des images
import ellipse9 from "../../assets/icons/Ellipse9.png";
import subIcon from "../../assets/icons/sub.png";

export default function SubMenu({ collapsed, toggleCollapsed, onCtaClick }) {
  // Données statiques pour l'utilisateur
  const currentUser = {
    firstName: "User",
    lastName: "Name",
    email: "username@gmail.com",
    phone: null,
    address: null,
    avatarSrc: null
  };

  const fullName = `${currentUser?.firstName || "User"} ${currentUser?.lastName || "Name"}`;
  const email = currentUser?.email || "username@gmail.com";

  const logout = () =>
    ["token", "auth_token", "id"].forEach((k) => localStorage.removeItem(k));

  const handleMenuClick = (info) => {
    if (info.key === "logout") {
      logout();
    } else if (info.key === "profile") {
      // Navigation vers profil
      console.log("Navigate to profile");
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={[
        { key: "profile", label: "Mon Profil" },
        { type: "divider" },
        { key: "logout", label: "Déconnexion" },
      ]}
    />
  );

  // Calcul du % de complétion du profil
  const REQUIRED_FIELDS = [
    "firstName",
    "lastName",
    "email",
    "phone",
    "address",
    "avatarSrc",
  ];
  const filledCount = REQUIRED_FIELDS.reduce(
    (n, key) => n + (currentUser?.[key] ? 1 : 0),
    0
  );
  const profileCompletion = Math.round(
    (filledCount / REQUIRED_FIELDS.length) * 100
  );

  return (
    <div className="app-header">
      {/* barre supérieure */}
      <div className="app-header__main">
        <Row align="middle" className="app-header__bar">
          {/* Section gauche avec avatar et infos utilisateur */}
          <Col flex="none" className="app-header__left">
            <div className="app-header__user-info">
              <div className="app-header__avatar-wrapper">
                <Image
                  src={ellipse9}
                  width={40}
                  height={40}
                  preview={false}
                  className="app-header__user-avatar"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                />
                <div className="app-header__online-indicator"></div>
              </div>
              <div className="app-header__user-details">
                <div className="app-header__user-name">
                  {fullName}
                </div>
                <div className="app-header__user-email">
                  {email}
                </div>
              </div>
            </div>
          </Col>

          {/* Section droite avec icônes */}
          <Col flex="auto" className="app-header__right">
            <div className="app-header__actions">
              <div className="app-header__search-wrapper">
                <SearchOutlined className="app-header__search-icon" />
                <span className="app-header__search-text">Recherche</span>
              </div>

              <div className="app-header__icon-group">
                <Badge dot>
                  <div className="app-header__icon-wrapper">
                    <BellOutlined className="app-header__icon" />
                  </div>
                </Badge>

                <div className="app-header__icon-wrapper">
                  <svg
                    className="app-header__icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                  </svg>
                </div>

                <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
                  <div className="app-header_icon-wrapper app-header_profile-icon">
                    <svg
                      className="app-header__icon"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Séparateur */}
      <div className="app-header__separator"></div>

      {/* Bandeau d'info avec cercle de progression */}
      <div className="app-header__banner">
        <Tooltip title={`${profileCompletion}% complété`}>
          <img
            src={subIcon}
            alt="Profile completion"
            width={18}
            height={18}
            className="app-header__banner-progress"
          />
        </Tooltip>

        <span className="app-header__banner-text">
          Just a few details left to complete your profile!
        </span>

        <Button
          type="primary"
          className="app-header__banner-btn"
          onClick={onCtaClick}
        >
          Complete your profile
        </Button>
      </div>
    </div>
  );
}