import axios from 'axios'

export default axios.create({
    baseUrl: '/api/',
    headers: [
        {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]'),
            'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        }
    ]
})
