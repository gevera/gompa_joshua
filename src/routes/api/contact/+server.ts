import { error, json } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from './$types';

export const prerender = false;

const esc = (s: string) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json().catch(() => null);
	if (!body) throw error(400, 'Invalid JSON');

	const fields = ['name', 'email', 'tel', 'content', 'hear'] as const;
	const data: Record<(typeof fields)[number], string> = {} as never;
	for (const f of fields) {
		const v = body[f];
		if (typeof v !== 'string' || v.trim() === '') throw error(400, `Missing field: ${f}`);
		data[f] = v.trim();
	}

	const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = env;
	if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) throw error(500, 'Telegram relay not configured');

	const text =
		`<b>New contact — gompa_joshua</b>\n` +
		`<b>Name:</b> ${esc(data.name)}\n` +
		`<b>Email:</b> ${esc(data.email)}\n` +
		`<b>Phone:</b> ${esc(data.tel)}\n` +
		`<b>Message:</b> ${esc(data.content)}\n` +
		`<b>Heard via:</b> ${esc(data.hear)}\n` +
		`<b>Time:</b> ${new Date().toLocaleString('en-US')}`;

	const tg = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'HTML' })
	});

	if (!tg.ok) throw error(502, 'Failed to deliver message');

	return json({ ok: true });
};
