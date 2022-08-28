import clear from 'rollup-plugin-clear' // 清理文件夹
import resolve from '@rollup/plugin-node-resolve' // 如何查找外部模块
import json from '@rollup/plugin-json' // json 文件处理
import typescript from 'rollup-plugin-typescript2' // TS
import babel from '@rollup/plugin-babel' // babel 处理
import commonjs from '@rollup/plugin-commonjs' // 将 CommonJS 转换成 ES2015 模块
import filesize from 'rollup-plugin-filesize' // 查看构建后的文件大小
import peerDepsExternal from 'rollup-plugin-peer-deps-external' // 自动添加 external

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: 'packages/es/index.js',
        format: 'esm'
      },
      {
        file: 'packages/lib/index.js',
        format: 'cjs'
      },
    ],
    plugins: [
      clear({
        targets: ['packages/lib', 'packages/es', 'packages/types']
      }),
      peerDepsExternal(),
      resolve({ extensions: ['.ts', '.js'] }),
      json(),
      typescript({ useTsconfigDeclarationDir: true }),
      commonjs(),
      babel({
        exclude: '**/node_modules/**',
        include: 'src/**',
        extensions: ['.ts', '.js'],
        babelHelpers: 'runtime',
        rootMode: 'upward',
        targets: {
          ie: '11'
        }
      }),
      filesize()
    ]
  }
]
