import { AddUserAction, IUser } from "./action";

export interface IUserState {
    users: IUser[],
    accessToken: string
}
const initUserState: IUserState = {
    users: [],
    accessToken: ''
}
type ICombinedAction = AddUserAction
const userReducer = (state: IUserState=initUserState, action: ICombinedAction): IUserState => {
    switch(action.type) {
        case 'add-user':
            state = {
                ...state,
                users: state.users.concat(action.payload)
            }
            break;
    }
    return state;
}
export default userReducer