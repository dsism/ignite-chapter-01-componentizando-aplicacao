import { GenreResponseProps } from '../App';
import { Button } from './Button';

interface SideBarProps {
  genres: GenreResponseProps[],
  selectedGenreId: number
  setSelectedGenreId: Function
}

export function SideBar(props: SideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.setSelectedGenreId(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}