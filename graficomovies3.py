"""grafico en pie """

import pandas as pd
import matplotlib.pyplot as plt
df=pd.read_excel("movies3.xlsx",index_col="Rank")
"""df1=df.groupby("Year").mean()"""
df1=df.groupby("Year").agg({"Votes":"sum","Revenue (Millions)":"mean"})
print(df1.head(11))
grouped=df1
grouped["Votes"].plot.pie(autopct=('%1.1f%%'))
plt.title('Votos Obtenidos Por AÑOS')
plt.ylabel("")
plt.legend()
plt.show()

