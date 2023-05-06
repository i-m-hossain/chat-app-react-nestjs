import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Conversations from "./pages/Conversations";
import ConversationChannelPage from "./pages/ConversationChannelPage";
import ConversationsLayout from "./components/conversations/ConversationsLayout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/conversations" element={<ConversationsLayout />}>
                    <Route index element={<Conversations />} />
                    <Route path=":id" element={<ConversationChannelPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
