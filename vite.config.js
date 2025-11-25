import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    root: 'src',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                courses: resolve(__dirname, 'src/courses.html'),
                blogs: resolve(__dirname, 'src/blogs.html'),
            }
        }
    }
})
