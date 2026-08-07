import CapsuleText from "../Capsule-Text";

function HeaderCard({ icon, pilltext, heading, caption }) {
  return (
    <div className="header-card">
      <div className="top-header-card">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="heading-and-subheading">
          <span className="heading">{heading}</span>
          {caption && <span className="subheading">{caption}</span>}
        </div>
        {pilltext && <CapsuleText text={pilltext} />}
      </div>
    </div>
  );
}

export default HeaderCard;
