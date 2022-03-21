import cn from "classnames";
import PropTypes from "prop-types";

const PlaylistCard = ({ select, selected, title, description }) => {
  return (
    <div
      className={cn("item", { active: selected, almafa: false })}
      onClick={select}
    >
      <i className="large compact disc middle aligned icon"></i>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

PlaylistCard.propTypes = {
  select: PropTypes.func,
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PlaylistCard;
