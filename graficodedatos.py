import pandas as pd 
import matplotlib.pyplot as plt

woorkbook1 = "EmpleadosData.xlsx"

df=pd.read_excel(woorkbook1)

print(df.head())
valores=df[["Apellidos","Salario(S/.)"]]
print(valores)
ax=valores.plot.bar(x="Apellidos",y="Salario(S/.)", rot= 0)
plt.show()
