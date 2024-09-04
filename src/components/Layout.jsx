import { useThemeStates } from "../Context";

const Layout = ({ children }) => {
  const { theme } = useThemeStates();
  console.log(theme);
  return (
    <div style={{ background: theme.background, color: theme.font }}>
      {children}
    </div>
  );
};

export default Layout;
