import React from "react";

type WaveProps = {
  fill?: string;
  fillOpacity?: number;
  className?: string;
  wrapperClassName?: string;
};

const Wave = ({
  fill = "#2C74BB",
  fillOpacity = 1,
  className = "relative block w-full h-40 md:h-52",
  wrapperClassName = "absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none",
}: WaveProps) => {
  return (
    <div className={`${wrapperClassName} pointer-events-none`}>
      <svg
        className={className}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={fill}
          fillOpacity={fillOpacity}
          d="M0,192L60,208C120,224,240,256,360,234.7C480,213,600,139,720,117.3C840,96,960,128,1080,154.7C1200,181,1320,203,1380,213.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default Wave;

