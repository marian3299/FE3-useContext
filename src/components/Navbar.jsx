import { useThemeStates } from "../Context";

const Navbar = () => {
  const { handleThemeChange } = useThemeStates();
  return (
    <div>
      <p>Inicio</p>
      <button onClick={handleThemeChange}>Change theme</button>
    </div>
  );
};

export default Navbar;
