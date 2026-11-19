export default function Sidebar({ menuItems, children }) {
  return (
    <>
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <ul>{children}</ul>
        </nav>
      </aside>
    </>
  );
}
