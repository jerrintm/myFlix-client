import { createRoot } from 'react-dom/client';

// Below line with import MainView function from the path /components/main-view/main-view , the file extension jsx for main-view.jsx doesn't not need to be added for jsx code.
import { MainView } from "./components/main-view/main-view";

// Import statement to indicate that you need to bundle `./index.scss`
import "./index.scss";

// Main component (will eventually use all the others)
/*   
      const MyFlixApplication = () => {
    return (
        <div className="my-flix">
            <div>Good morning</div>
        </div>
    );
};
*/
const App = () => {
    return <MainView />;
};


// Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);

// Tells React to render your app in the root DOM element

// root.render(<MyFlixApplication />);
root.render(<App />);
