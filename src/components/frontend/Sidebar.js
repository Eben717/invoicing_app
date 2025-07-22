import React from 'react';
import { FaFileInvoiceDollar, FaUsers, FaChartBar, FaCog, FaSignOutAlt, FaHome } from 'react-icons/fa';

const Sidebar = ({ onNavigate }) => {
    const menuItems = [
        { label: 'Dashboard', icon: <FaHome />, key: 'dashboard' },
        { label: 'Invoices', icon: <FaFileInvoiceDollar />, key: 'invoices' },
        { label: 'Clients', icon: <FaUsers />, key: 'clients' },
        { label: 'Reports', icon: <FaChartBar />, key: 'reports' },
        { label: 'Settings', icon: <FaCog />, key: 'settings' },
        { label: 'Logout', icon: <FaSignOutAlt />, key: 'logout' },
    ];

    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h2>InvoicingApp</h2>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    {menuItems.map(item => (
                        <li key={item.key} onClick={() => onNavigate && onNavigate(item.key)}>
                            <span className="sidebar-icon">{item.icon}</span>
                            <span className="sidebar-label">{item.label}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;