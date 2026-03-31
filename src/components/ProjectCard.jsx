import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, desc, stack, year, projectLink, classes = "" }) => {
  return (
    <article className={`surface overflow-hidden rounded-[30px] transition duration-300 hover:-translate-y-1 ${classes}`}>
      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <figure className="min-h-[260px] overflow-hidden border-b border-white/10 lg:border-b-0 lg:border-r">
          <img src={imgSrc} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        </figure>

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-stone-400">
            <span>{year}</span>
            <span className="h-1 w-1 rounded-full bg-stone-500" />
            <span>{stack}</span>
          </div>

          <h3 className="mt-4 text-2xl text-stone-50 sm:text-3xl">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-stone-300 sm:text-base">{desc}</p>

          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full border border-orange-200/30 bg-orange-300/10 px-4 py-2 text-sm font-medium text-orange-100 transition hover:-translate-y-0.5 hover:bg-orange-300/20"
          >
            View project
          </a>
        </div>
      </div>
    </article>
  );
};

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default ProjectCard;
