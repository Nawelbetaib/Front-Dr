// src/navigation/Layout.jsx
"use client";
import { Layout } from "antd";
import { useState, useMemo } from "react";
import SideNav from "../components/SideBar/SideBar";
import HeaderBar from "../components/SubMenu/SubMenu";
import "./Layout.css";

const { Sider, Content } = Layout;
const SIDER_W = 240;
const SIDER_W_COLLAPSED = 80;

/* Petit composant bouton (chevron) */
function SiderToggleBtn({ collapsed, onClick }) {
  return (
    <button
      className={`sider-toggle ${collapsed ? "is-collapsed" : ""}`}
      type="button"
      aria-label={collapsed ? "Open sidebar" : "Close sidebar"}
      aria-expanded={!collapsed}
      onClick={onClick}
    >
      {collapsed ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none" className="sider-toggle__ico">
          <path d="M0.750001 0.999999L8.25 8.5L0.75 16" stroke="#3D4C5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="17" viewBox="0 0 9 17" fill="none" className="sider-toggle__ico">
          <path d="M8.25 16L0.75 8.5L8.25 1" stroke="#3D4C5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}

export default function AppLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  /** ✅ Variables dynamiques qui se propagent aux enfants (Header, ScrollTabs) */
  const dynamicVars = useMemo(() => {
    return {
      // largeur max des blocs centrés (Header / ScrollTabs)
      "--page-max": collapsed ? "1360px" : "1224px",
      // padding latéral de la barre d'onglets
      "--tabs-side-pad": collapsed ? "28px" : "34px",
      // écart horizontal entre onglets
      "--tab-gap": collapsed ? "160px" : "200px",
    };
  }, [collapsed]);

  return (
    <Layout className="app-layout">
      <Layout className="app-body">
        {/* Sidebar */}
        <Sider
          className={`app-sider ${collapsed ? "ant-layout-sider-collapsed" : ""}`}
          width={SIDER_W}
          collapsedWidth={SIDER_W_COLLAPSED}
          collapsed={collapsed}
          trigger={null}
        >
          <SideNav collapsed={collapsed} />
          <SiderToggleBtn collapsed={collapsed} onClick={() => setCollapsed(v => !v)} />
        </Sider>

        {/* Contenu principal */}
        <Layout
          className={`app-main-content ${collapsed ? "is-collapsed" : ""}`}
          /** ✅ Injection des variables ici */
          style={dynamicVars}
        >
          <div className="app-header-container">
            <HeaderBar
              collapsed={collapsed}
              toggleCollapsed={() => setCollapsed(v => !v)}
            />
          </div>

          <Content className="app-layout__content">{children}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
