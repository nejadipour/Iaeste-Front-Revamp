import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode, logLevel}) => {

    return {
        plugins: [react()],
        define: {},
    }
})
