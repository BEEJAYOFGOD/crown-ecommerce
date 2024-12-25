import { Outlet } from "react-router-dom";

const TopicLayout = () => {
  return (
    <div className="topic-layout">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default TopicLayout;
