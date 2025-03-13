# Action que envía un mensaje a un canal de Discord, indicando el nombre del usuario que ha ejecutado el workflow.

from discord_webhook import DiscordWebhook
import sys

# Recibir por parámetro el nombre del usuario que ha ejecutado el workflow
url = sys.argv[1]
user = sys.argv[2]

webhook = DiscordWebhook(url=url, content=user)
response = webhook.execute()