import pandas as pd
url = 'https://raw.githubusercontent.com/Muralimekala/python/master/Salaries.csv'
sf = pd.read_csv(url)

print(sf.head())
