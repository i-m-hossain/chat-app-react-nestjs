import { ConversationSidebarStyle } from "../../utils/styles";
import {TbEdit} from "react-icons/tb"
function ConversationSidebar() {
    return (
        <ConversationSidebarStyle>
            <header>
                <h1>Conversations</h1>
                <TbEdit size={36}/>
            </header>
        </ConversationSidebarStyle>
    );
}

export default ConversationSidebar;
