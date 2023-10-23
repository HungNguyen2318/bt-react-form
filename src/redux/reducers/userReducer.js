import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userList: [
        { id: '001', name: 'Nguyễn Minh Nguyên', phone: '0378899765', email: 'hungnm@gmail.com' },
        { id: '002', name: 'Lê Văn Bê', phone: '0996548923', email: 'belv@gmail.com' },
        { id: '003', name: 'Liễu Thị Liên', phone: '0996548934', email: 'lienlt@gmail.com' },
    ],
    editUser: {},
    isDisabled: false
};

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        addUser: (state, { payload }) => {
            state.userList.push(payload);
        },
        removeUser: (state, { payload }) => {
            let index = state.userList.findIndex(user => user.id === payload);
            if (index !== -1) {
                state.userList.splice(index, 1);
            }
        },
        updateUser: (state, { payload }) => {
            let index = state.userList.findIndex(user => user.id === payload.id);
            if (index !== -1) {
                state.userList[index] = payload;
            }
        },
        setEditUser: (state, { payload }) => {
            let user = state.userList.find(user => user.id === payload);
            if (user) {
                state.editUser = user;
            } else {
                state.editUser = {};
            }
        },
        setIsDisabled: (state, { payload }) => {
            state.isDisabled = payload;
        }
    }
});

export const {
    addUser,
    removeUser,
    updateUser,
    setEditUser,
    setIsDisabled
} = userReducer.actions;

export default userReducer.reducer;