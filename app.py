from flask import Flask, render_template
import os

app = Flask(__name__, template_folder='.', static_folder='assets')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/detail')
def detail():
    return render_template('detail.html')

# Không cần thay đổi gì ở đây nếu đã để popup.html ở static hoặc assets

if __name__ == '__main__':
    app.run(debug=True)