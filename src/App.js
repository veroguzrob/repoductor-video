import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <ReactPlayer
        url={'//www.youtube.com/watch?v=ugp2hjSycmk'}
        controls
        loop

      />
    </div>
  );
}

export default App;