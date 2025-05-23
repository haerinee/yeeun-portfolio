const SvgMenu = (props) => {
  const { iconColor = "#7C7C7C", ...rest } = props;

  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 19 16"
        fill="none"
        {...rest}
      >
        <g clipPath="url(#menu_svg__a)">
          <path
            d="M2 6.5C1.17 6.5 0.5 7.17 0.5 8C0.5 8.83 1.17 9.5 2 9.5C2.83 9.5 3.5 8.83 3.5 8C3.5 7.17 2.83 6.5 2 6.5ZM2 0.5C1.17 0.5 0.5 1.17 0.5 2C0.5 2.83 1.17 3.5 2 3.5C2.83 3.5 3.5 2.83 3.5 2C3.5 1.17 2.83 0.5 2 0.5ZM2 12.5C1.17 12.5 0.5 13.18 0.5 14C0.5 14.82 1.18 15.5 2 15.5C2.82 15.5 3.5 14.82 3.5 14C3.5 13.18 2.83 12.5 2 12.5ZM6 15H18C18.55 15 19 14.55 19 14C19 13.45 18.55 13 18 13H6C5.45 13 5 13.45 5 14C5 14.55 5.45 15 6 15ZM6 9H18C18.55 9 19 8.55 19 8C19 7.45 18.55 7 18 7H6C5.45 7 5 7.45 5 8C5 8.55 5.45 9 6 9ZM5 2C5 2.55 5.45 3 6 3H18C18.55 3 19 2.55 19 2C19 1.45 18.55 1 18 1H6C5.45 1 5 1.45 5 2Z"
            fill={iconColor}
          />
        </g>
        <defs>
          <clipPath id="menu_svg__a">
            <path fill="#fff" d="M0 0h24v24H0z" />
          </clipPath>
        </defs>
      </svg>
    </svg>
  );
};
export default SvgMenu;
