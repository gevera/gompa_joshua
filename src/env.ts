import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
  TELEGRAM_BOT_TOKEN: {},
	TELEGRAM_CHAT_ID: {}
});
