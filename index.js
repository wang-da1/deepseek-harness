import { defineTool } from '@deepseek-ai/dsh-tools'
import type { Context } from '@deepseek-ai/dsh'

export const inject = ['tools']

export function apply(ctx: Context) {
  ctx.logger.info("✅ 我的测试插件加载成功！")

  // 注册一个名字叫 hello_demo 的工具
  ctx.tools.register(defineTool({
    name: "hello_demo",
    description: "测试插件工具，返回一句问候",
    input: {
      name: { type: "string", description: "传入名字" }
    },
    async execute(args) {
      return `你好 ${args.name}！这是我的DSH插件工具返回的内容`
    }
  }))
}
