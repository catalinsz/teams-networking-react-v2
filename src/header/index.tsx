import { MainMenu } from "../menu/MainMenu";

export default function AppHeader() {
  return (
    <header>
      <div id="header-wrapper">
        <div></div>
        <div>
          <h1>Catalin Szilagyi</h1>
          <h2 id="job-title">Junior Fullstack Dev @ CargoTrack</h2>
        </div>
      </div>

      <MainMenu />
    </header>
  );
}
