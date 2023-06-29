import useSettings from "app/hooks/useSettings";

const MatxLogo = ({ className }) => {
  const { settings } = useSettings();
  const theme = settings.themes[settings.activeTheme];

  return (
    <svg
      width="24px"
      height="24px"
      className={className}
      viewBox="0 0 240 239"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    ></svg>
  );
};

export default MatxLogo;
