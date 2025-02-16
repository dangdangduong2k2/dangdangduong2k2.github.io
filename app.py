from flask import Flask, render_template
from pyngrok import ngrok

app = Flask(__name__)

# Tạo tunnel ngrok
http_tunnel = ngrok.connect(5000)
print('Public URL:', http_tunnel.public_url)

@app.route('/')
def trang_chu():
    return render_template('index.html')

if __name__ == '__main__':
    app.run() 