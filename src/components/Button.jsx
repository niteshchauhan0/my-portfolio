import PropTypes from "prop-types";

const iconMap = {
  arrow: "->",
  download: "CV",
  mail: "@",
};

const BaseButton = ({
  href,
  label,
  icon,
  classes = "",
  target = "_self",
  variant = "primary",
}) => {
  const Component = href ? "a" : "button";
  const props = href ? { href, target, rel: target === "_blank" ? "noreferrer" : undefined } : { type: "button" };

  return (
    <Component className={`btn ${variant === "primary" ? "btn-primary" : "btn-outline"} ${classes}`} {...props}>
      <span>{label}</span>
      {icon ? <span className="text-xs uppercase tracking-[0.2em] text-current/80">{iconMap[icon] ?? icon}</span> : null}
    </Component>
  );
};

BaseButton.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  classes: PropTypes.string,
  target: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "outline"]),
};

const ButtonPrimary = (props) => <BaseButton {...props} variant="primary" />;
const ButtonOutline = (props) => <BaseButton {...props} variant="outline" />;

export { ButtonPrimary, ButtonOutline };
