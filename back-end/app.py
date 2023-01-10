from flask import Flask, request, jsonify
import joblib
import numpy as np
import pandas as pd

# load model
loaded_model = joblib.load("stock_pred_model.joblib")

def return_prediction(model, sample_json):
    open = float(sample_json['open'])
    high = float(sample_json['high'])
    low = float(sample_json['low'])
    volume = float(sample_json['volume'])
    
    value = [[open, high, low, volume]]
    print(value)
            
    pred_value = model.predict(value)
    print(pred_value)
    
    return pred_value


app = Flask(__name__)
# Configure a secret SECRET_KEY
app.config['SECRET_KEY'] = 'mysecretkey'

# API
@app.route('/api', methods=['POST'])
def predict():
    content = request.json

    result = return_prediction(model=loaded_model, sample_json=content)
    
    return {"close": result[0]}


if __name__ == '__main__':
    app.run(debug=True)