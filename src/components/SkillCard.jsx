import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes = "" }) => {
  return (
    <div className={`surface flex items-center gap-4 rounded-[24px] p-4 ${classes}`}>
      <figure className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-stone-950/70">
        <img src={imgSrc} width={30} height={30} alt={label} />
      </figure>

      <div>
        <h3 className="text-lg text-stone-100">{label}</h3>
        <p className="text-sm text-stone-400">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
