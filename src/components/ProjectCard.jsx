/**
 *  @copyright 2024 niteshsingh
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ProjectCard = ({
  imgSrc,
  title,
  desc,
  projectLink,
  classes = ""
}) => {
  return (
    <div className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors ${classes}`}>
      <figure className="aspect-square rounded-lg mb-4 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="mb-3">
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-sm text-zinc-400">
          {desc}
        </p>
      </div>

      {projectLink && (
        <div className="mt-4">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
          >
            Visit Project
            <span className="material-symbols-rounded text-base">arrow_outward</span>
          </a>
        </div>
      )}
    </div>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
};

export default ProjectCard;
