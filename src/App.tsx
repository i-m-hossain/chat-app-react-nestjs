import { Outlet, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Authentication/>}/>
                <Route
                    path="conversations"
                    element={
                        <div>
                            <div>Conversations</div>
                            <Outlet />
                        </div>
                    }
                >
                  <Route path=":id" element={<div>Conversation ID page</div>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
