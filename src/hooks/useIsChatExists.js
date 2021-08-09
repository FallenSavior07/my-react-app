import { useSelector } from "react-redux";
import { chatsSelector } from '../selectors/chats';

export const useIsChatExists = ({ chatId }) => {
    const chats = useSelector(chatsSelector);
    return Boolean(Object.values(chats).find((chat) => chat.id === chatId));
}