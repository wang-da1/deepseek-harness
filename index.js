import type { Context } from '@deepseek-ai/dsh'

export function apply(ctx: Context) {
  ctx.logger.info("✅ 我的测试插件加载成功！")
}
