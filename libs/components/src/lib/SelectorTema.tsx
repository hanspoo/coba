import { RootState, setTheme } from '@coba/redux-store';
import { useDispatch, useSelector } from 'react-redux';

const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
];

export function SelectorTema() {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: RootState) => state.shoppingCart);
  return (
    <select
      onChange={(e) => dispatch(setTheme(e.target.value))}
      defaultValue={theme}
    >
      {themes.map((s) => (
        <option key={s} value={s}>
          {s}
        </option>
      ))}
    </select>
  );
}
