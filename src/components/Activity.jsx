import { CheckCircle2 } from "lucide-react";

const Activity = ({ activities }) => {
  return (
    <div className="activity-card">
      <div className="card-header">
        <div>
          <h2>Recent Activity</h2>
          <p>Latest customer activities</p>
        </div>
      </div>

      <div className="activity-list">
        {activities.map((item, index) => (
          <div className="activity" key={index}>
            <div className="activity-icon">
              <CheckCircle2 size={18} />
            </div>

            <div>
              <strong>{item.name}</strong>
              <p>{item.action}</p>
              <small>{item.time}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
