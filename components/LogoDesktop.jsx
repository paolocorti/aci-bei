import { useRouter } from "next/router";
import { useState } from "react";

const LogoDesktop = ({ style }) => {
  const router = useRouter();
  const [isOver, setIsOver] = useState(false);
  const [isOver2, setIsOver2] = useState(false);
  return (
    <svg id="Livello_1" x="0px" y="0px" viewBox="0 0 500 300" style={style}>
      <g transform="translate(-167,-150)">
        <g>
          <g>
            <defs>
              <rect
                id="SVGID_1_"
                x="168.1"
                y="162.3"
                width="553.9"
                height="310"
              />
            </defs>
            <clipPath id="SVGID_00000143600467964145221980000005853882851149765279_">
              <use href="#SVGID_1_" style={{ overflow: "visible" }} />
            </clipPath>

            <circle
              style={{
                clipPath:
                  "url(#SVGID_00000143600467964145221980000005853882851149765279_)",
                stroke: "#314999",
                strokeWidth: 10,
                cursor: "pointer",
              }}
              cx="304.2"
              cy="298.4"
              r="131.1"
              onClick={() => router.push("/it/home")}
              onMouseEnter={() => setIsOver(true)}
              onMouseLeave={() => setIsOver(false)}
              fill={isOver ? "#314999" : "transparent"}
            />
          </g>
          <g>
            <defs>
              <rect
                id="SVGID_00000067233502038637690200000012053785353734582697_"
                x="271"
                y="227.6"
                transform="matrix(2.641989e-03 -1 1 2.641989e-03 163.8321 929.5112)"
                width="553.9"
                height="310"
              />
            </defs>
            <clipPath id="SVGID_00000177455733253678619870000004332262742036810932_">
              <use
                href="#SVGID_00000067233502038637690200000012053785353734582697_"
                style={{ overflow: "visible" }}
              />
            </clipPath>

            <ellipse
              style={{
                clipPath:
                  "url(#SVGID_00000177455733253678619870000004332262742036810932_)",
                stroke: "#314999",
                strokeWidth: 10,
                strokeMiterlimit: 4,
                cursor: "pointer",
              }}
              cx="529.2"
              cy="298.4"
              rx="131.1"
              ry="131.1"
              onClick={() => router.push("/en/home")}
              onMouseEnter={() => setIsOver2(true)}
              onMouseLeave={() => setIsOver2(false)}
              fill={isOver2 ? "#314999" : "transparent"}
            />
          </g>
        </g>
        <g className="st2" onClick={() => router.push("/it/home")}>
          <path
            className="st3"
            fill={isOver ? "#cececf" : "#314999"}
            d="M218.8,323.3l31.3-67.3c0.3-0.6,1-1.1,1.7-1.1h1c0.7,0,1.4,0.5,1.7,1.1l31.3,67.3c0.6,1.3-0.2,2.6-1.7,2.6H273
		c-1.8,0-2.6-0.6-3.5-2.5l-3.6-7.9h-27.2l-3.6,8c-0.5,1.2-1.6,2.4-3.6,2.4h-11C219,325.9,218.2,324.6,218.8,323.3z M259.9,301.9
		l-7.6-16.5h-0.1l-7.5,16.5H259.9z"
          />

          <path
            className="st3"
            fill={isOver ? "#cececf" : "#314999"}
            d="M324.5,254.9c10,0,17.4,3.1,24.2,9.3c0.9,0.8,0.9,2,0.1,2.8l-7.8,8.1c-0.7,0.7-1.8,0.7-2.5,0
		c-3.7-3.3-8.6-5.1-13.5-5.1c-11.3,0-19.6,9.4-19.6,20.6c0,11.1,8.4,20.3,19.7,20.3c4.7,0,9.8-1.7,13.4-4.8c0.7-0.6,2-0.6,2.6,0.1
		l7.8,8.3c0.7,0.7,0.6,2-0.1,2.7c-6.8,6.6-15.4,9.7-24.3,9.7c-20,0-36.1-15.9-36.1-35.9S304.5,254.9,324.5,254.9z"
          />
          <path
            className="st3"
            fill={isOver ? "#cececf" : "#314999"}
            d="M360.8,257.8c0-1,0.9-1.9,1.9-1.9h12c1,0,1.9,0.9,1.9,1.9V324c0,1-0.9,1.9-1.9,1.9h-12c-1,0-1.9-0.9-1.9-1.9
		V257.8z"
          />
        </g>
        <g className="st2" onClick={() => router.push("/en/home")}>
          <path
            className="st3"
            fill={isOver2 ? "#cececf" : "#314999"}
            d="M461.3,257.8c0-1,0.8-1.9,1.9-1.9h23.3c11.8,0,21.5,8.1,21.5,18.6c0,7.7-6.9,13.3-11.6,15.8
		c5.3,2.2,13.4,7.1,13.4,16.3c0,11.2-9.9,19.3-21.8,19.3h-24.8c-1.1,0-1.9-0.9-1.9-1.9V257.8z M484.7,284.3c3.8,0,7-3.2,7-7.2
		s-3.2-6.8-7-6.8h-7.8v14H484.7z M486,311.6c3.9,0,7.2-3.2,7.2-7.3c0-4-4.3-7-8.2-7h-8.1v14.3H486z"
          />
          <path
            className="st3"
            fill={isOver2 ? "#cececf" : "#314999"}
            d="M522.5,257.8c0-1,0.8-1.9,1.9-1.9h41.4c1.1,0,1.9,0.9,1.9,1.9v10.9c0,1-0.8,1.9-1.9,1.9h-27.7V283h22.8
		c1,0,1.9,0.9,1.9,1.9v10.9c0,1.1-0.9,1.9-1.9,1.9h-22.8v13.5h27.7c1.1,0,1.9,0.9,1.9,1.9V324c0,1-0.8,1.9-1.9,1.9h-41.4
		c-1.1,0-1.9-0.9-1.9-1.9V257.8z"
          />
          <path
            className="st3"
            fill={isOver2 ? "#cececf" : "#314999"}
            d="M581.1,257.8c0-1,0.9-1.9,1.9-1.9h12c1,0,1.9,0.9,1.9,1.9V324c0,1-0.9,1.9-1.9,1.9h-12c-1,0-1.9-0.9-1.9-1.9
		V257.8z"
          />
        </g>
      </g>
    </svg>
  );
};

export default LogoDesktop;
