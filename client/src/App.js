import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="text-3xl font-bold underline">Hello world!</h1>
                <div class="p-6 mt-2 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div class="shrink-0">
                        <img
                            class="h-12 w-12"
                            src={logo}
                            alt={"ChitChat Logo"}
                        />
                    </div>
                    <div>
                        <div class="text-xl font-medium text-black">
                            ChitChat
                        </div>
                        <p class="text-slate-500">You have a new message!</p>
                    </div>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
