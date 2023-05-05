import { Outlet } from "react-router-dom";
import ConversationSidebar from "./ConversationSidebar";
import ConversationHeader from "./ConversationHeader";
import { ConversationPageStyle, Page } from "../../utils/styles";

function ConversationsLayout() {
    return (
        <Page>
            {/* <ConversationHeader/> */}
            <ConversationSidebar />
            <ConversationPageStyle>
                <Outlet />
            </ConversationPageStyle>
        </Page>
    );
}

export default ConversationsLayout;
