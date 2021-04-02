import axios from 'axios'

export default {
    state: {
        currentUser: localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null,
        loginError: null,
        processing: false
    },
    getters: {
        currentUser: state => state.currentUser,
        processing: state => state.processing,
        loginError: state => state.loginError
    },
    mutations: {
        setUser(state, payload) {
            state.currentUser = payload;
            state.processing = false;
            state.loginError = null
        },
        setLogout(state) {
            state.currentUser = null;
            state.processing = false;
            state.loginError = null
        },
        setProcessing(state, payload) {
            state.processing = payload;
            state.loginError = null
        },
        setError(state, payload) {
            state.loginError = payload;
            state.currentUser = null;
            state.processing = false
        },
        clearError(state) {
            state.loginError = null
        }
    },
    actions: {

        login({commit}, payload) {
            console.log('vuex login');
            commit('clearError');

            return new Promise((resolve, reject) => {
                console.log('make post')
                axios.post('/api/auth/login', {email: payload.email, password: payload.password})
                    .then(response => {
                        console.log(response);
                        localStorage.setItem('user', JSON.stringify(response.data.user));
                        localStorage.setItem('accessToken', response.data.access_token);
                        commit('setUser', response.data.user);
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
            })
        },
        signOut({commit}) {
            localStorage.removeItem('user');
            localStorage.removeItem('accessToken');
            commit('setLogout')
        }
    }
}
