import discord
import os
from dotenv import load_dotenv

# .envファイルから環境変数をロード
load_dotenv()

# トークンを環境変数から取得
TOKEN = os.getenv('DISCORD_TOKEN')

# クライアントインスタンスの作成
client = discord.Client()

# ボットが起動したときに実行されるイベント
@client.event
async def on_ready():
    print(f'Logged in as {client.user}')

# メッセージを受け取ったときのイベント
@client.event
async def on_message(message):
    if message.author == client.user:
        return

    # メッセージが「!hello」の場合に「Hello!」と返す
    if message.content.startswith('!hello'):
        await message.channel.send('Hello!')

# ボットの起動
client.run(TOKEN)
