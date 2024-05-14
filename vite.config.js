import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
 
export default defineConfig({
    plugins: [
        uni(),
        // 自动导入配置
        AutoImport({
            imports:[
                // 预设
                'vue',
                'uni-app'
            ],
			resolvers: [ElementPlusResolver()],
        }),
		Components({
		  resolvers: [ElementPlusResolver()],
		}),
    ],
	  server: {
	    host: "localhost", // 指定服务器应该监听哪个IP地址,默认：localhost
	    port: 5174,        // 指定开发服务器端口,默认：5173
	    proxy: {           // 为开发服务器配置自定义代理规则
	       // 带选项写法：http://localhost:5173/api/posts -> http://jsonplaceholder.typicode.com/posts
	      "/h5api": {
	        target: "http://localhost:8800", // 目标接口
	        changeOrigin: true,// 是否换源
	        rewrite: (path) => path.replace(/^\/h5api/, ""),
	      }
	    }
	  }
})
