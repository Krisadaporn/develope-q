import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <nav>
        <ul>
          <li><Link href="/"><a>Dashboard</a></Link></li>
          <li><Link href="/analytics"><a>Analytics</a></Link></li>
          <li><Link href="/settings"><a>Settings</a></Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
