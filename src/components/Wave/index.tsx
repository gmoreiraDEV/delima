import * as React from "react";
import { SVGProps } from "react";
export default function Wave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1440}
      height={238}
      preserveAspectRatio="none"
      fill="none"
      {...props}
    >
      <path
        className="fill-brand-green-500"
        fill="#299D91"
        d="M0 167v-32.5l60-8 97.5-3 480 72.5s193.061.122 316-11.5c192.43-18.191 486.5-91 486.5-91v144H0V167Z"
      />
      <path
        fill="url(#wave_gradient)"
        d="M1045 132.269c-206.769 30.721-333.14 0-502.751-30.722C388.152 73.66 216.268 15.016-.5 4.5l.5 120s50.992-16.304 142.883-14.5c91.892 1.805 208.78 14.073 411.529 45.825 202.698 31.753 344.633 4.073 490.588-23.556Z"
      />
      <path
        className="fill-brand-orange"
        d="M0 134.5C396.062 55.216 697.745 365.562 1440 0v116.5c-423.52 143.268-738.855 117.901-987.476 61.851C135.077 106.691 59.371 129.93 6 134"
      />
      <defs>
        <linearGradient
          id="wave_gradient"
          x1="1050.78"
          y1="32.5392"
          x2="13.9916"
          y2="120.315"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="var(--color-green-200)" />
          <stop offset="0%" stop-color="var(--color-green-300)" />
          <stop offset="40%" stop-color="var(--color-green-400)" />
          <stop offset="60%" stop-color="var(--color-green-500)" />
          <stop offset="100%" stop-color="var(--color-green-600)" />
        </linearGradient>
      </defs>
    </svg>
  );
}
