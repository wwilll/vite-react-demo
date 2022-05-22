import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';
import checker from 'vite-plugin-checker';
import legacy from '@vitejs/plugin-legacy';
import VitePrettier from 'vite-plugin-prettier';
// 作者说VitePrettier不需要其他配置，但是为了vscode编辑器能识别，还是得写配置文件
const prettierConfig = require('.prettierrc.js');

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '');
  const legacyMode =
    env.target != 'es6'
      ? [
          legacy({
            targets: ['defaults', 'not IE 11'],
          }),
        ]
      : [];
  const basePath = env.APP_BASE ? `/${env.APP_BASE}/` : '/';
  // console.log(env.target, env.APP_ENV, env.APP_BASE);
  const config = {
    // vite config
    define: {
      __APP_ENV__: env.APP_ENV,
      // basePath包含[/],直接传递该字符串会报错，只能暂时用对象了
      __APP_INFO__: { basePath },
      __APP_RUN_AT_STRICT_MODE__: false,
    },
    plugins: [react(), checker({ typescript: true }), ...legacyMode, VitePrettier(prettierConfig)],
    server: {
      port: 4000,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        hashPrefix: 'prefix',
      },
      preprocessorOptions: {
        less: {},
      },
    },
    base: basePath,
    build: {
      sourcemap: !!env.soucemap,
    },
  };
  return config;
});
