print("mensaje")
import matplotlib.pyplot as plt


x1 = [1,2,3]
y1 = [5,7,4]
x2 = [1,2,3]
y2 = [7,5,6]
plt.plot(x1, y1, label="tipo 1")
plt.plot(x2, y2, label="tipo 2")
plt.xlabel("eje x")
plt.ylabel("eje y")
plt.title("Grafico lineal")
plt.legend()
plt.show()
